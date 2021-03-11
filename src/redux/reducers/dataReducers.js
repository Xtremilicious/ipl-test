import { GET_PLAYERS } from "../types";
import Players from "../../data/data.json";

const initialState = {
  players: Players,
  categories: {
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
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };

    default:
      return state;
  }
}
