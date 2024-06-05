import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.input};
    padding: 24px;
`;

export const Header = styled.h2`
    margin: 0;
`

export const Text = styled.p`
    margin: 8px 0 0 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 24px 0 24px 0;
`

export const Input = styled.input`
  color: ${props => props.theme.colors.mainBlack};
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.input};
  width: 380px;
  height: 56px;
  padding-left: 18px;

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

export const ErrorText = styled.p`
    color: red;
    font-size: ${props => props.theme.fontSizes.xs}px;
    margin: 2px 0 0 0;
`

export const Button = styled.button`
    border-radius:  ${props => props.theme.radius.normal};
    line-height: ${props => props.theme.lineHeights.body};
    cursor: pointer;
    transition: 0.3s;
    border: none;
    background-color: ${props => props.theme.colors.button};
    color: #fff;
    width: 160px;
    padding: 16px 40px;

    &:hover {
      background-color: ${props => props.theme.colors.buttonHover};
    }
`