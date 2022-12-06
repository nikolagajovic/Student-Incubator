import React from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import './MainMenu.css';
import {HashRouter, Link } from 'react-router-dom';


export class MainMenuItem{
    text: string = '';
    link: string = '#';

    constructor(text: string, link: string){
        this.text = text;
        this.link = link;
    }

}

interface MainMenuProperties{
    items: MainMenuItem[];
}

interface MainMenuState{
    items: MainMenuItem[];
}

export class MainMenu extends React.Component<MainMenuProperties> {
    state: MainMenuState;

    

    constructor(props: Readonly<MainMenuProperties>) {
        super(props);

        this.state = {
            items: props.items,
        }
    }

    // novo setovanje itema

    setItems( items: MainMenuItem[] ){
        this.setState({
            items:items,
        })
    }

    render() {
        return(
                
       

          <Nav variant="tabs">
            <HashRouter>
           {this.state.items.map(this.makeNavLink)}
           </HashRouter>
          </Nav>
               
            
       
        );
    }
    

    private makeNavLink(item: MainMenuItem){
        return(
            	 
            
          

            <div className='buttons'>
             <Link to= {item.link} className="nav-link">
                {item.text}
             </Link>
             </div>
        
            
            
        )
    }
 

    

}