import styled from 'styled-components';

export default styled.section`
  display: flex;
  max-width: 1200px;
  margin: 4em auto;
  padding: 0 30px;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'space-between'};
  flex-wrap: wrap;

  > * {
    flex: 1 1 100%;
  }
`;
