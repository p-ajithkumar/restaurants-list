import React, {useState, useEffect} from 'react'
import {Row , Col } from 'react-bootstrap';
import Datacard from './Datacard';
import Viewitem from '../Viewitem';
import { RestaurantsList} from '../actions/homeAction'
import { useDispatch, useSelector } from 'react-redux';

function Home() {


    const dispatch = useDispatch()


    useEffect(() => {


    dispatch(RestaurantsList())
    },[])
    

    const {restaurants} = useSelector(state=>state.restaurantReducer)

  return (
  <Row>
  {restaurants.map((item)=>(<Col className='px-5 py-3' md={4} sm={6}> <Datacard childitem ={item}/> </Col>))}
  </Row>
  )
}

export default Home