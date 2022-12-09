import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

export class MyProjectsPage extends React.Component {
  render() {
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>

        <Form.Label style={{ marginTop:"30px", fontSize:"30px", color:"#ffff", width:"100%", textAlign:"center"}}>My Projects</Form.Label>

        <Container style={{ marginTop: "30px" }}>
        
          <Button variant="primary" className="myprojectssearchbuttonForm">
            
            Add new poject
          </Button>

          <Row>
          <Col md="6">
          <Card style={{ width: "auto", height: "auto", marginTop:"30px" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <Card.Img
                  variant="bottom"
                  
                />
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          

          <Col md="6">
          <Card style={{ width: "auto", height: "auto", marginTop:"30px"  }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <Card.Img
                  variant="bottom"
                  
                />
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>

          <Row>
          <Col md="6">
          <Card style={{ width: "auto", height: "auto", marginTop:"30px" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <Card.Img
                  variant="bottom"
                  
                />
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          

          <Col md="6">
          <Card style={{ width: "auto", height: "auto", marginTop:"30px" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <Card.Img
                  variant="bottom"
                  
                />
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>


        </Container>
      </>
    );
  }
}

