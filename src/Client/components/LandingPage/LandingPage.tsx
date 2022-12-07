import React from 'react';
import { MainMenu, MainMenuItem } from '../MainMenu/MainMenu';

const menuItems = [
  new MainMenuItem("Log In", "/login/"),
  new MainMenuItem("Register", "/registration/"),
]

function LandingPage() {
  return (
      <MainMenu items = {menuItems}></MainMenu>
  ); 
}

export default LandingPage;
