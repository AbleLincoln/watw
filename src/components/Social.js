import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const StyledSocial = styled.ul`
  position: sticky;
  bottom: calc(-6em - 40px);
  margin-bottom: calc(-6em - 40px);
  left: 0;
  right: 0;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;

  li {
    font-size: 40px;
    padding: 1em 10px;
  }
`;

const Social = () => (
  <StyledSocial>
    <li>
      <a
        href="https://www.facebook.com/wymanandthewolvesband/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/wymanandthewolves/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/channel/UCccmTz2_GsR_VOjqDPMUyvw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </li>
  </StyledSocial>
);

export default Social;
