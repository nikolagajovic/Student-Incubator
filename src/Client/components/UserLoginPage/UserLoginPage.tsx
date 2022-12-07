import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import "./UserLoginPage.css";

interface UserLoginPageState {
    email: string;
    password: string;
}

export default class UserRegistrationPage extends React.Component{

    state: UserLoginPageState;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    private FromInpoutChanged(event: React.ChangeEvent<HTMLInputElement>) {
        const newState = Object.assign(this.state, {
        [ event.target.id ]: event.target.value
        });

        this.setState(newState);
    }

    private doLogin() {

    }

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
                                    <Form.Control type="email" id="email"
                                                value={ this.state.email }
                                                onChange= { event => this.FromInpoutChanged(event as any) }/>
                                </Form.Group>
                                <Form.Group className="textForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Password:</Form.Label>
                                    <Form.Control type="password" id="password"
                                    value={ this.state.password }
                                    onChange= { event => this.FromInpoutChanged(event as any) }/>
                                </Form.Group>
                                <Form.Group className="buttonForm">
                                    <Button className="btn" variant="primary"
                                    onClick={ () => this.doLogin() }>
                                        Submit</Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}