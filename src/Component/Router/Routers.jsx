import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SidebarRight/Sidebar";
import Content3A from "../Pages/Content3A/Content3A";
import Content3B from "../Pages/Content3B/Content3B";
import Home from "../Pages/Home/Home";

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Content3B} />
        <Route path="/dash" component={Content3A} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}
