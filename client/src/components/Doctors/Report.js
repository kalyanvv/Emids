import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const n=8;
// function ListGroupWithHeaderExample() {
//   return (
    
//   );
// }
const a=["l","k","j",'p','o','t']
export default function Report() {
    return (
        [...a].map((elementInArray, index) => ( 
            <Card style={{ width: '18rem',float:'left', margin:'5%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            ) 

        )
    );
}