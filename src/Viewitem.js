import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Row , Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Review from './components/Review';
import Collapse from 'react-bootstrap/Collapse';
import { useSelector,useDispatch } from 'react-redux';
import { RestaurantsList } from './actions/homeAction';

function Viewitem() {

  const params=useParams()
  console.log("product id",params.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const dispatch = useDispatch()
  useEffect(()=>
  {
    dispatch(RestaurantsList())
  })

  const {restaurants} = useSelector(state=>state.restaurantReducer)

  const currentItem =  restaurants.find((item)=> item.id == params.id) 
  console.log("current",currentItem);
  



  return (
 <>
  {  currentItem ?   (<Row className='p-5'>
        <Col md={3}> <Image className=' rounded p-1 border' src={currentItem.photograph} alt='image' fluid></Image> </Col>
        <Col md={8}>
        <ListGroup>
      <ListGroup.Item><h2>{currentItem.name}</h2>
      <p>{currentItem.neighborhood}</p></ListGroup.Item>
      <ListGroup.Item>Cusine : {currentItem.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address : {currentItem.address}</ListGroup.Item>
      <ListGroup.Item> <Button variant="primary" onClick={handleShow}>
      Click To See Operating Hours
      </Button>

      
      
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <ListGroup>
        <ListGroup.Item>Sunday : {currentItem.operating_hours.Sunday}</ListGroup.Item>
        <ListGroup.Item>Monday : {currentItem.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday : {currentItem.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday : {currentItem.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday : {currentItem.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday : {currentItem.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday : {currentItem.operating_hours.Saturday}</ListGroup.Item>

        </ListGroup>
    



        </Modal.Body>


      </Modal> </ListGroup.Item>


      <ListGroup.Item>   

      < Review childReview={currentItem.reviews}/>
     </ListGroup.Item>

     
    </ListGroup>
        </Col>
      </Row>): "nothing to show"}
 </>
  )
}

export default Viewitem



