import React from 'react';
import './UserRegistrationPage.css'
import { Col, Container, Card, Form, Alert, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface UserRegistrationPageSate{
    formData?:{
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        oib: string;
        dateOfBirthday: string;
        gender: string;
        country: string;
        city: string;
        postcode: string;
        streetName: string;
        streetNumber: string;
        password: string;

    };

    message?: string;

    isRegistatinComplete: boolean;

}


export class UserRegistrationPage extends React.Component{
    state: UserRegistrationPageSate;

    constructor (props: Readonly<{}>){
        super(props);

        this.state = {
            isRegistatinComplete: false,
        };
    }

    private formInputChanged (event: React.ChangeEvent<HTMLInputElement>){
        const newState = Object.assign(this.state, {
            formDara: {
            [event.target.id]: event.target.value,
            }
        });

        this.setState(newState);
    }

    render() {
        return (
             <Container>
                 <Col md = { { span:8, offset:2 } }>
                      <Card className="registrationForm">
                        <Card.Body>
                            <Card.Title className='registertitleForm'>
                             User Registration

                            </Card.Title>
                             {
                                (this.state.isRegistatinComplete === false) ?
                                this.renderForm() :
                                this.renderRegistrationCompleteMessage()
                            } 
                        </Card.Body>
                     </Card>
                 </Col>
            </Container>
     ); 

            
        
    }

    private renderForm(){
        return (
            
            <>
            
            <Form className='registerForm'>
                <Row>
                    <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='username' className='registertextForm'>Username:</Form.Label> 
                    
                    <Form.Control type='text' id='username'
                                    value={ this.state.formData?.username }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='email' className='registertextForm'>E-mail:</Form.Label> 
                    
                    <Form.Control type='email' id='email'
                                    value={ this.state.formData?.email }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>
               
                <Row>
                <Col md="6">
                    <Form.Group>
                        <Form.Label htmlFor='firstname' className='registertextForm'>First Name:</Form.Label> 
                    
                    <Form.Control type='text' id='firstname'
                                    value={ this.state.formData?.firstName }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='lastname' className='registertextForm'>Last Name:</Form.Label> 
                    
                    <Form.Control type='text' id='lastname'
                                    value={ this.state.formData?.lastName }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='oib' className='registertextForm'>OIB:</Form.Label> 
                    
                    <Form.Control type='text' id='oib'
                                    value={ this.state.formData?.oib }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='dateOfBirthday' className='registertextForm'>Date of Bithday:</Form.Label> 
                    
                    
                    <Form.Select id='dateOfBirthday'
                                    value={ this.state.formData?.dateOfBirthday }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                </Row>
                <Row> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='gender' className='registertextForm'>Gender:</Form.Label> 
                    
                    <Form.Select id='gender'
                                    value={ this.state.formData?.gender }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='country' className='registertextForm'>Country:</Form.Label> 
                    
                    <Form.Select id='country'
                                
                                    value={ this.state.formData?.country }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Select>
                    
                </Form.Group> 
                </Col>
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='city' className='registertextForm'>City:</Form.Label> 
                    
                    <Form.Select id='city'
                                    value={ this.state.formData?.city }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='postcode' className='registertextForm'>Postcode:</Form.Label> 
                    
                    <Form.Select  id='postcode'
                                    value={ this.state.formData?.postcode }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Select>
                    
                </Form.Group>
                </Col>
                </Row>

                <Row>  
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetname' className='registertextForm'>Street Name:</Form.Label> 
                    
                    <Form.Control type='text' id='streetname'
                                    value={ this.state.formData?.streetName }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                     
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetnumber' className='registertextForm'>Street Number:</Form.Label> 
                    
                    <Form.Control type='text' id='streetnumber'
                                    value={ this.state.formData?.streetNumber }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                </Row>
                <Row>
                <Col md="6">
              

                <Form.Group>
                    <Form.Label htmlFor='password' className='registertextForm'>Password:</Form.Label> 
                    
                    <Form.Control type='password' id='password'
                                    value={ this.state.formData?.password }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 

                 
                <Col md="6">
                <Form.Group>
                    <Button variant='primary' className='registerbuttonForm' 
                            onClick={ () => this.doRegister() }>
                          Register      
                    </Button>
                </Form.Group> 
                </Col>
                 
                </Row>
            </Form>

            

            <Alert variant='danger'
                    className={ this.state.message ? '' : 'd-none'}>
                    {this.state.message}    

            </Alert>
            
            
            </>   
        )
        

    }


    private renderRegistrationCompleteMessage(){
        return (
            <p>
                The accunt has been registered. <br />
                <Link to={''}></Link> 
            </p>
        )
    }

    private doRegister(){

    }
}
