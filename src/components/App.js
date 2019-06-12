import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { AppTypography } from '../utils/typography';
import Header from './Header';
import Hero from './Hero';
import Bio from './Bio';
import Video from './Video';
import UpcomingShows from './UpcomingShows';
import PastShows from './PastShows';
import Contact from './Contact';
import Footer from './Footer';

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #333;
  ${AppTypography}
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Hero />
      <Bio />
      <Element name="show-section">
        <UpcomingShows />
        <PastShows />
      </Element>
      <Element name="video-section">
        <Video />
      </Element>

      <Element name="contact-section">
        <Contact />
      </Element>
      <Footer />
    </StyledApp>
  );
}

export default App;
