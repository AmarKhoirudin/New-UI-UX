import React, { Component } from "react";
import "./Content3A.css";
import { Link } from "react-router-dom";
import SideBarLeftCreate from "../../SidebarLeft/Content3A";
import ButtonText from "../../Button/Button";
import MyDropzone from "./drop";
import imageinput from "../../../img/image-input.png"
import ContentKirikanan from "./content-kiri-kanan";

export default class Content3A extends Component {
  state={
    day: "",
    hour: ""
  }

  onChangeDate = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    }, () => {
      console.log(this.state)
    })
  }
  render() {
    return (
      <div className="isitext-3A">
        <div className="Content-Kiri-3A">
          <div className="Content-Kiri-Atas-3A cf">
            <h1>Create event</h1>
            <Link to="/">
              <button className="cssButton3a">Cancel</button>
            </Link>
          </div>
          <div className="Content-Kiri-Bawah-3A cf">
            <div className="Kiri-Bawah_Kiri">
              <div className="Kiri-Bawah_Kiri-1 cf">
                <p>TITLE</p>
                <input type="text" placeholder="Hook app concept development"/>
                <div className="Kiri-1-Button cf">
                  <p>+</p>
                  <ButtonText classButton="button_kiri-1" textButton="Add description" />
                </div>
              </div>
              <div className="Kiri-Bawah_Kiri-2">
                <div className="Kiri-2-title cf">
                  <p className="title-day">Day</p>
                  <p className="title-hour">Hour - Minute</p>
                </div>
                <div className="Kiri-2-input">
                    <input className="input-1" type="date" name="day" onChange={this.onChangeDate} value={this.state.day} />
                    <input className="input-2" type="time" name="hour" onChange={this.onChangeDate} value={this.state.hour}/>
                  <div className="Kiri-2-input-text">
                    <input type="checkbox"/>
                    <p>This event take place on the {this.state.day} from {this.state.hour} </p>

                  </div>
                </div>
              </div>
              <div className="Kiri-Bawah_Kiri-3">
                <p>Location</p>
                <input type="text" />
                <div className="Kiri-Bawah_Kiri-3_button cf">
                  <p>+</p>
                  <ButtonText textButton="Seet meeting room" classButton="cssButoon-Kiri-3" />
                </div>
              </div>
              <div className="Kiri-Bawah_Kiri-4">
                <p>Upload attachements</p>
                <div className="gambar-bawah-kiri">
                  <img src={imageinput} alt="kosong" />
                </div>
                <div className="drop-file">
                <MyDropzone />

                </div>
              </div>
            </div>
            <div className="Kiri-Bawah_Kanan">
              <ContentKirikanan/>
            </div>
          </div>
        </div>
        <div className="Content-Kanan-3A">
          <SideBarLeftCreate />
        </div>
      </div>
    );
  }
}
