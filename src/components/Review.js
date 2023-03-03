import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';



function Review({childReview}) {

    console.log("need",childReview);
    const [open, setOpen] = useState(false);
  return (
<p>
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>

          <Collapse in={open}>
        <div id="example-collapse-text">

        {
    childReview.map(item=>(
    
        <ListGroup>
        <ListGroup.Item>Name: {item.name} <p>Date: {item.date}</p>   <p>Comments: {item.comments}</p> <p>Rating: {item.rating}</p> </ListGroup.Item>
      </ListGroup>
    ))
}
        </div>
      </Collapse>
</p>
      
  )
}

export default Review