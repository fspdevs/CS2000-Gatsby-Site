import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/cslogo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  // color: ${props => props.theme.gradient.leftToRight} !important;
  a {
    color: #383838 !important;
    text-decoration: none;
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.parBlue.light} !important;
      // color: #0C0E2D !important;
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/whyus" > Why Us?</Link>
      <Link to="/contact">Contact Us</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
