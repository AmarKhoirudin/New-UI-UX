import React, { Component } from "react";
import "./index.css";
import ButtonText from "../../../Button/Button";
import kanan1 from "../../../../img/kanan-1.png";
import kanan3 from "../../../../img/kanan-3.png"

export default class ContentKirikanan extends Component {
  render() {
    return (
      <div className="Content-Kiri-Kanan">
        <div className="Kanan-1 cf">
          <p>Add team Member</p>
          <img src={kanan1} alt="img" />
          <div className="Kanan-1-button cf">
            <i className="far fa-paper-plane"></i>
            <ButtonText textButton="+" classButton="kanan-button_css" />
          </div>
        </div>
        <div className="Kanan-2">
            <p>Add guest</p>
            <div className="kanan-2_input cf">
                <ButtonText textButton="Send" />
                <input type="text" placeholder="Email Invitation" />
            </div>
        </div>
        <div className="Kanan-3">
            <p>Notify people on</p>
            <img src={kanan3} alt="kanan-3" />
        </div>
        <div className="Kanan-4">
            <p>Set reminder</p>
            <input type="text" placeholder=" 2 hours before event "/>
        </div>
        <ButtonText textButton="Create event" classButton="kanan_button" />
      </div>
    );
  }
}
