import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function AllGames() {
  let prams = useParams();

  const [AllGames, setAllGames] = useState({});
  const Allgame = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${prams.id}`,
    headers: {
      "X-RapidAPI-Key": `1a614a2a9emsha645a3888a373c1p17a193jsn340fc56d0468`,
      "X-RapidAPI-Host": `free-to-play-games-database.p.rapidapi.com`,
    },
  };
  async function getAllGames() {
    let { data } = await axios.request(Allgame);
    setAllGames(data);
    let images = [...data.screenshots];
  }
  useEffect(() => {
    getAllGames();
  }, []);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 text-center">
            <div>
              <img
                alt=""
                srcSet=""
                className="w-100 rounded-4"
                src={AllGames.thumbnail}
              />
              <div className="row mt-3  w-100 justify-content-between me-0 pe-0">
                <div className="col-3 col-lg-2 me-2">
                  <span className="btn btn-dark2 mb-3 py-2 cursor">FREE</span>
                </div>
                <div className="col-9 me-0  pe-0 ">
                  <a
                    type="button"
                    name="playnow"
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="btn btn-ftg-blue btn-block w-75 py-2  btn-info"
                    href={AllGames.freetogame_profile_url}
                  >
                    <strong>PLAY NOW </strong>
                    <i className="fas fa-sign-out-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1>{AllGames.title}</h1>
            <h5 className="mt-3 fw-bold">About : {AllGames.title}</h5>
            <p>
              {" "}
              <span className="fw-bold lead">description</span> :{" "}
              {AllGames.description}
            </p>
            <h5 className="mt-3 fw-bold">Minimum System Requirements</h5>
            <ul className="list-unstyled ms-2">
              <li className="mt-1">
                <strong>graphics : </strong>
                <small>
                  {AllGames.minimum_system_requirements
                    ? AllGames.minimum_system_requirements.graphics
                    : "NVIDIA GeForce GTX 460 / AMD HD6850"}
                </small>
              </li>
              <li className="mt-1">
                <strong>memory : </strong>{" "}
                <small>
                  {AllGames.minimum_system_requirements
                    ? AllGames.minimum_system_requirements.memory
                    : "8GB RAM"}
                </small>
              </li>
              <li className="mt-1">
                <strong>os : </strong>{" "}
                <small>
                  {" "}
                  {AllGames.minimum_system_requirements
                    ? AllGames.minimum_system_requirements.os
                    : " Windows 7 64-Bit (SP1) or Windows 10 64-Bit"}{" "}
                </small>
              </li>
              <li className="mt-1">
                <strong>processor : </strong>{" "}
                <small>
                  {" "}
                  {AllGames.minimum_system_requirements
                    ? AllGames.minimum_system_requirements.processor
                    : " Core i3-4340 or AMD FX-6300"}{" "}
                </small>
              </li>
              <li className="mt-1">
                <strong>storage : </strong>{" "}
                <small>
                  {" "}
                  {AllGames.minimum_system_requirements
                    ? AllGames.minimum_system_requirements.storage
                    : " 175GB HD space"}
                </small>
              </li>
            </ul>
            {AllGames.thumbnail ? (
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="w-100 rounded-4"
                    src={
                      AllGames.thumbnail
                        ? AllGames.screenshots[0].image
                        : AllGames.thumbnail
                    }
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="w-100 rounded-4"
                    src={
                      AllGames.thumbnail
                        ? AllGames.screenshots[1].image
                        : AllGames.thumbnail
                    }
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    className="w-100 rounded-4 "
                    src={
                      AllGames.thumbnail
                        ? AllGames.screenshots[2].image
                        : AllGames.thumbnail
                    }
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            ) : (
              <div className="loader">Loading...</div>
            )}

            <h2 className="my-4 text-center">Additional Information</h2>
            <div className="row mb-5 mt-2 text-center">
              <div className="col-6 col-md-4 ">
                <span className="text-muted h2 ">
                  Title
                  <br />
                </span>
                <p className="lead">{AllGames.title}</p>
              </div>
              <div className="col-6 col-md-4">
                <span className="text-muted h2">
                  Developer
                  <br />
                </span>{" "}
                <p className="lead">{AllGames.developer}</p>
              </div>
              <div className="col-6 col-md-4">
                <span className="text-muted h2">
                  Publisher
                  <br />
                </span>{" "}
                <p className="lead">{AllGames.publisher}</p>
              </div>
              <div className="col-6 col-md-4">
                <span className="text-muted h2">
                  Release Date
                  <br />
                </span>{" "}
                <p className="lead">{AllGames.release_date}</p>
              </div>
              <div className="col-6 col-md-4">
                <span className="text-muted h2">
                  Genre
                  <br />
                </span>{" "}
                <p className="lead">{AllGames.genre}</p>
              </div>
              <div className="col-6 col-md-4">
                <span className="text-muted h2">
                  Platform
                  <br />
                </span>
                <p className="lead">
                  {" "}
                  <i className="fab fa-windows me-1"></i> Windows
                  {AllGames.Windows}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
