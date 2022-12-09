import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import "./UserLoginPage.css";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useToken } from '../../context/TokenContext/TokenProvider';
import { useHistory } from 'react-router-dom';

interface UserLoginPageState {
    email: string;
    password: string;
}

export default function UserLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useToken();
    const history = useHistory()

    /*
    const FromInpoutChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = Object.assign(this.state, {
        [ event.target.id ]: event.target.value
        });

        this.setState(newState);
    }
    */

    const doLogin = () => {
        fetch(`http://localhost:5000/home/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        }).then((res) => 
            {
                res.json().then((data) => {
                    localStorage.setItem("token", data.token)
                    setToken(data.token)
                    history.push("/homePage")
                })
            }
            
        )

    }


    return(
        <Container>
            <Card className="loginCard">
                <Card.Body>
                    <Card.Title className="logintitleForm">
                        <FontAwesomeIcon icon ={ faArrowAltCircleRight } /> User Login
                    </Card.Title>
                    <Card.Text>
                        <Form className="loginForm">
                            <Form.Group className="logintextForm">
                                <Form.Label ClassName="textField" htmlFOr="email">E-mail:</Form.Label>
                                <Form.Control type="email" id="email"
                                            value={ email }
                                            onChange= { event => setEmail(event.target.value) }/>
                            </Form.Group>
                            <Form.Group className="logintextForm">
                                <Form.Label ClassName="textField" htmlFOr="password">Password:</Form.Label>
                                <Form.Control type="password" id="password"
                                value={ password }
                                onChange= { event => setPassword(event.target.value) }/>
                            </Form.Group>
                            <Form.Group className="loginbuttonForm">
                                <Button className="btn" variant="primary"
                                onClick={ () => doLogin() }>
                                    Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
    
}