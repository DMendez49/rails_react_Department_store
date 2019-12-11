import React from "react";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu class="nav-wrapper">
     <a href="#!" class="brand-logo">Logo</a>



    <Link to="/">
      <Menu.Item>
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> Home </i></a>
        <ul class="right hide-on-med-and-down"></ul>
          {/* <style>
            body {
              background-image: url('https://www.schudio.com/wp-content/uploads/2016/08/welcome-page-blog-header.jpg')
            };
          </style> */}
          
      </Menu.Item>
    </Link>

    <Link to="/about">
      
      <Menu.Item>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> About </i></a>
      <ul class="right hide-on-med-and-down"></ul>

      </Menu.Item>
    </Link>

    <Link to="/Items">
      <Menu.Item>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> Review Items </i></a>
      <ul class="right hide-on-med-and-down"></ul>

      </Menu.Item>
    </Link>
    
    <Link to="/Items/new">
      <Menu.Item>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Add Item </i></a>
      <ul class="right hide-on-med-and-down"></ul>
      </Menu.Item>
    </Link>
  </Menu>
);

export default Navbar;




// <nav>

//   <ul class="right hide-on-med-and-down">
//     <li><a href="sass.html">Sass</a></li>
//     <li><a href="badges.html">Components</a></li>
//     <li><a href="collapsible.html">Javascript</a></li>
//     <li><a href="mobile.html">Mobile</a></li>
//   </ul>
// </div>
// </nav>

// <ul class="sidenav" id="mobile-demo">
// <li><a href="sass.html">Sass</a></li>
// <li><a href="badges.html">Components</a></li>
// <li><a href="collapsible.html">Javascript</a></li>
// <li><a href="mobile.html">Mobile</a></li>
// </ul>