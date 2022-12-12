import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";
import "./MyProfilePage"

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

export class MyProfilePage extends React.Component {
  render() {
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>

        <Form.Label
          style={{
            marginTop: "30px",
            fontSize: "30px",
            color: "#ffff",
            width: "100%",
            textAlign: "center",
          }}
        >
          My Profile
        </Form.Label>

        <Container className="myprofilePage" style={{ marginTop: "30px", marginBottom:"50px" , background:"#fff", width:"1000px" }}>
        
            
             
        
        

          <Form className="myprofileForm">
          
          <Row>
          <Col sm="4">
            <Form.Label 
                style={{
                  marginTop: "30px",
                  fontSize: "30px",
                  color: "#000",
                  width: "100%",
                  textAlign: "center",
                  
                }}
              >
                Pesonal info
              </Form.Label>
              </Col>

           
              <Col md="4"> 
              <Button variant="primary" className="myprofileForm">
                Edit
              </Button>
              </Col>
           
              <Col md="4">
              <Form.Label
                style={{
                  marginTop: "30px",
                  fontSize: "30px",
                  color: "#000",
                  width: "100%",
                  textAlign: "center",
                 
                }}
              >
                Account info
              </Form.Label>
              </Col>

              </Row>

              <Row>
              <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="firstName" className="myprofileForm">
                    Fist Name:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="name"
                    
                  ></Form.Control>
                </Form.Group>

                </Col>
           
                <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="username" className="myprofileForm" >
                    Username:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="userName"
                    
                  ></Form.Control>
                </Form.Group>
               </Col>
                </Row>
              

             
                <Row>
                <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="lastName" className="myprofileForm">
                    Last name:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="lastName"
                    
                  ></Form.Control>
                </Form.Group>
                
                </Col>
              
              
                <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="password" className="myprofileForm">
                    Password:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="password"
                    
                  ></Form.Control>
                </Form.Group>
                </Col>
                </Row>
             
                <Row>
                <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="email" className="myprofileForm">
                    Email:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="email"
                    id="email"
                    
                  ></Form.Control>
                  
                
                </Form.Group>
               </Col>


               <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="lastLogin" className="myprofileForm">
                    Last Login:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="name"
                    
                  ></Form.Control>
                </Form.Group>
                </Col>
                </Row>
                
                <Col md="6">  
                <Row>
                <Form.Group>
                  <Form.Label htmlFor="phoneNumber" className="myprofileForm">
                    Phone number:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="phoneNumber"
                    
                  ></Form.Control>
                </Form.Group>
              
                
                
                <Form.Group>
                  <Form.Label htmlFor="createdAccunt" className="myprofileForm">
                    Created Account:
                  </Form.Label>

                  <Form.Control
                    type="text" className="controlmyprofileForm"
                    id="createdAccunt"
                    
                  ></Form.Control>
                </Form.Group>
               
                </Row>


                <Form.Group>
                  <Form.Label htmlFor="linkedin" className="myprofileForm">
                    LinkedIn:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="linkedin"
                    
                  ></Form.Control>
                </Form.Group>
             
              
                <Form.Group> 
                  <Form.Label
                    htmlFor="oib"
                    className="registertextForm"
                  >
                    OIB:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="oib"
                    
                  ></Form.Control>
                </Form.Group>
              
           
           
             
                <Form.Group>
                  <Form.Label htmlFor="dateOfBirthday" className="myprofileForm">
                  Date Of Birthday:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="dateOfBirthday"
                    
                  ></Form.Control>
                </Form.Group>
             
              
                <Form.Group>
                  <Form.Label htmlFor="gender" className="myprofileForm">
                    Gender:
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="gender"
                    
                  ></Form.Control>
                </Form.Group>
              
            

           
             
                <Form.Group>
                  <Form.Label htmlFor="country" className="myprofileForm">
                    Country:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="counry"
                    
                  ></Form.Control>
                </Form.Group>
             

            
                <Form.Group>
                  <Form.Label htmlFor="city" className="myprofileForm">
                    City:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="city"
                    
                  ></Form.Control>
                </Form.Group>
             
       

          
              
                <Form.Group>
                  <Form.Label htmlFor="postcode" className="myprofileForm">
                    Postcode:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="poscode"
                    
                  ></Form.Control>
                </Form.Group>
              
              
                <Form.Group>
                  <Form.Label
                    htmlFor="streetname"
                    className="myprofileForm"
                  >
                    Street Name:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="streetnumber"
                    
                  ></Form.Control>
                </Form.Group>
              
        
       
             
                <Form.Group>
                  <Form.Label htmlFor="steetnumber" className="myprofileForm">
                    Street Number:
                  </Form.Label>

                  <Form.Control className="controlmyprofileForm"
                    type="text"
                    id="steetnumber"
                    
                  ></Form.Control>
                </Form.Group>
                </Col>
           
          </Form>
        </Container>
      </>
    );
  }
}
