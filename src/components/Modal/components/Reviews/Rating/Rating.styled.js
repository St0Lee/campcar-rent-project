import styled from 'styled-components';

export const Stars = styled.div`
`;

export const Star = styled.span`
  font-size: 20px;
  color: ${props => (props.active ? '#FFC531' : '#ccc')};
  margin: 0;
  margin-right: 4px;
`;