import React, { useState } from 'react';
import './UserRegistrationPage.css'
import { Col, Container, Card, Form, Button, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

export function UserRegistrationPage() {

        const [startDate, setStartDate] = useState(new Date());
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
                    
                    <Form.Control type='text' id='username'>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='email' className='registertextForm'>E-mail:</Form.Label> 
                    
                    <Form.Control type='email' id='email'>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>
               
                <Row>
                <Col md="6">
                    <Form.Group>
                        <Form.Label htmlFor='firstname' className='registertextForm'>First Name:</Form.Label> 
                    
                    <Form.Control type='text' id='firstname'>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='lastname' className='registertextForm'>Last Name:</Form.Label> 
                    
                    <Form.Control type='text' id='lastname'>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='oib' className='registertextForm'>OIB:</Form.Label> 
                    
                    <Form.Control type='text' id='oib'>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='dateOfBirthday' className='registertextForm'>Date of Bithday:</Form.Label> 
                    
                    
                    <DatePicker id='dateOfBirthday' className='dateOfBirthday'
                        selected={startDate} onChange={(date) =>   
                        setStartDate(date as any)} 
                    />
                    
                </Form.Group>
                </Col>
                </Row>
                <Row> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='gender' className='registertextForm'>Gender:</Form.Label> 
                    
                    <Form.Select id='gender'>

                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='country' className='registertextForm'>Country:</Form.Label> 
                    
                    <Form.Select id='country'>

                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='city' className='registertextForm'>City:</Form.Label> 
                    
                    <Form.Select id='city'>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='postcode' className='registertextForm'>Postcode:</Form.Label> 
                    
                    <Form.Select  id='postcode'>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                </Row>

                <Row>  
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetname' className='registertextForm'>Street Name:</Form.Label> 
                    
                    <Form.Control type='text' id='streetname'>

                    </Form.Control>
                     
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetnumber' className='registertextForm'>Street Number:</Form.Label> 
                    
                    <Form.Control type='text' id='streetnumber'>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                </Row>
                <Row>
                <Col md="6">
              

                <Form.Group>
                    <Form.Label htmlFor='password' className='registertextForm'>Password:</Form.Label> 
                    
                    <Form.Control type='password' id='password'>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 

                 
                <Col md="6">
                <Form.Group>
                    <Button variant='primary' className='registerbuttonForm'>
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
