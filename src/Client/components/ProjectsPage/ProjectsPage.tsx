import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { MainMenu, MainMenuItem } from "../MainMenu/MainMenu";

const menuItems = [
  new MainMenuItem("Home", "/homePage/"),
  new MainMenuItem("My Projects", "/myprojects/"),
  new MainMenuItem("My Profile", "/myprofile/"),
  new MainMenuItem("Logout", "/logout/"),
];

export class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <MainMenu items={menuItems}></MainMenu>

        <Container style={{ marginTop: "50px" }}>
        
        
        <Row>
        <Col md="5">
          <Form.Control type="text" className="searchprojectsnameForm" placeholder="Search Projects Name"></Form.Control>
        </Col>
          <Col md="4">
          <Form.Control type="text" className="seachprojectsdateForm" placeholder="Seach Projects Date"></Form.Control>
          </Col>

          <Col md="2">
          <Button variant='primary' className='projectssearchbuttonForm' > Search</Button>
            </Col>                  
                    

        </Row>
        
          <Table className="projecttableForm" striped bordered hover size="sm" style={ { backgroundColor: "#ffff" } }>
            <thead>
              <tr>
                <th>#</th>
                <th>Pojects Name</th>
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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
}
