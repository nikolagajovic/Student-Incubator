import { response } from "express";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myprojectsPage/"),
  new MainMenuItem("My Profile", "/myprofilePage/"),
  new MainMenuItem("Logout", "/logout/"),
];

interface Todo {
  id: number;
  idorganization: number;
  name: string;
  startdate: Date;
  finishdate: Date;
  estimated: number;
  description: string;
  status: string;
  enrolledpeople: number;
  createdat: Date;
  updatedat: Date;
  }
  /* ProjectsPage func is used to fetch data from backend then display it within a table in  */
    function ProjectsPage() {
      const [ data, setData] = useState<any[]>([])

      const fetchData = () => {
    fetch(`http://localhost:5000/home/projects`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                <th>Projects Name</th>
                <th>Description </th>
                <th>Finish date</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.finishdate}</td>
          </tr>
        ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
    }

    export default ProjectsPage;
