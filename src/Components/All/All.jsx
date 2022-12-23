import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import spinner from "../../images/Bean Eater-1.2s-200px.gif";
import { gamecontext } from "../Context/GameContext";
import { moreContext } from "../Context/SeeMore";
import { userContext } from "../Context/UserContextUp";
import $ from "jquery";

export default function AllGames() {
  let { AllGames } = useContext(gamecontext);
  let { count, SeeMoreGame } = useContext(moreContext);
  let { upUser } = useContext(userContext);
  

  return (
    <>
      <button
        onClick={upUser}
        className="btn position-fixed btn-light btnUp  text-black py-2 rounded-circle "
      >
        <i className="fa fa-arrow-alt-circle-up iconUp"></i>
      </button>

      <div className="container mt-3">
        <div className="row">
          {AllGames.length > 0 ? (
            AllGames.slice(0, count).map((game, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <Link to={`/gamedetails/${game.id}`}>
                  <div className="game">
                    <img className="w-100" src={game.thumbnail} alt="" />
                    <div className=" d-flex justify-content-between align-items-center mx-2 mt-3">
                      {game.title.length > 10 ? (
                        <p className="m-0 fs-5 fw-bold lead">
                          {game.title.split(" ").splice(0, 1).join(" ")}
                        </p>
                      ) : (
                        <p className="m-0 fs-5 fw-bold">
                          {game.title.slice(0, 15)}
                        </p>
                      )}
                      <button className="btn btn-info btn-sm text-black">
                        Free
                      </button>
                    </div>
                    <p className="px-2 pt-2 lead">
                      {" "}
                      {game.short_description.slice(0, 20)}...
                    </p>
                    <div className="">
                      <div className="d-flex justify-content-between p-2">
                        <i className="fas fa-plus-square"></i>
                        <div className="d-flex mb-n2 justify-content-between align-items-center">
                          <span className="badge bg-secondary text-dark me-2">
                            {game.genre}
                          </span>
                          <i
                            title="Available on Windows"
                            className="fab fa-windows text-muted stretched-link"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="spinner">
              {" "}
              <img width="100px" src={spinner} alt="" />{" "}
            </div>
          )}
        </div>
        <div className="text-center m-auto">
          {" "}
          <button
            onClick={SeeMoreGame}
            className="btn btn-outline-secondary py-2 pt-1 more-btn mb-4 text-center"
          >
            More Games <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
