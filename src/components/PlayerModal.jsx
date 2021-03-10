import React from "react";
import { DataConsumer } from "../data/Context";
import { BiSearch } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import StockImage from "../assets/cricket.svg";
import { GiCricketBat } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BiTennisBall } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

export default function PlayerModal(data) {
  function notA(attribute) {
    if (attribute == "" || attribute == "NULL" || attribute == undefined) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="player-info">
      <div className="info-header">Player Information</div>
      <div className="player-detail-container">
        <div className="country player-details">
          <div className="box d-flex flex-direction-row">
            <IconContext.Provider value={{ color: "#819FF7", size: "1.5rem" }}>
              <BiFlag />
            </IconContext.Provider>
            <span>Country</span>
          </div>
          <span className="detail">
            {notA(data.data.Country) ? "N.A." : data.data.Country}
          </span>
        </div>
        <div className="bowling player-details">
          <IconContext.Provider value={{ color: "#819FF7", size: "1.5rem" }}>
            <BiTennisBall />
          </IconContext.Provider>
          <span className="detail">
            {notA(data.data.Bowling_Skill) ? "N.A." : data.data.Bowling_Skill}
          </span>
        </div>
        <div className="batting player-details">
          <IconContext.Provider value={{ color: "#819FF7", size: "1.5rem" }}>
            <GiCricketBat />
          </IconContext.Provider>
          <span className="detail">
            {notA(data.data.Batting_Hand) ? "N.A." : data.data.Batting_Hand}
          </span>
        </div>
      </div>
      {/* <div className="show-details">Show Details</div> */}
    </div>
  );
}
