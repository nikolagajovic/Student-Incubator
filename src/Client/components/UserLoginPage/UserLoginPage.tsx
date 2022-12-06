import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import "./UserLoginPage.css";

export default class UserRegistrationPage extends React.Component{
    render() {
        return(
            <Container>
                <Card className="loginCard">
                    <Card.Body>
                        <Card.Title className="titleForm">
                            User Login
                        </Card.Title>
                        <Card.Text>
                            <Form className="loginForm">
                                <Form.Group className="textForm">
                                    <Form.Label ClassName="textField" htmlFOr="email">E-mail:</Form.Label>
                                    <Form.Control type="email" id="email"></Form.Control>
                                </Form.Group>
                                <Form.Group className="textForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Password:</Form.Label>
                                    <Form.Control type="password" id="password"></Form.Control>
                                </Form.Group>
                                <Form.Group className="buttonForm">
                                    <Button className="btn" variant="primary">Submit</Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}