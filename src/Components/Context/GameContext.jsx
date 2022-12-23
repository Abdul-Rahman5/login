import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export let gamecontext = createContext("");
function GameContextProvider(props) {
  const [AllGames, setAllGames] = useState([]);

  const Allgame = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    headers: {
      "X-RapidAPI-Key": `1a614a2a9emsha645a3888a373c1p17a193jsn340fc56d0468`,
      "X-RapidAPI-Host": `free-to-play-games-database.p.rapidapi.com`,
    },
  };
  async function getAllGames() {
    let { data } = await axios.request(Allgame);
    setAllGames(data);
  }

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <gamecontext.Provider value={{ AllGames }}>
      {props.children}
    </gamecontext.Provider>
  );
}
export default GameContextProvider;
