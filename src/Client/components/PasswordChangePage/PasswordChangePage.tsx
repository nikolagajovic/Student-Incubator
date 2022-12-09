import React from 'react';
import './PasswordChangePage.css'
import { Button, Card, Container, Form } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default class UserRegistrationPage extends React.Component{
    render() {
        return(
            <Container>
                <Card className="passwordchangeCard">
                    <Card.Body>
                        <Card.Title className="passwordchangetitleForm">
                            <FontAwesomeIcon icon ={ faLock } /> Change Password
                        </Card.Title>
                        <Card.Text>
                            <Form className="passwordchangeForm">
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">New Password:</Form.Label>
                                    <Form.Control type="password" id="password"></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Repeat new password:</Form.Label>
                                    <Form.Control type="password" id="password"></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Old Password:</Form.Label>
                                    <Form.Control type="password" id="password"></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangebuttonForm">
                                    <Button className="btn" variant="primary">Change</Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}