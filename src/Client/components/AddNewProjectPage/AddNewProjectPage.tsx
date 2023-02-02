import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";
import "./AddNewProjectPage.css";

import { TextArea } from "semantic-ui-react";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

export default function AddNewProjectPage() {
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>
        <Form.Label className="labeladdnewprojectForm">
          Add new project
        </Form.Label>

        <Container className="containeraddnewprojectForm">
          <Form className="addnewprojectForm">
            <Row>
              <Col md="6">
                <Form.Group className="addnewprojectlabelForm">
                  <Form.Label htmlFor="firstName" className="addnewprojectForm">
                    Project name:
                  </Form.Label>

                  <Form.Control
                    className="controladdnewprojectForm"
                    type="text"
                    id="projectname"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="lastName"
                    className="addnewprojectlabelForm"
                  >
                    Estimated lenght:
                  </Form.Label>

                  <Form.Control
                    className="controladdnewprojectForm"
                    type="text"
                    id="estimatedlenght"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="email"
                    className="addnewprojectlabelForm"
                  >
                    Start date:
                  </Form.Label>

                  <Form.Control
                    className="controladdnewprojectForm"
                    type="text"
                    id="startdate"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="phoneNumber"
                    className="addnewprojectlabelForm"
                  >
                    Finish date:
                  </Form.Label>

                  <Form.Control
                    className="controladdnewprojectForm"
                    type="text"
                    id="finishdate"
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="phoneNumber"
                    className="addnewprojectlabelForm"
                  >
                    Status:
                  </Form.Label>

                  <Form.Control
                    className="controladdnewprojectForm"
                    type="text"
                    id="status"
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col md="6" id="enroll">
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
                  Enrolled people:
                </Form.Label>
                <Form>
                  <TextArea className="enolltextarea" placeholder="Tell us more" />
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md="12">
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
                  Description:
                </Form.Label>

                <Form>
                  <TextArea className="destextarea" placeholder="Tell us more" />
                </Form>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
