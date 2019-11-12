import React, { Component } from "react";
import "./Navbar.css";
import amar from "../../img/amar.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-input">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Find a user, team, meeting..." />
        </div>
        <div className="nav-setting">
          <button
            onClick={() => {
              const modal = document.getElementById("modal");
              const modalku = document.getElementById("modalku");
              modal.style.display = "block";
              modalku.style.display = "block";
            }}
          >
            <i className="far fa-paper-plane"></i>Invite
          </button>
          <img src={amar} alt="" />
        </div>

        {/* modal */}

        <div
          id="modal"
          onClick={() => {
            const modal = document.getElementById("modal");
            const modalku = document.getElementById("modalku");
            modal.style.display = "none";
            modalku.style.display = "none";
          }}
        >
          <div id="modalku" className="modal-card">
            <p
              onClick={() => {
                const modal = document.getElementById("modal");
                const modalku = document.getElementById("modalku");
                modal.style.display = "none";
                modalku.style.display = "none";
              }}
            >
              &times;
            </p>
          </div>
        </div>
      </div>
    );
  }
}
