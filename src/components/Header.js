import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import breakpoints from '../utils/breakpoints';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
  position: absolute;
  left: 30px;
  right: 30px;
  top: 2rem;
`;

const NavList = styled.ul`
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  ::first-letter {
    font-size: 125%;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Logo = styled.li`
  text-align: center;

  img {
    max-width: 150px;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.5);
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavList>
          <NavItem>
            <Link to="video-section" smooth>
              Video
            </Link>
          </NavItem>
          <NavItem>
            <Link to="music-section" smooth>
              Music
            </Link>
          </NavItem>
          <Logo>
            <img src={logo} alt="Wyman & The Wolves" />
          </Logo>
          <NavItem>
            <Link to="show-section" smooth offset={-18}>
              Shows
            </Link>
          </NavItem>
          <NavItem>
            <Link to="contact-section" smooth>
              Contact
            </Link>
          </NavItem>
        </NavList>
      </StyledHeader>
    );
  }
}
