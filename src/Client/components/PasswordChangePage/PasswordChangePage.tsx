import React, { useEffect, useState } from 'react';
import './PasswordChangePage.css'
import { Button, Card, Container, Form, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UserPasswordChangePage() {
    /* useStates pick up values from fields in our form */
    /* url is used to point where we want to send data from our fields  */
    /* and reactData is used to pickup token string from our LocalStorate */
        const reactData = [localStorage.getItem("token")];
        const url = "http://localhost:5000/home/change-password";
        const [newPassword, SetNewPassword] = useState("");
        const [newRepeatPassword, SetRepeatNewPassword] = useState("");
        const [currentPassword, SetOldPassword] = useState("");
        const history = useHistory()
        let data = useState<any[]>([])
        const [error, setError] = useState(""); 
        
        /* SendData is used to send data from our fields to backend function and convert it to json beforehand */
        const SendData = () => {
            if(newPassword === newRepeatPassword){
            axios.put( url , {
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                    token: reactData
            }).then((response) => {
                if(response.status === 200){
                    history.push("/homePage")
                    data = response.data;
                    console.log(data)
                }
              }, (error) => {
                console.log(error.response.data.message);
                setError(error.response.data.message);
              });
        }
        else alert("New Password doesn't match");
    }
    useEffect(() => {
        SendData();
      }, []);
        return(
            <Container>
                <Card className="passwordchangeCard">
                <Col lg="8" md="8" sm="8">
                    <Card.Body>
                        <Card.Title className="passwordchangetitleForm">
                            <FontAwesomeIcon icon ={ faLock } /> Change Password
                        </Card.Title>
                        <Card.Text>
                            <Form className="passwordchangeForm">
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">New Password:</Form.Label>
                                    <Form.Control type="password" id="Newpassword"
                                    value={ newPassword }
                                    onChange= { event => SetNewPassword(event.target.value) }></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Repeat new password:</Form.Label>
                                    <Form.Control type="password" id="RepeatNewpassword"
                                    value={ newRepeatPassword }
                                    onChange= { event => SetRepeatNewPassword(event.target.value) }></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangetextForm">
                                    <Form.Label ClassName="textField" htmlFOr="password">Old Password:</Form.Label>
                                    <Form.Control type="password" id="Oldpassword"
                                    value={ currentPassword }
                                    onChange= { event => SetOldPassword(event.target.value) }></Form.Control>
                                </Form.Group>
                                <Form.Group className="passwordchangebuttonForm">
                                    <Button className="btn" variant="primary" 
                                    onClick={ () => SendData()}>Change
                                    
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                    <div>{error && <p>{error}</p>}</div>
                    </Col>
                </Card>
                
            </Container>
        )
}