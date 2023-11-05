import React from 'react'
import myImage from './rickandmorty.png';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
            <div className="container" >
                <Link to="/" className="navbar-brand" href="#"><img src={myImage} width={100}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="" className="nav-link">Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
