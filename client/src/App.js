import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Items from "./components/Items";
import ItemsForm from "./components/ItemsForm";
import ItemsView from "./components/ItemsView";
import { Route, Switch, } from "react-router-dom";
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Items" component={Items} />
        <Route exact path="/Items/new" component={ItemsForm} />
        <Route exact path="/items/:id" component={ItemsView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
