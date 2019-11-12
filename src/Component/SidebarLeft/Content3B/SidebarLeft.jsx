import React from "react";
import "./SidbarLeft.css";
import MyApp from "./Calender/calender";
import PropTypes from "prop-types"


export const SidebarLeft = ({dateNow}) => {

  return (
    <div>
      <div className="logo-atas cf">
        <div className="loogo-calender-i">
          <i className="fas fa-calendar-alt calradius"></i>
        </div>
        <div className="textCalender">
          <p>Calender</p>
          <p>{dateNow}</p>
        </div>
      </div>
      <div className="calender">
        <MyApp/>
      </div>
    </div>
  );
};

SidebarLeft.propTypes = {
  dateNow: PropTypes.string
}

SidebarLeft.defaultProps ={
  dateNow : "Tanggal Guys"
}