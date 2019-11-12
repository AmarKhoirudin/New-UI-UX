import React, { Component } from "react";
import { SidebarLeft } from "../Component/SidebarLeft/Content3B/SidebarLeft";

export default class SidebarLeftContainer extends Component {
  state = {
    date: ""
  };

  componentDidMount() {
    var months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    var date = new Date();
    var tanggal = date.getDate()
    const bulan = date.getMonth();
    const dateNow = tanggal +" "+ months[bulan]
    this.setState({
      date: dateNow
    });
  }

  render() {
    return (
      <div>
        <SidebarLeft dateNow={this.state.date} />
      </div>
    );
  }
}
