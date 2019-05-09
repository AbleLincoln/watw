import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContentSection from './ContentSection';
import Img from './Img';
import { H2 } from '../utils/typography';
import { pastShows } from '../utils/data';
import breakpoints from '../utils/breakpoints';

const StyledShow = styled.li`
  /* flex: 0 1 400px; */
  padding: 0px 25px 25px;

  p:first-child {
    /* float: left; */
    font-weight: 600;
    margin-bottom: 0.5em;

    span {
      float: right;
      font-weight: 300;
    }
  }
  p:nth-child(2) {
    float: right;
  }
`;

const Show = ({ show }) => (
  <StyledShow>
    <p>
      {show.venue}
      <span>{show.date}</span>
    </p>
    <Img
      src={show.poster}
      width="auto"
      height={window.innerWidth > breakpoints.mobileNum ? '400px' : 'auto'}
    />
  </StyledShow>
);

Show.propTypes = {
  show: PropTypes.shape({
    venue: PropTypes.string,
    date: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
};

const ShowList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PastShows = () => (
  <ContentSection>
    <H2>Past Shows</H2>
    <ShowList>
      {pastShows.map(show => (
        <Show show={show} key={show.date} />
      ))}
    </ShowList>
  </ContentSection>
);

export default PastShows;
