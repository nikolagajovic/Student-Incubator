import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";
import "./MyProjectsPage.css"

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

export function MyProjectsPage() {
  const [ data, setData] = useState<any[]>([])
  const reactData = [localStorage.getItem("token")];
  const url = "http://localhost:5000/home/my-projects";

  const SendData = () => {
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                token: reactData
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

        <Form.Label className="labelmyprojectForm">My Projects</Form.Label>

        <Container style={{ marginTop: "30px" }}>
        
          <Button variant="primary" className="myprojectsbuttonForm">
            Add new poject
          </Button>
          {data.map((item, index) => (
            <Row>
            <Col md="12">
            <Card style={{ width: "auto", height: "auto", marginTop:"30px" }}>
              <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Name of the owner
                </Card.Subtitle>
                <Card.Text>
                  { item.description }
                  <Card.Img
                    variant="bottom"
  
                  />
                </Card.Text>
  
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
            </Col>
            </Row> 
        ))}
        </Container>
      </>
    );
  }

