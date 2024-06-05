import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    font-size: ${props => props.theme.fontSizes.m}px;
    color: rgba(16, 24, 40, 0.6);
`
export const Icon = styled.svg`
  width: 18px;
  height: 20px;
  fill: none;
  position: absolute;
  margin: 52px 0 0 20px;
`;

export const Input = styled.input`
  color: ${props => props.theme.colors.mainBlack};
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.input};
  width: 360px;
  height: 56px;
  padding-left: 58px;

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