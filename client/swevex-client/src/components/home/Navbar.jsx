import React, { useState } from "react";
import logo from "../../images/swevex-logo.svg";
import openMenu from "../../images/openMenu.svg";
import "../../css/general-css/general.css";
import { Link, NavLink } from "react-router-dom";
import "../../css/home-css/hero.css";

// Mobile navigation bar functional componet
function MobileNavBar() {
  return (
    <>
      <ul className="mobile-ul flex flex-col justify-center items-center absolute inset-0 bg-slate-50 text-[25px] gap-2 z-10">
        {/* <img className='w-[18px] h-[16px] absolute top-0 right-0 my-[32px] mx-[45px]' src={closeMenu} alt="" onClick={navbarFun}/> */}
        <li className="home">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li className="services">
          <NavLink to="/services">SERVICES</NavLink>
        </li>
        <li className="careers">
          <NavLink to="/careers">CAREERS</NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </>
  );
}

// Desktop navigation bar functional componet
function DesktopNavBar() {
  return (
    <>
      <ul className="desktop-ul hidden md:flex gap-6 md:text-[25px]">
        <li className="home">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/services">SERVICES</NavLink>
          <div className="dropdown-content | uppercase">
            <NavLink to="/services/IT%20INFRASTRUCTURE">
              IT Infrastructure
            </NavLink>
            <NavLink to="/services/DATA%20PROCESSING">Data Processing</NavLink>
            <NavLink to="/services/WEB%20DEVELOPMENT">Web Development</NavLink>
            <NavLink to="/services/E-COMMERCE">E-Commerce</NavLink>
            <NavLink to="/services/CUSTOMER%20SUPPORT">
              Customer Support
            </NavLink>
            <NavLink to="/services/MARKETING">Marketing</NavLink>
          </div>
        </li>
        <li className="careers">
          <NavLink to="/careers">CAREERS</NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </>
  );
}

// Main NavBar
function Navbar() {
  const [open, setOpen] = useState(false);
  const navbarFun = () => setOpen(!open);

  return (
    <div>
      <nav className="max-width-container | flex justify-between items-center">
        <div className=" Logo | my-4">
          <Link to="/">
            <img
              className="relative z-20 w-[144px] h-[76px]"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="md:hidden">
          <img
            className=" Menu-Hamburger-menu | w-[18px] h-[16px] relative z-20"
            src={openMenu}
            alt=""
            onClick={navbarFun}
          />
          {open && <MobileNavBar />}
        </div>
        <DesktopNavBar />
      </nav>
    </div>
  );
}

export default Navbar;
