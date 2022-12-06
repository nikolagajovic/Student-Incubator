import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { MainMenu, MainMenuItem} from './components/MainMenu/MainMenu';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ProjectsPage } from './components/ProjectsPage/PojectsPage';
import { MyProjectsPage } from './components/MyProjectsPage/MyProjectsPage';
import { MyProfilePage } from './components/MyProfilePage/MyProfilePage';



const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myProjects/"),
  new MainMenuItem("My Pofile", "/myProfile/"),
  new MainMenuItem("Logout", "/"),
  

]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <MainMenu items = {menuItems}></MainMenu>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ HomePage }  />
        <Route path="/projectsPage/" component={ ProjectsPage }  />
        <Route path="/myProjectsPage/" component={ MyProjectsPage }  />
        <Route path="/myProfilePage/" component={ MyProfilePage }  />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
