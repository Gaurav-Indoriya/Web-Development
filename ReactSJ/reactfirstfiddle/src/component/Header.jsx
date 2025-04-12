import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>
    <nav className="navbar navbar-dark navbar-expand-md fixed-top">
        <div className="container-fluid">
           
            <a href="#" className="navbar-brand">
                <img src="images/ff-logo-02.png" alt="" className="web-logo"/>
                <img src="images/logo-for-mobile.png" alt="" className="mobile-logo"/>
            </a>

            <button className="navbar-toggler" data-bs-target="#a" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
       
            <div className="navbar-collapse collapse" id="a">
                <ul className="navbar-nav ms-auto text-center nav-menu">
                    <li><Link to ="/" className="nav-link">Home</Link></li>
                    <li><Link to ="About" className="nav-link">About</Link></li>
                    <li><Link to="Brand" className="nav-link">Brand</Link></li>
                    <li><Link to="OurTeam" className="nav-link">Our Team</Link></li>
                    <li><Link to="PressRelease" className="nav-link">Press Release</Link></li>
                    <li><Link to="Contact" className="nav-link">Contact</Link></li>
                    <li><Link to="Careers" className="nav-link">Careers</Link></li>
                    <li><a href="#" className="nav-link">Franchise</a></li>
                </ul>
            </div>
           
        </div>
    </nav>
    </>


  );
}

export default Header;