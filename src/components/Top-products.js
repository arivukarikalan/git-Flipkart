import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import "../App.css"






function Product(props){
    const stockclass = props.stock === 'In stock' ? 'text-success' : 'text-danger';
    return (
        <div>
     
        <CardGroup className='card-group'>
        <Card className='card-container'>
          <Card.Img variant="top" src={props.image} className='img' />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
             <h4 className={stockclass}> {props.stock }</h4>
             <h5>Delivery In : {props.delivery}</h5> 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.price}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
    )};
export default Product;