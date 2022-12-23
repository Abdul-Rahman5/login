import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { gamecontext } from "../Context/GameContext";
export default function Home() {
  let { AllGames } = useContext(gamecontext);
  return (
    <>
      <div className="head-home text-center ">
        <h1 className="h2 fw-bolder mb-3 ">
          Find & track the best <span className=" text-info">free-to-play</span>{" "}
          games!
        </h1>
        <p className=" mb-3 lead">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Link to="/all">
          <button className="btn btn-outline-secondary btn-sm ">
            Browse Games
          </button>
        </Link>
      </div>
    
      <div className="container">
        <h3 className="mt-5 ">
          <i className="fas fa-robot"></i> Personalized Recommendations
        </h3>
        <div className="row">
          {AllGames.length > 0 ? (
            AllGames.slice(0, 9).map((game, index) => (
              <div key={index} className="col-md-6 col-lg-4 mt-3  ">
                <Link to={`/gamedetails/${game.id}`}>
                  <div className="game">
                    <img className="w-100" src={game.thumbnail} alt="" />
                    <div className=" d-flex justify-content-between align-items-center p-4">
                      <h5 className="lead">
                        {game.title.split(" ").splice(0, 1).join(" ")}
                      </h5>
                      <button className="btn btn-info btn-sm">Free</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="spinner">
              <i className="fas fa-spinner fa-spin fa-4x"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
