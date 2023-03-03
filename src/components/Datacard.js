import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Datacard({childitem}) {
    console.log(childitem);
  return (
<Link style={{textDecoration:'none'}} to={`/view-item/${childitem.id}`}>
      <Card>
      <Card.Img style={{height:"auto", width:'auto' , borderRadius:"30px"}} className='p-2' variant="top" src={childitem.photograph} />
      <Card.Body>
        <Card.Title>{childitem.name}</Card.Title>
        <Card.Text>
       <p>Cuisine : {childitem.cuisine_type}
       </p>
        </Card.Text>
        <Card.Text>
  <p>
           {childitem.neighborhood}
  
  </p>         
   </Card.Text>
      </Card.Body>
    </Card>
</Link>
  )
}
