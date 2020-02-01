import React from 'react';
import styled, { keyframes } from 'styled-components';
import breakpoints from '../utils/breakpoints';
import thedoor from '../assets/thedoor.jpg';
import logo from '../assets/whitelogo.png';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  height: 100vh;
  background: url(${thedoor});
  background-size: cover;
  
  @media screen and (min-width: ${breakpoints.mobile}) {
    background-position: center center;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div`
  text-align: center;
  margin-top: -10vh;
  color: #FE0E0D;
  text-shadow: rgba(254, 15, 114, 0.75) 0px 2px 4px;
`

const glow = keyframes`
  from {
    text-shadow: rgba(254, 15, 114, 0.75) 0px 2px 6px;
  }

  to {
    text-shadow: rgba(254, 15, 114, 0.75) 0px 2px 24px;
  }
`

const H1 = styled.h1`
  font: 72px "Phosphate Pro";

  animation: ${glow} 2s linear infinite alternate;
`

const H2 = styled.h2`
  font-weight: 200;
  font-size: 28px;
`;

const H3 = styled.h3`
  font-weight: 200;
  font-size: 24px;
  letter-spacing: 15px;
`;

const Logo = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;

  img {
    max-width: 100px;
    @media screen and (max-width: ${breakpoints.mobile}) {
      max-width: 18vw;
    }
  }
`;

const SinglePromo = () => (
  <Div>
    <Title>
      <H2>new single</H2>
      <H1>The Door</H1>
      <H3>coming soon</H3>
    </Title>

    <Logo>
      <img src={logo} alt="Wyman & The Wolves" />
    </Logo>
  </Div>
)

export default SinglePromo