import React from 'react';
import styled from 'styled-components';
import wolf from '../assets/wolf.png';

const StyledFooter = styled.footer`
  display: flex;
  max-width: 1200px;
  margin: 4em auto 0;
  justify-content: flex-end;

  div {
    position: relative;
    width: 400px;
    height: 400px;
    background-image: url(${wolf});
    background-size: cover;

    p {
      position: absolute;
      bottom: 4px;
      left: 90px;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <p>&copy; 2019 Wyman & the Wolves</p>
    </div>
  </StyledFooter>
);

export default Footer;
