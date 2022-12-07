import { relative } from 'path';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { MainMenu, MainMenuItem } from '../MainMenu/MainMenu';

const menuItems = [
  new MainMenuItem("Log In", "/login/"),
  new MainMenuItem("Register", "/registration/"),
]

function LandingPage() {
  return (
      <><MainMenu items={menuItems}></MainMenu>
      
        <Container style = {{ marginTop:  '50px' }}>
       
  
    <Card style={{ width: 'auto', height:'auto' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd
          Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd Some quick example text to build on the card title and make up the
          bulk of the card's content.askohjajskhldhiaspdoasodhopiash dapsiashdosh
          asdaosuidgauisdajksbdaiusgdoaisdioagsd
          askoidhasidgasoidgasihdaisgd
          aspodhasoidhasihdasihdaishhoiasd
          asdčophasidohasihdaishdiohasd


          <Card.Img variant="bottom" src="holder.js/100px180?text=Image cap" />
        </Card.Text>
        
        
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  

      </Container>
      
      
      
      
      </>
        
      );
    }



export default LandingPage;
