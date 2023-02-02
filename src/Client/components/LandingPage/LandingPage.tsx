import { Card, Container } from 'react-bootstrap';
import { MainMenu, MainMenuItem } from '../MainMenu/MainMenu';

/* MainMenu for Landing Page */
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
        <Card.Title>Bjelovar News</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Christmas mood</Card.Subtitle>
        <Card.Text>
        Po prvi put u Bjelovaru održat će se noćna prodaja božićnih drvaca i to u Ulici Petra Zrinskog, na lokaciji koja je već godinama poznata po prodaji božićni drvca. Noćna prodaja održat će se u srijedu, 21. prosinca, a potrajat će sve do 22 sata.
        <br></br>
        <br></br>
        <br></br>
        -Ljudi su cijelo ovo vrijeme strci i rade sve do popodnevnih sati. Zato smo organizirali jednu noćnu prodaju kako bi mogli u miru, bez žurbe i stresa nabaviti svoje božićno drvce. Nadamo se jednom lijepom druženju uz kuhano vino – kazao je Vladko Vrabec, predsjednik bjelovarske Udruge proizvođača božićnih drvaca koja broji 26 proizvođača.
        <br></br>
        <br></br>
        <br></br>

          <Card.Img variant="bottom" src="https://imgs.search.brave.com/KRbV1enbzl3y1s-IJUNjTOMYajUdDICTHNR06tLTh5U/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/NWcuaHIvd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzMvMjAy/MS8wMi9zaHV0dGVy/c3RvY2tfMTUzNTI1/OTQ4NS0xOTIweDEy/NzkuanBn" alt="Logo" />
        </Card.Text>
        
        
        <Card.Link href="https://bjelovar.live/">News link</Card.Link>
      </Card.Body>
    </Card>
  

      </Container>
      
      
      
      
      </>
        
      );
    }



export default LandingPage;
