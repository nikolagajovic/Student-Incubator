import React from 'react';
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
                      <Card>
                        <Card.Body>
                            <Card.Title>
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
            
            <Form className='UserRegister'>
                <Row>
                    <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='username'>Username:</Form.Label> 
                    
                    <Form.Control type='text' id='username'
                                    value={ this.state.formData?.username }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='email'>E-mail:</Form.Label> 
                    
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
                        <Form.Label htmlFor='firstname'>First Name:</Form.Label> 
                    
                    <Form.Control type='text' id='firstname'
                                    value={ this.state.formData?.firstName }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='lastname'>First Name:</Form.Label> 
                    
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
                    <Form.Label htmlFor='oib'>OIB:</Form.Label> 
                    
                    <Form.Control type='text' id='oib'
                                    value={ this.state.formData?.oib }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='dateOfBirthday'>Date of Bithday:</Form.Label> 
                    
                    <Form.Control type='text' id='dateOfBirthday'
                                    value={ this.state.formData?.dateOfBirthday }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>
                <Row> 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='gender'>Gender:</Form.Label> 
                    
                    <Form.Control type='text' id='gender'
                                    value={ this.state.formData?.gender }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='country'>Country:</Form.Label> 
                    
                    <Form.Control type='text' id='country'
                                    value={ this.state.formData?.country }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col>
                </Row>
                
                <Row>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='city'>City:</Form.Label> 
                    
                    <Form.Control type='text' id='city'
                                    value={ this.state.formData?.city }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                 
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='postcode'>Postcode:</Form.Label> 
                    
                    <Form.Control type='text' id='postcode'
                                    value={ this.state.formData?.postcode }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group>
                </Col>
                </Row>

                <Row>  
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetname'>Street Name:</Form.Label> 
                    
                    <Form.Control type='text' id='streetname'
                                    value={ this.state.formData?.streetName }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                     
                </Form.Group> 
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label htmlFor='streetnumber'>Street Number:</Form.Label> 
                    
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
                    <Form.Label htmlFor='password'>Password:</Form.Label> 
                    
                    <Form.Control type='password' id='password'
                                    value={ this.state.formData?.password }
                                    onChange={ event => this.formInputChanged(event as any )}>

                    </Form.Control>
                    
                </Form.Group> 
                </Col> 

                 
                <Col md="6">
                <Form.Group>
                    <Button variant='primary'
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
