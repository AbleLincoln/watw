import React from 'react';
import styled from 'styled-components';
import Img from './Img';
import ContentSection from './ContentSection';
import { H2, P, Bold, Italic, Colored } from '../utils/typography';
import breakpoints from '../utils/breakpoints';
import palette from '../utils/palette';
import bio from '../assets/bio.png';
import fullband from '../assets/fullband.jpg';

const StyledBio = styled(ContentSection)`
  > *:first-child {
    flex: 0 0 calc(50% - 30px);

    @media screen and (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  > *:last-child {
    flex: 0 0 calc(50% - 60px);

    @media screen and (max-width: ${breakpoints.mobile}) {
      flex: 1 0 calc(100% - 60px);
    }
  }
`;

const TextSection = styled.section`
  position: relative;
  padding: 3em 30px 1em;

  .background {
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    top: 0.5em;
    background-color: rgba(0, 0, 0, 0.1);
    transform: skewY(-6deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    text-align: justify;
  }
`;

const Bio = () => (
  <>
    <StyledBio>
      <section>
        <Img
          src={bio}
          alt="A ripper violin player and a shredding bass player"
        />
      </section>
      <TextSection>
        <div className="background" />
        <H2>
          Hailing from the{' '}
          <Colored color={palette.gold}>City of Angels</Colored>
        </H2>
        <P>
          Wyman &amp; The Wolves roll in like a storm with a sound and energy
          that is truly their own. The member’s collective influences vary
          across a broad spectrum, yet converge and unite into what the band
          describes as <Bold>Cosmic Country Soul</Bold>. Whether a dark
          gypsy-esque rambling country tune, an emotional groove laden number,
          or an all out rocker, these dudes make it pure and play with a fiery
          intensity!
        </P>
        <P>
          Having formed in early January of 2019, Wyman &amp; The Wolves are
          just beginning their musical journey together. That being said, it
          only took a few short moments in a cozy rehearsal space in Burbank, CA
          to know something magical was on the bound.
        </P>
        <P>
          Wasting little time, the fellas recently found themselves recording
          their debut EP at Robby Krieger’s (<Italic>The Doors</Italic>) Horse
          Latitudes Studio with Eric Corne behind the boards. Tracked live, the
          recordings capture the raw essence of a group finding their true flow
          and the spark that is sure to become a{' '}
          <Colored color={palette.red}>wildfire</Colored>!
        </P>
      </TextSection>
    </StyledBio>

    <ContentSection>
      <Img src={fullband} />
    </ContentSection>
  </>
);

export default Bio;
