import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Client/components/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ProjectsPage } from './Client/components/ProjectsPage/ProjectsPage';
import { MyProjectsPage } from './Client/components/MyProjectsPage/MyProjectsPage';
import { MyProfilePage } from './Client/components/MyProfilePage/MyProfilePage';
import UserLoginPage from './Client/components/UserLoginPage/UserLoginPage';
import { UserRegistrationPage } from './Client/components/UserRegistrationPage/UserRegistrationPage';
import { HomePage } from './Client/components/HomePage/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ LandingPage }  />
        <Route path="/homePage" component={ HomePage }  />
        <Route path="/projects/" component={ ProjectsPage }  />
        <Route path="/myProjectsPage/" component={ MyProjectsPage }  />
        <Route path="/myProfilePage/" component={ MyProfilePage }  />
        <Route path="/login/" component={ UserLoginPage }  />
        <Route path="/registration/" component={ UserRegistrationPage }  />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
