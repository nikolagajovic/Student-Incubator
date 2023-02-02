import { useState } from 'react';
import { Button, Card, Container, Form, Col } from 'react-bootstrap';
import "./UserLoginPage.css";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useToken } from '../../context/TokenContext/TokenProvider';
import { Link, useHistory } from 'react-router-dom';

interface UserLoginPageState {
    email: string;
    password: string;
}

export default function UserLoginPage() {
    /* useStates pick up values from fields in our form */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useToken();
    const history = useHistory()
    const [time, setTime] = useState(new Date().toLocaleTimeString());


    const PushToReg = () => {
        history.push("/registration")
    }
    /* doLogin sends body data to Backend function, converts it to json beforehand  */
    const doLogin = () => {
        setTime(new Date().toLocaleTimeString())
        fetch(`http://localhost:5000/home/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: email,
                password: password,
                time: time,
            })

            /* .then Works with res which is return data from backend and tells us if login was sucessful
            stores then token in LocalStorate
            then does a push to homePage
             */
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
                <Col lg="8" md="8" sm="8">
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
                            <Form.Group className="logintextForm" style={{ marginBottom:"20px" }}>
                                <Form.Label ClassName="textField" htmlFOr="password">Password:</Form.Label>
                                <Form.Control type="password" id="password"
                                value={ password }
                                onChange= { event => setPassword(event.target.value) }/>
                            </Form.Group>

                            <Link to="/" style={{ marginLeft:"40px", color:"#000" }}>Forgot your password?</Link>

                            <Form.Group className="loginbuttonForm">
                                <Button className="btn" variant="primary"  style={{ borderRadius:"20px", width:"100px", marginRight:"5px", fontSize:"14px" }}
                                onClick={ () => doLogin() }>
                                    Login</Button>
                                    <Button  className="btn" variant="primary" style={{ borderRadius:"20px", width:"100px", fontSize:"10px" }} onClick={ () => PushToReg() }>
                                
                                    Register</Button>
                            </Form.Group>

                            
                            
                        </Form>
                    </Card.Text>
                </Card.Body>
                </Col>
            </Card>
        </Container>
    )
    
}