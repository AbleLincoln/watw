import styled from 'styled-components';
import palette from './palette';

export const AppTypography = `
  font-size: 18px;
  color: #fff;
  line-height: 1.5em;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.35);
`;

export const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.mb || '1.5em'};
`;

export const Light = styled(P)`
  font-weight: 200;
`;

export const Bold = styled.strong`
  font-weight: 600;
`;

export const Colored = styled.span`
  color: ${props => props.color || '#fff'};
`;

export const Link = styled.a`
  border-bottom: 1px solid ${palette.gold};
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    color: ${palette.gold};
  }
`;
