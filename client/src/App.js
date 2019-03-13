import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Nav from "./Components/Nav";
import Signup from "./Pages/Signup";
import Artist from "./Pages/ArtistsDashboard";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Route exact path="/artistDash/:id" component={Artist} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/settings" component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
