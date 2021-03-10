import React from "react";
import { IconContext } from "react-icons";
import { FaBirthdayCake } from "react-icons/fa";
import StockImage from "../assets/cricket.svg";
import { GiCricketBat } from "react-icons/gi";
import { BiTennisBall } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";
import { RiNumbersFill } from "react-icons/ri";

export default function PlayerCard(data) {
  //console.log(data.data);

  function notA(attribute) {
    if (attribute === "" || attribute === "NULL" || attribute === undefined) {
      return true;
    } else {
      return false;
    }
  }
  function getDate(date) {
    const today = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
  return (
    <div className="playerCard">
      <div className="player-header">
        <div className="player-image">
          <img className=" player-image" src={StockImage} alt="Player" />
        </div>
        <div className="player-meta">
          <span className="player-name">{data.data.Player_Name}</span>
          {notA(data.data.DOB) === false ? (
            <div className="dob">
              <IconContext.Provider
                value={{ color: "#819FF7", size: "1.3rem" }}
              >
                <FaBirthdayCake />
              </IconContext.Provider>
              <span className="date">{getDate(data.data.DOB)}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="player-info">
        <div className="info-header">Player Information</div>
        <div className="player-detail-container">
          <div className="country player-details">
            <div className="box">
              <IconContext.Provider
                value={{ color: "#819FF7", size: "1.5rem" }}
              >
                <BiFlag />
              </IconContext.Provider>
              <span className="meta-title">Country</span>
            </div>
            <span className="detail">
              {notA(data.data.Country) ? "N.A." : data.data.Country}
            </span>
          </div>
          <div className="batting player-details">
            <div className="box">
              <IconContext.Provider
                value={{ color: "#819FF7", size: "1.5rem" }}
              >
                <GiCricketBat />
              </IconContext.Provider>
              <span className="meta-title">Batting</span>
            </div>
            <span className="detail">
              {notA(data.data.Batting_Hand) ? "N.A." : data.data.Batting_Hand}
            </span>
          </div>
          <div
            className="bowling player-details"
            style={{ gridColumn: "1 / span 2" }}
          >
            <div className="box">
              <IconContext.Provider
                value={{ color: "#819FF7", size: "1.5rem" }}
              >
                <BiTennisBall />
              </IconContext.Provider>
              <span className="meta-title">Bowling</span>
            </div>
            <span className="detail">
              {notA(data.data.Bowling_Skill) ? "N.A." : data.data.Bowling_Skill}
            </span>
          </div>

          {data.data ? (
            <React.Fragment>
              <div
                className="runs player-details"
                style={{ gridColumn: "1 / span 2" }}
              >
                <div className="box">
                  <IconContext.Provider
                    value={{ color: "#819FF7", size: "1.5rem" }}
                  >
                    <RiNumbersFill />
                  </IconContext.Provider>
                  <span className="meta-title">Total Runs</span>
                </div>
                <span className="detail">
                  {notA(data.data.total_runs) ? "N.A." : data.data.total_runs}
                </span>
              </div>
              <div className="runs player-details">
                <div className="box">
                  <span className="meta-title">No. of Balls</span>
                </div>
                <span className="detail">
                  {notA(data.data.numberofballs)
                    ? "N.A."
                    : data.data.numberofballs}
                </span>
              </div>
              <div className="runs player-details">
                <div className="box">
                  <span className="meta-title">Out</span>
                </div>
                <span className="detail">
                  {notA(data.data.out) ? "N.A." : data.data.out}
                </span>
              </div>
              <div className="runs player-details">
                <div className="box">
                  <span className="meta-title">Strike Rate</span>
                </div>
                <span className="detail">
                  {notA(data.data.strikerate)
                    ? "N.A."
                    : Math.round(data.data.strikerate)}
                </span>
              </div>
              <div className="runs player-details">
                <div className="box">
                  <span className="meta-title">Average</span>
                </div>
                <span className="detail">
                  {notA(data.data.average)
                    ? "N.A."
                    : Math.round(data.data.average)}
                </span>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        {/* <div className="show-details">Show Details</div> */}
      </div>
    </div>
  );
}
