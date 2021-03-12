import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import PlayerCard from "../components/PlayerCard";

function Feed(state) {
  const giveAlert = () => {
    alert("Search logic not implemented.");
  };

  const [playersToDisplay, setplayersToDisplay] = useState(24);
  const showMore = () => {
    setplayersToDisplay(playersToDisplay + 24);
  };

  const filterPlayers = (filter) => {
    let playersFiltered = players.filter((el) => {
      let match = true;
      for (const [key, value] of Object.entries(filter)) {
        match = value.includes(el[key]) & match;
      }
      return match;
    });
    players = playersFiltered;
  };

  let { players, filter } = state;

  if (filter !== undefined) {
    filterPlayers(filter);
  }

  const totalPlayers = players.length;
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
        {filter !== undefined ? (
          <div className="tag-container">
            {Object.entries(filter).map((entry, index) => {
              return (
                <div className="tag" key={`tag-${index.toString()}`}>
                  {`${entry[0]}: `}
                  <span className="tag-values">{`${entry[1].join(", ")}`}</span>
                  <IconContext.Provider value={{ color: "#819FF7" }}>
                    <FaTimes />
                  </IconContext.Provider>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="cardContainer">
        {players.slice(0, playersToDisplay).map((player, index) => {
          return <PlayerCard data={player} key={"player" + index} />;
        })}
      </div>
      {playersToDisplay < totalPlayers ? (
        <div className="d-flex justify-content-center m-4">
          <button onClick={() => showMore()} className="load-more-button">
            Load More
          </button>
        </div>
      ) : null}
    </FeedWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.data.players,
  };
};

const FeedWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  .feed-navbar {
    background: white;
    margin: 0 1.5em;
    padding: 1.5em;
    position: sticky;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr;

    .searchbar {
      display: flex;
      align-items: center;
      font-size: 2em;
      height: fit-content;
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
    width: 7em;
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
  .load-more-button {
    padding: 0.5em 1em;
    border: 1px solid #819ff7;
    background: transparent;
    outline: none;
  }
  .tag-container {
    margin-left: 0.1em;
    display: flex;
    justify-content: center;
    overflow-wrap: normal;
    flex-flow: row wrap;
    line-height: 170%;
  }
  .tag {
    padding: 0.3em 0.5em;
    width: fit-content;
    border: 1px solid #e6e6e6;
    margin: 0.2rem;
    border-radius: 4em;
    font-size: 1em;
  }
  .tag-values {
    color: #819ff7;
    margin-right: 0.5em;
  }
`;

export default connect(mapStateToProps, {})(Feed);
