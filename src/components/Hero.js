import React from 'react';
import styled from 'styled-components';
import Social from './Social';
import kyle from '../assets/kyle.png';

const Img = styled.img`
  width: 100%;
`;

const Hero = () => (
  <div>
    <Img src={kyle} alt="Soulful Sing-along Songs" />

    <Social />
  </div>
);

export default Hero;
