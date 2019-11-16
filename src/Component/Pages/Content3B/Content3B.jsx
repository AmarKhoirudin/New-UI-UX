import React, { Component } from "react";
import "./Content3B.css";
import { Link } from "react-router-dom";
import SidebarLeftContainer from "../../../Container/SidebarLeftContainer";
import { inflateRaw } from "zlib";

export default class Content3B extends Component {
  state = {
    informasi: [
      {
        id: 1,
        judul: "Inspiration Gathering",
        date: "Monday Aug 20, 2018",
        time: "11.00 AM - 11.30 AM",
        image: "IG"
      },
      {
        id: 2,
        judul: "Sketching",
        date: "Tuesday Aug 21, 2018",
        time: "10.00 AM - 12.00 AM",
        image: "S"
      },
      {
        id: 3,
        judul: "Hikoot app Wireframes",
        date: "Tuesday Aug 21, 2018",
        time: "13.00 AM - 15.30 AM",
        image: "H"
      },{
        id: 4,
        judul: "Inspiration Gathering",
        date: "Monday Aug 20, 2018",
        time: "11.00 AM - 11.30 AM",
        image: "IG"
      },
      {
        id: 5,
        judul: "Sketching",
        date: "Tuesday Aug 21, 2018",
        time: "10.00 AM - 12.00 AM",
        image: "S"
      },
      {
        id: 6,
        judul: "Hikoot app Wireframes",
        date: "Tuesday Aug 21, 2018",
        time: "13.00 AM - 15.30 AM",
        image: "H"
      }
    ]
  };
  render() {
    return (
      <div className="isitext">
        <div className="Content-Kiri">
          <div className="Content-Kiri-Atas">
            <h1>Event</h1>
            <Link to="/dash">
              <button className="cssButton">+ Create New</button>
            </Link>
          </div>
          {this.state.informasi.map(informasi => (
            <div key={informasi.id}>
              <div className="Content-Kiri-Bawah cf">
                <div className="Kiri-Bawah-Image">
                  <p>{informasi.image}</p>
                </div>
                <div className="Kiri-Bawah-Informasi">
                  <p className="Informasi-Judul">{informasi.judul}</p>
                  <div className="Informasi-Desripsi">
                    <p>{informasi.date}</p>
                    <p>{inflateRaw.time}</p>
                  </div>
                </div>
                <div className="Kiri-Bawah-Tempat">
                  Store Kongensgade 66,1264 Kobenhavn K, Denmark
                </div>
                <div className="Kiri-Bawah-Att">
                  10 Attachment
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Content-Kanan">
          <SidebarLeftContainer />
        </div>
      </div>
    );
  }
}
