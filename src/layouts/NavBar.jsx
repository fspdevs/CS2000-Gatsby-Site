import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/cslogo.png';
import { slide as Menu } from "react-burger-menu"


const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: #383838 !important;
    text-decoration: none;
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.parBlue.light} !important;
    }
  }
`;

const NavBar = () => (
  
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <div>
        <a className="home-nav nav">
          <Link to="/" activeClassName="nav-active">
            Home
          </Link>
        </a>
      </div>
      <div>
        <Link className="nav" to="/about" activeClassName="nav-active">
          About Us
        </Link>
      </div>
      <div>
        <Link className="nav" to="/whyus" activeClassName="nav-active">
          {' '}
          Why Us?
        </Link>
      </div>
      <div>
        <Link className="nav" to="/contact" activeClassName="nav-active">
          Contact Us
        </Link>
      </div>
    </Nav>

          {/* header toggle menu */}
          <Menu right>
        <Link className="menu-item nav" to="/">
          Home
        </Link>
        <Link to="/about" className="menu-item nav">
          About Us
        </Link>
        <Link to="/whyus" className="menu-item nav">
          Why Us
        </Link>
        <Link to="/contact" className="menu-item nav">
          Contact Us
        </Link>
      </Menu>
    <style jsx>
      {`
         {/* code to help underline be contained to link container only */}
        .nav,
        .nav:after,
        .nav:before {
          box-sizing: border-box;
          -moz-box-sizing: border-box;
        }

        .nav {
          margin: 0;
          padding: 0;
          border: 0 none;
          position: relative;
          outline: none;
        }

        {/* sets up the nav hover underline */}
        div > .nav:before {
          content: '';
          position: absolute;
          width: 100%;
          margin-bottom: -5px;
          height: 3px;
          bottom: 0;
          left: 0;
          background: #4492c9;
          visibility: hidden;
          border-radius: 5px;
          transform: scaleX(0);
          transition: 0.25s linear;
        }

        div > .nav:hover:before,
        div > .nav:focus:before {
          visibility: visible;
          transform: scaleX(1);
        }

        {/* fix for making home underline shorter */}
        div > .home-nav:before {
          width: 80%;
          left: 26px;
        }
       
        {/* active link styles */}
        div > .nav-active,
        a > .nav-active
         {
          content: '';
          width: 100%;
          height: 3px;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #4492c9;
          color: #4492c9 !important;
        }

     
        .css-1yrnvmk-NavBar--Nav {
          margin-left: auto;
        }

        /* toggle menu section --------------------------- */
        html,
        body {
          margin: 0;
        }

        #App {
          font-family: sans-serif;
          /* Give app full page to work with */
          height: 100vh ;
        }

         #page-wrap { 
          text-align: center;
          /* Prevent sidebar from showing a scrollbar on page */
          overflow: auto;
        }

        /* Individual item */
        .bm-item {
          display: inline-block;
          /* Our sidebar item styling */
          text-decoration: none;
          margin-bottom: 10px;
           color: #f0f0f0;
          transition: color 0.2s;
        }

        /* Change color on hover */
        .bm-item:hover {
           color: #4492C9;
        }

        /* The rest copied directly from react-burger-menu docs */
        /* Position and sizing of burger button */
        .bm-burger-button {
          position: fixed;
          width: 36px;
          height: 30px;
          right: 36px;
          top: 26px;
        }

        /* Color/shape of burger icon bars */
        .bm-burger-bars {
           background: grey;
          display: none;
        }

        .bm-burger-bars:hover {
         background: #757778;
        }

        /* Position and sizing of clickable cross button */
        .bm-cross-button {
          height: 24px;
          width: 24px;
        }

        /* Color/shape of close button cross */
        .bm-cross {
          background: #bdc3c7;
        }

        .bm-menu-wrap {
          // display:none
         position: fixed;
        height: 100%;
        } 

        /* General sidebar styles */
        .bm-menu {
         
          background: #373838;
          padding: 2.5em 1.5em 0;
          font-size: 1.15em;
          min-height: 1300px !important;
          margin-top: -18px;
        }

        /* Morph shape necessary with bubble or elastic */
        .bm-morph-shape {
          fill: #373a47;
        }

        /* Wrapper for item list */
        .bm-item-list {
          color: #4492C9;
        }

        /* Styling of overlay */
        .bm-overlay {
          background: rgba(0, 0, 0, 0.3);
           background: #757778;
        }

        @media only screen and (max-width: 780px) {
          .nav {
            display: none;
          }
          header {
            position: fixed;
            
          }
          .bm-burger-bars {
            display: block;
          }
        }

        // animation keyframes ----------------
        @keyframes hover-v s {
          0% {
            transform: scaleX(0);
            height: 5px;
          }
          45% {
            transform: scaleX(1.05);
            height: 5px;
          }
          55% {
            height: 5px;
          }
          100% {
            transform: scaleX(1.05);
            height: 3.8rem;
          }
        }
        @keyframes no-hover-v {
          0% {
            transform: scaleX(1.05);
            height: 3.8rem;
          }
          45% {
            height: 5px;
          }
          55% {
            transform: scaleX(1.05);
            height: 5px;
            opacity: 1;
          }

          100% {
            transform: scaleX(0);
            height: 5px;
            opacity: 0.02;
          }
        }
      `}
    </style>
  </Headroom>
);

export default NavBar;
