import { response } from "express";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("My Projects", "/myprojects/"),
  new MainMenuItem("My Profile", "/myprofile/"),
  new MainMenuItem("Logout", "/logout/"),
];
    function ProjectsPage() {
      const [ todos, setTodos] = useState([])

      useEffect(() => {
        fetch('http://localhost:5000/home/projects')
        .then(response => response.json())
        .then(res => console.log(res))
      }, [])
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>

        <Form.Label style={{ marginTop:"30px", fontSize:"30px", color:"#ffff", width:"100%", textAlign:"center"}}>Projects</Form.Label>

        <Container style={{ marginTop: "50px" }}>
        
        
        <Row>
        <Col md="5">
          <Form.Control type="text" className="projectsnameForm" placeholder="Search Projects Name"></Form.Control>
        </Col>
          <Col md="4">
          <Form.Control type="text" className="projectsdateForm" placeholder="Search Projects Date"></Form.Control>
          </Col>

          <Col md="2">
          <Button variant='primary' className='projectsbuttonForm' > Search</Button>
            </Col>                  
                    

        </Row>
        
          <Table className="projecttableForm" striped bordered hover size="sm" style={ { backgroundColor: "#ffff" } }>
            <thead>
              <tr>
                <th>#</th>
                <th>Projects Name</th>
                <th>Description </th>
                <th>Finish date</th>
                <th>Project manager</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
    }

    export default ProjectsPage;