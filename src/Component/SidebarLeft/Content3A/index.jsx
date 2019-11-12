import React, { Component } from "react";
import "./index.css";
import {all} from "../../../img"

export default class SideBarLeftCreate extends Component {
  render() {
    return (
      <div className="Content-3A">
        <div className="Atas-3A cf">
          <div className="Atas-3A-Icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <div className="Atas-Kanan-3A">
            <p className="Atas-Kanan-3A-upload">Uploader</p>
            <p className="Atas-Kanan-3A-tanggal">14 March</p>
          </div>
        </div>

        {/* Content Bawah */}
        <div className="Bawah-3A">
          <div className="Bawah-3A-1">
              <div className="Bawah-3A-1-gambar">
                <img src={all} alt="" />
              </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
