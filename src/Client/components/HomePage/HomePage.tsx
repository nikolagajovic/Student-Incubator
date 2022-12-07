import React from 'react';
import { MainMenu, MainMenuItem } from '../MainMenu/MainMenu';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Projects", "/projects/"),
  new MainMenuItem("My Projects", "/myProjects/"),
  new MainMenuItem("My Profile", "/myProfile/"),
  new MainMenuItem("Logout", "/"),
]

function HomePage() {
  return (
      <MainMenu items = {menuItems}></MainMenu>
  ); 
}

export default HomePage;
