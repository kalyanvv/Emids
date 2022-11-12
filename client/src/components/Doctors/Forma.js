import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
const Forma=()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [blood, setBlood] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
  const [formdetails , setData]=useState([])
  const handleSubmit = (e)=>{      
    e.preventDefault();
    

}   
  return (
    <div style={{paddingLeft:'25%',paddingRight:'25%',paddingTop:'10%'}}>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder="Enter Email" value={email} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={address} />
      </Form.Group>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="formGridBg">
          <Form.Label>Blood-Group</Form.Label>
          <Form.Control type="text" placeholder="Enter blood group" value={blood}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMb">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="phonenumber" placeholder="Enter mobile number" value={number}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" value={city}>
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" value={state}>
          <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" value={zip}>
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </div>
  );
}

export default Forma;