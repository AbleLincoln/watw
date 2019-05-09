import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContentSection from './ContentSection';
import { P, Light, Colored } from '../utils/typography';
import palette from '../utils/palette';

const StyledContact = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding: 2em;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;

  > * {
    position: relative;
    z-index: 1;
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    transform: skewY(-6deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const Contact = () => (
  <ContentSection justifyContent="center">
    <StyledContact>
      <div className="background" />
      <P mb="0.5em" fontSize="1.5em">
        Reach out
      </P>
      <Light mb="1em" fontSize="1.5em">
        We don't bite
      </Light>
      <P mb="0.5em">
        <FontAwesomeIcon icon={faPhone} />
        608<Colored color={palette.gold}>.</Colored>239
        <Colored color={palette.gold}>.</Colored>9223
      </P>
      <P mb="0">
        <FontAwesomeIcon icon={faEnvelope} />
        music<Colored color={palette.gold}>@</Colored>
        Wyman
        <wbr />
        AndTheWolves.com
      </P>
    </StyledContact>
  </ContentSection>
);

export default Contact;
