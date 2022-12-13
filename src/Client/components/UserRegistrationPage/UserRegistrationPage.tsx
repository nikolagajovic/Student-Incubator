import React, { useEffect, useState } from 'react';
import './UserRegistrationPage.css'
import { Col, Container, Card, Form, Button, Row } from 'react-bootstrap';

export function UserRegistrationPage() {
        const [username, setUsername] = useState("");
        const [firstname, setFirstName] = useState("");
        const [oib, setOIB] = useState("");
        const [gender, setGender] = useState("");
        const [city, setCity] = useState("");
        const [streetname, setStreetName] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [lastname, setLastName] = useState("");
        const [dateofbirth, setDateOfBirth] = useState("");
        const [country, setCountry] = useState("");
        const [postcode, setPostcode] = useState("");
        const [streetnumber, setStreetNumber] = useState("");
        const [ data, setData] = useState<any[]>([])
        const url = "http://localhost:5000/register";

  const SendData = () => {
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                firstname: firstname,
                oib: oib,
                gender: gender,
                city: city,
                streetname: streetname,
                password: password,
                email: email,
                lastname: lastname,
                dateofbirth: dateofbirth,
                country: country,
                postcode: postcode,
                streetnumber: streetnumber
            })
    }).then((res) => res.json())
    .then((actualData) => {
      console.log(actualData);
      setData(actualData as any);
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
    const fetchData = () => { 

    }

  useEffect(() => {
    SendData();
  }, []);
        return (
            <Container>
            <Card className="registrationForm">
                <Card.Body>
                    <Card.Title className='registertitleForm'>
                             User Registration

                    </Card.Title>
            
            <Form className='registerForm'>
                <Row>
                    <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='username' className='registertextForm'>Username:</Form.Label> 
                    
                    <Form.Control type='text' id='username' value={ username }
                                    onChange= { event => setUsername(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='email' className='registertextForm'>E-mail:</Form.Label> 
                    
                    <Form.Control type='email' id='email' value={ email }
                                    onChange= { event => setEmail(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>
               
                <Row>
                <Col md="6">
                    <Form.Group>
                        <Form.Label htmlFor='firstname' className='registertextForm'>First Name:</Form.Label> 
                    
                    <Form.Control type='text' id='firstname' value={ firstname }
                                    onChange= { event => setFirstName(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='lastname' className='registertextForm'>Last Name:</Form.Label> 
                    
                    <Form.Control type='text' id='lastname' value={ lastname }
                                    onChange= { event => setLastName(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='oib' className='registertextForm'>OIB:</Form.Label> 
                    
                    <Form.Control type='text' id='oib' value={ oib }
                                    onChange= { event => setOIB(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='dateOfBirthday' className='registertextForm'>Date of Birth:</Form.Label> 
                    
                    <Form.Control type='date' id='oib'   
                                    value={ dateofbirth }
                                    onChange= { event => setDateOfBirth(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>
                <Row> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='gender' className='registertextForm'>Gender:</Form.Label> 
                    
                    <Form.Select id='gender' value={ gender }
                                    onChange= { event => setGender(event.target.value) }>
                                    <option value="">Choose a gender</option>
                                    <option value="0">W</option>
                                    <option value="1">M</option>
                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='country' className='registertextForm'>Country:</Form.Label> 
                    
                    <Form.Select id='country' value={ country }
                                    onChange= { event => setCountry(event.target.value) }>

                                    <option value="1">Croatia</option>

                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='city' className='registertextForm'>City:</Form.Label> 
                    
                    <Form.Select id='city' value={ city }
                                    onChange= { event => setCity(event.target.value) }>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='postcode' className='registertextForm'>Postcode:</Form.Label> 
                    
                    <Form.Select  id='postcode' value={ postcode }
                                    onChange= { event => setPostcode(event.target.value) }>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                </Row>

                <Row>  
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetname' className='registertextForm'>Street Name:</Form.Label> 
                    
                    <Form.Control type='text' id='streetname' value={ streetname }
                                    onChange= { event => setStreetName(event.target.value) }>

                    </Form.Control>
                     
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetnumber' className='registertextForm'>Street Number:</Form.Label> 
                    
                    <Form.Control type='text' id='streetnumber' value={ oib }
                                    onChange= { event => setStreetNumber(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                </Row>
                <Row>
                <Col md="6">
              

                <Form.Group>
                    <Form.Label htmlFor='password' className='registertextForm'>Password:</Form.Label> 
                    
                    <Form.Control type='password' id='password' value={ password }
                                    onChange= { event => setPassword(event.target.value) }>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 

                 
                <Col md="6">
                <Form.Group>
                    <Button variant='primary' className='registerbuttonForm' onClick={ () => SendData()}>
                          Register      
                    </Button>
                </Form.Group> 
                </Col>
                 
                </Row>
            </Form>
            </Card.Body>
            </Card>
            </Container>    
        )
    }
