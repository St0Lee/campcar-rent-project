import styled from 'styled-components';

export const Container = styled.div`

`;

export const Input = styled.input`
  color: ${props => props.theme.colors.mainBlack};
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.input};
  width: 364px;
  height: 56px;
  padding-left: 18px;
  padding-right: 18px;

  &:focus {
    outline: none;
    border-color: transparent;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: ${props => props.theme.colors.mainBlack};
  }
`;