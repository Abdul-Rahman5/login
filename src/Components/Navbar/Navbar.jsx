import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo2.png'
// import style from './Navbar.module.css'

export default function Navbar({ userData, logOut }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container py-2">
                    <Link className="navbar-brand fw-bolder normal-font">
                        <img className="" src={logo} alt="Game Over Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {userData ? <>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="home"><small className="fs-6 m-0 sm">Home</small></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="all">All</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Platforms
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="platforms/pc">Pc</Link></li>
                                        <li><Link className="dropdown-item" to="platforms/browser">Browser</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="sort_by/release_date">Release Date</Link></li>
                                        <li><Link className="dropdown-item" to="sort_by/popularity">Popularity</Link></li>
                                        <li><Link className="dropdown-item" to="sort_by/alphabetical">Alphabetical</Link></li>
                                        <li><Link className="dropdown-item" to="sort_by/relevance">Relevance</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="categories/racing">Racing</Link></li>
                                        <li><Link className="dropdown-item" to="categories/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="categories/social">Social</Link></li>
                                        <li><Link className="dropdown-item" to="categories/shooter">Shooter</Link></li>
                                        <li><Link className="dropdown-item" to="categories/open_world">Open World</Link></li>
                                        <li><Link className="dropdown-item" to="categories/zombie">Zombie</Link></li>
                                        <li><Link className="dropdown-item" to="categories/fantasy">Fantasy</Link></li>
                                        <li><Link className="dropdown-item" to="categories/action_rpg">Action RPG</Link></li>
                                        <li><Link className="dropdown-item" to="categories/action">Action</Link></li>
                                        <li><Link className="dropdown-item" to="categories/flight">Flight</Link></li>
                                        <li><Link className="dropdown-item" to="categories/battle_royal">Battle Royal</Link></li>
                                    </ul>
                                </li>
                            </> : ''}
                        </ul>
                        <div className="right-nav navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav">
                                {userData ? <>
                                    <li className="nav-item logout">
                                        <span onClick={logOut} className="nav-link btn border-info text-info" aria-current="page"><small>Log Out</small></span>
                                    </li>
                                </> : <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-center my-2 my-lg-0" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn border-info text-info  ms-2" aria-current="page" to="">Join Free</Link>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
