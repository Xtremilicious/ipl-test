import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { DataConsumer } from "../data/Context";
import { BiSearch } from "react-icons/bi";
import PlayerCard from "../components/PlayerCard";
import { Suspense, lazy } from 'react';

const FeedWrapper = styled.nav`
  height: 100vh;
  overflow-y: scroll;
  .feed-navbar {
    margin: 0 1.5em;
    padding: 1.5em;
    .searchbar {
      display: flex;
      width: 50%;
      align-items: center;
      font-size: 2em;
      border: 1px solid #e6e6e6;
    }
    .input-bar {
      font-size: 0.7em;
      border: none;
      background: transparent;
    }
    .search-submit {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      margin-left: -1.5em;
      outline: none;
    }
  }
  .cardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3em;
    justify-items: center;
    margin: 0 1.5em;
  }
  .playerCard {
    width: 85%;
    border: 1px solid #e6e6e6;
    border-top: 4px solid #819ff7;
    transition: 0.3s;

    :hover {
      box-shadow: rgb(0 0 0 / 10%) 0px 1px 7px;
    }
  }
  .player-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-top: 0.5em;
    justify-content: center;
  }
  .player-image {
    height: 7em;
  }
  .player-info {
  }
  .player-meta {
    margin-left: 1em;
    .player-name {
      font-size: 1.5em;
      font-weight: 600;
    }
  }
  .dob {
    font-size: 1.3em;
    display: flex;
    align-items: center;
    .date {
      margin-left: 0.2em;
    }
  }
  .info-header {
    padding: 0.5em;
    background: linear-gradient(135deg, #819ff7 0%, #ffffff 100%);
    font-size: 1.5em;
  }
  .player-detail-container {
    margin: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.3em;
  }
  .player-details {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #e6e6e6;
    .detail {
      margin-left: 0.2em;
      line-height: 1.2;
      font-size: 1.3em;
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .show-details {
    font-size: 1.3em;
    background: linear-gradient(135deg, #819ff7 0%, #ffffff 100%);
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
  .meta-title {
    font-size: 1.3em;
    margin-left: 0.2em;
    font-weight: 600;
  }
  .box {
    border-bottom: 1px solid #e6e6e6;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Feed() {
  function giveAlert() {
    alert("Search logic not implemented.");
  }

  return (
    <FeedWrapper>
      <div className="feed-navbar">
        <div className="searchbar">
          <input
            type="search"
            id="form1"
            className="form-control input-bar"
            placeholder="Search IPL Players..."
            onClick={() => giveAlert()}
          />
          <button type="button" className="search-submit">
            <IconContext.Provider
              value={{ color: "#819FF7", fontSize: "2rem" }}
            >
              <BiSearch />
            </IconContext.Provider>
          </button>
        </div>
      </div>
     
        <div className="cardContainer">
          
          <DataConsumer>
       
            {(value) => {
              return value.players.map((player) => {
                //console.log(playerStat)
                return <PlayerCard data={player} />;
              });
              //console.log(value.players);
              //return value.players.map((player) => <div>{player.Player_Name}</div>);
            }}
           
          </DataConsumer>
        </div>
      
    </FeedWrapper>
  );
}
