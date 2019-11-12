import React, { Component } from "react";
import { logo, logo1, logo2, logo3, logo4, logo5, logo6 } from "../../img";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo-gambar">
          <img src={logo} alt="" />
        </div>
        <div className="logo-gambars">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    );
  }
}
