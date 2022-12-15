import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";
import "./MyProfilePage.css";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

export default function MyProfilePage() {
  const url = "http://localhost:5000/home/myprofile";
  const reactData = [localStorage.getItem("token")];
  const [ data, setData] = useState<any[]>([])
  

  const SendData = () => {
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                token: reactData,
            })
    }).then((res) => res.json())
    .then((actualData) => {
      console.log(actualData);
      setData(actualData as any);
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
    const ChangeCSS = () => {
      console.log("Gaja gej")
    }
      useEffect(() => {
          SendData();
          ChangeCSS();
      }, []);
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>
        <Form.Label className="labelmyprofilePage"
        
        >
          My Profile
        </Form.Label>

        <Container
          className="containermyprofilePage"
         
        >
          <Form className="myprofileForm">
            <Row>
              <Col md="6">
                <Form.Label
                  style={{
                    marginTop: "30px",
                    fontSize: "30px",
                    color: "#000",
                    width: "100%",
                    textAlign: "center",
                    paddingBottom: "20px",
                    fontFamily: "'Source Code Pro', monospace"
                  }}
                >
                  Pesonal info
                </Form.Label>

                <Form.Group>
                  <Form.Label htmlFor="firstName" className="myprofilelabelForm">
                    Frist Name:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="lastName" className="myprofilelabelForm">
                    Last name:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="lastName"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email" className="myprofilelabelForm">
                    Email:
                  </Form.Label>
                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="email"
                    id="email"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="phoneNumber" className="myprofilelabelForm">
                    Phone number:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="phoneNumber"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="linkedin" className="myprofilelabelForm">
                    LinkedIn:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="linkedin"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="oib" className="registertextlabelForm">
                    OIB:
                  </Form.Label>

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="oib"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="dateOfBirthday"
                    className="myprofileForm"
                  >
                    Date Of Birthday:
                  </Form.Label>

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="dateOfBirthday"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="gender" className="myprofilelabelForm">
                    Gender:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="gender"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="country" className="myprofilelabelForm">
                    Country:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="counry"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="city" className="myprofilelabelForm">
                    City:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="city"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="postcode" className="myprofilelabelForm">
                    Postcode:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="poscode"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="streetname" className="myprofilelabelForm">
                    Street Name:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="streetnumber"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="steetnumber" className="myprofilelabelForm">
                    Street Number:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="steetnumber"
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Label
                  style={{
                    marginTop: "30px",
                    fontSize: "30px",
                    color: "#000",
                    width: "100%",
                    textAlign: "center",
                    paddingBottom: "20px",
                  }}
                >
                  Account info
                </Form.Label>

                <Form.Group>
                  <Form.Label htmlFor="username" className="myprofilelabelForm">
                    Username:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="userName"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="createaccount" className="myprofilelabelForm">
                  Created Account:
                  </Form.Label>

                  <FontAwesomeIcon className="pen" icon={faPen} />
                  <FontAwesomeIcon className="check" icon={faCheck} />

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="password"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="lastLogin" className="myprofilelabelForm">
                    Last Login:
                  </Form.Label>

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group  >
                  <Form.Label htmlFor="changepassword" className="myprofilelabelForm" >
                    
                    <Button variant="primary" className="subbuttonForm" style={{ borderLeft:"20px" }} >
                    Change password
                  </Button>

                  </Form.Label>

                 
                </Form.Group>
                <Col md="6" id="sub">
                  <Form.Label 
                    style={{
                      marginTop: "30px",
                      fontSize: "30px",
                      color: "#fff",
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "'Source Code Pro', monospace"
                    }}
                  >
                    Subscription
                  </Form.Label>

                  <Form.Group>
                    <Form.Label
                      htmlFor="fee"
                      className="myprofilelabelForm"
                      style={{ color: "#fff" }}
                    >
                      Fee:
                    </Form.Label>

                    <Form.Control
                      className="controlmyprofileForm"
                      disabled={true}
                      type="text"
                      id="fee"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label
                      htmlFor=" createdaAt"
                      className="myprofilelabelForm"
                      style={{ color: "#fff" }}
                    >
                      Created at:
                    </Form.Label>

                    <Form.Control
                      className="controlmyprofileForm "
                      disabled={true}
                      type="text"
                      id="createdaAt"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label
                      htmlFor="status"
                      className="myprofilelabelForm"
                      style={{ color: "#fff" }}
                    >
                      Status:
                    </Form.Label>

                    <Form.Control
                      className="controlmyprofileForm"
                      disabled={true}
                      type="text"
                      id="status"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label
                      htmlFor="validTo"
                      className="myprofilelabelForm"
                      style={{ color: "#fff" }}
                    >
                      Valid to:
                    </Form.Label>

                    <Form.Control
                      className="controlmyprofileForm"
                      disabled={true}
                      type="text"
                      id="validTo"
                    ></Form.Control>
                  </Form.Group>

                  <Button variant="primary" className="subbuttonForm">
                    Add Subsciption
                  </Button>
                </Col>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }