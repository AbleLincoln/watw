import React from 'react';
import styled from 'styled-components';
import Img from './Img';
import ContentSection from './ContentSection';
import { H2, P, Bold, Colored } from '../utils/typography';
import breakpoints from '../utils/breakpoints';
import palette from '../utils/palette';
import bio from '../assets/bio.png';

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
  <StyledBio>
    <section>
      <Img src={bio} alt="A ripper violin player and a shredding bass player" />
    </section>
    <TextSection>
      <div className="background" />
      <H2>
        Hailing from the <Colored color={palette.gold}>City of Angels</Colored>
      </H2>
      <P>
        Wyman and the Wolves roll in like a quiet storm with a sound and energy
        that is truly their own. The members' collective influences vary across
        a broad spectrum, yet converge and unite into what the band describes as{' '}
        <Bold>Cosmic Country Soul</Bold>.
      </P>
      <P>
        Whether a dark gypsy-esque rambling country tune, a soulful smouldering
        groove laden number, or a dreamy emotion filled piece, these dudes make
        it pure and play with a firey intensity! Each tune it's own entity, the
        group focuses on songwriting, lyrical content, exploration and variety.
      </P>
      <P>
        Having formed in early January of 2019, Wyman and the Wolves are just
        beginning their musical journey together. That being said, it only took
        a few short moments in a cozy rehearsal space in Burbank, CA to know
        that something magical was on the bound! Fanning the spark that is sure
        to become a wildfire, the fellas of WW are comin' in hot!
      </P>
    </TextSection>
  </StyledBio>
);

export default Bio;
