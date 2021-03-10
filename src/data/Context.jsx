import React, { Component } from "react";
import Players from "./players.json";
import PlayerStats from "./most_runs_average_strikerate.json";

const DataContext = React.createContext();

class DataProvider extends Component {
    
  state = {
    players: [],
    teams: [],
    categories : {
      "Batting Hand": ["Left Handed", "Right Handed"],
      "Bowling Skill": [
        "Right-arm medium",
        "Right-arm offbreak",
        "Right-arm fast-medium",
        "Slow left-arm orthodox",
        "Right-arm fast",
        "Right-arm medium-fast",
        "Legbreak",
        "Legbreak googly",
        "Left-arm fast-medium",
        "Left-arm medium",
        "Left-arm medium-fast",
        "Slow left-arm chinaman",
        "Left-arm fast",
        "Right-arm bowler",
        "Right-arm Fast",
        "Right-arm Medium",
      ],
      Country: [
        "India",
        "Australia",
        "South Africa",
        "New Zealand",
        "Sri Lanka",
        "West Indies",
        "England",
        "Pakistan",
        "Bangladesh",
        "Zimbabwea",
        "Netherlands",
      ],
    }
  };
  componentDidMount() {
    this.setData();
  }

  setData = () => {
    let tempData1 = {};
    let finalData = []
    Players.forEach(player=>{
      let playerStat = PlayerStats.find(
        (el) => el.batsman === player.Player_Name
      );
      tempData1 = {...player, ...playerStat};
      finalData.push(tempData1);
    })
    this.setState(() => {
      return { players: finalData };
    });

  

    let tempData2 = [];
    PlayerStats.forEach((entity) => {
      const single_entity = { ...entity };
      tempData2 = [single_entity, ...tempData2];
    });
    this.setState(() => {
      return { playerStats: tempData2 };
    });
  };

  getentity = (id) => {
    const product = this.state.products.find((entity) => entity.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getentity(id);
    this.setState(() => {
      return { detailentity: product };
    });
  };

  handleSearch = (query) => {
    this.setState(() => {
      return {
        search: query,
      };
    });
  };

  resetSearch = () => {
    this.setState(() => {
      return {
        search: "",
      };
    });
  };

  openModal = (id) => {
    const product = this.getentity(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          handleSearch: this.handleSearch,
          resetSearch: this.resetSearch,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
