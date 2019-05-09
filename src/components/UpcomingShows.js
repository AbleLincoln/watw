import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { H2, P, Light, Link } from '../utils/typography';
import Breakpoints from '../utils/breakpoints';
import { upcomingShows } from '../utils/data';

const StyledShow = styled.li`
  background-color: rgba(24, 24, 24, 0.35);
  padding: 1em 30px;

  @media screen and (max-width: ${Breakpoints.mobile}) {
    padding: 1em 20px;
  }

  &:nth-child(2n) {
    background-color: rgba(104, 104, 104, 0.25);
  }

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const showInfoStyles = css`
  margin-bottom: 0;
  padding: 0.5em;
  box-sizing: border-box;
  @media screen and (max-width: ${Breakpoints.mobile}) {
    text-align: center;
    flex: 1 0 100%;
  }
`;
const Date = styled(Light)`
  ${showInfoStyles}
`;
const Venue = styled(P)`
  ${showInfoStyles}
  flex: 1 0 25%;
  margin-bottom: 0;
`;
const Location = styled(Light)`
  ${showInfoStyles}
  flex: 1 0 25%;
`;
const LinkWrapper = styled.p`
  ${showInfoStyles}
  flex: 1 0 25%;
`;

const Show = ({ show }) => (
  <StyledShow>
    <div className="wrapper">
      <Date>{show.date}</Date>
      <Venue>{show.venue}</Venue>
      <Location>{show.location}</Location>
      <LinkWrapper>
        <Link href={show.link} target="_blank">
          Tickets
        </Link>
      </LinkWrapper>
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
  @media screen and (max-width: ${Breakpoints.mobile}) {
    padding: 0 20px;
  }
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
