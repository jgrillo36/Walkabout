import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'



const Favorite = (props) => {
    console.log("inside: ", props);
    return (
      <div Container fluid>
      
        <div id={props.park.id}>
             <Container fluid><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.park.imageUrl}/>
  <Card.Body>
    <Card.Title>{props.park.fullName}</Card.Title>
    <Link to={`/Park/${props.park.parkCode}`}><Button> See more
    
  
    </Button>
    </Link>
   
  </Card.Body>
</Card>

</Container>
</div>
</div>


              
     
    )
}

export default Favorite
