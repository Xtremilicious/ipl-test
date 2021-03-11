import { GET_PLAYERS } from "../types";
import Players from "../../data/players.json";

export const getPlayers = () => (dispatch) => {
  dispatch({
    type: GET_PLAYERS,
    payload: Players,
  });
};
