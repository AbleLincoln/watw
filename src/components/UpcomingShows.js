import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2, Light, Link } from '../utils/typography';
import { upcomingShows } from '../utils/data';

const StyledShow = styled.li`
  background-color: rgba(24, 24, 24, 0.35);
  padding: 1.5em 30px;

  &:nth-child(2n) {
    background-color: rgba(104, 104, 104, 0.25);
  }

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    p {
      flex: 1 0 25%;

      &:first-child {
        flex: 1 0 15%;
      }
    }
  }
`;

const Show = ({ show }) => (
  <StyledShow>
    <div className="wrapper">
      <Light mb="0">{show.date}</Light>
      <p>{show.venue}</p>
      <Light mb="0">{show.location}</Light>
      <p>
        <Link href={show.link} target="_blank">
          Tickets
        </Link>
      </p>
    </div>
  </StyledShow>
);

Show.propTypes = {
  show: PropTypes.shape({
    date: PropTypes.string,
    venue: PropTypes.string,
    location: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

const H2withPadding = styled(H2)`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 1em;
  padding: 0 30px;
`;

const UpcomingShows = () => (
  <section>
    <H2withPadding>Upcoming Shows</H2withPadding>
    <ul>
      {upcomingShows.map(show => (
        <Show show={show} key={show.date} />
      ))}
    </ul>
  </section>
);

export default UpcomingShows;
