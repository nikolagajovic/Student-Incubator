import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
    
      useEffect(() => {
          SendData();
          
      }, []);
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>

        <Form.Label
          style={{
            marginTop: "50px",
            fontSize: "30px",
            color: "#ffff",
            width: "100%",
            textAlign: "center",
          }}
        >
          My Profile
        </Form.Label>

        <Container
          className="containermyprofilePage"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            background: "#fff",
            width: "1000px",
            borderRadius: "20px",
          }}
        >
          <Form className="myprofileForm" style={{ paddingBottom: "10px" }}>
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
                  }}
                >
                  Pesonal info
                </Form.Label>

                <Form.Group>
<<<<<<< HEAD
                  <Form.Label htmlFor="firstName" className="myprofilelabelForm">
                    First name:
=======
                  <Form.Label htmlFor="firstName" className="myprofileForm">
                    Frist Name:
>>>>>>> 23745026807577a8291b919f5c9b42a86a1ea575
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
                  <Form.Label htmlFor="lastName" className="myprofileForm">
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
                  <Form.Label htmlFor="email" className="myprofileForm">
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
                  <Form.Label htmlFor="phoneNumber" className="myprofileForm">
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
                  <Form.Label htmlFor="linkedin" className="myprofileForm">
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
                  <Form.Label htmlFor="oib" className="registertextForm">
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
                  <Form.Label htmlFor="gender" className="myprofileForm">
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
                  <Form.Label htmlFor="country" className="myprofileForm">
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
                  <Form.Label htmlFor="city" className="myprofileForm">
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
                  <Form.Label htmlFor="postcode" className="myprofileForm">
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
                  <Form.Label htmlFor="streetname" className="myprofileForm">
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
                  <Form.Label htmlFor="steetnumber" className="myprofileForm">
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
                  <Form.Label htmlFor="username" className="myprofileForm">
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
                  <Form.Label htmlFor="password" className="myprofileForm">
                    Password:
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
                  <Form.Label htmlFor="lastLogin" className="myprofileForm">
                    Last Login:
                  </Form.Label>

                  <Form.Control
                    className="controlmyprofileForm"
                    disabled={true}
                    type="text"
                    id="name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="createdAccunt" className="myprofileForm">
                    Created Account:
                  </Form.Label>

                  <Form.Control
                    type="text"
                    className="controlmyprofileForm"
                    disabled={true}
                    id="createdAccunt"
                  ></Form.Control>
                </Form.Group>
                <Col md="6" id="sub">
                  <Form.Label
                    style={{
                      marginTop: "30px",
                      fontSize: "30px",
                      color: "#fff",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Subscription
                  </Form.Label>

                  <Form.Group>
                    <Form.Label
                      htmlFor="fee"
                      className="myprofileForm"
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
                      className="myprofileForm"
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
                      className="myprofileForm"
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
                      className="myprofileForm"
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

                  <Button variant="primary" className="registerbuttonForm">
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
}
