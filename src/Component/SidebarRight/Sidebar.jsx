import React, { Component } from "react";
import { logo, logo1, logo2, logo3, logo4, logo5, logo6 } from "../../img";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo-gambar">
          <img src={logo} alt="" />
        </div>
        <div className="logo-gambars">
          <NavLink to="/home" activeClassName="active">
            <img src={logo1} alt="" />
          </NavLink>
          <NavLink to="/account" activeClassName="active">
            <img src={logo2} alt="" />
          </NavLink>
          <NavLink to="/">
            <img src={logo3} alt="" />
          </NavLink>
          <NavLink to="/message" activeClassName="active">
            <img src={logo4} alt="" />
          </NavLink>
          <NavLink to="/chat" activeClassName="active">
            <img src={logo5} alt="" />
          </NavLink>
          <NavLink to="/setting" activeClassName="active">
            <img src={logo6} alt="" />
          </NavLink>
        </div>
      </div>
    );
  }
}
