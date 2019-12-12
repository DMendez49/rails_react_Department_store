import React from "react";
import { Link, } from "react-router-dom";
import { Menu, button,} from "semantic-ui-react";

const Navbar = () => (
  
  <Menu inverted>
    <button class="ui secondary button">
      <Link to="/">
        <Menu.Item>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> Home </i></a>
        <ul class="right hide-on-med-and-down"></ul> 
        </Menu.Item>
      </Link>
    </button>
    
    <button class="ui secondary button">
      <Link to="/about">
        <Menu.Item>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> About </i></a>
        <ul class="right hide-on-med-and-down"></ul>
        </Menu.Item>
      </Link>
    </button>

    <button class="ui secondary button">
      <Link to="/Items">
        <Menu.Item>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> Review </i></a>
        <ul class="right hide-on-med-and-down"></ul>
        </Menu.Item>
      </Link>
    </button>

    <button class="ui secondary button">
      <Link to="/Items/new">
        <Menu.Item>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> Add </i></a>
        <ul class="right hide-on-med-and-down"></ul>
        </Menu.Item>
      </Link>
    </button>

  </Menu>
);

export default Navbar;



