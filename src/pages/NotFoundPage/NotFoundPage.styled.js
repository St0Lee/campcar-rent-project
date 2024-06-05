import styled from "styled-components";

export const Background = styled.div`
   background-image: linear-gradient( #1a1a1a, #333333 );
   height: calc(100vh - 80px);
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 300px;
`

export const Text = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.primaryText};
    font-size: ${props => props.theme.fontSizes.xl}px;
`
export const Button = styled.button`
    font-family: var(--font-family);
    font-size: ${props => props.theme.fontSizes.m}px;
    padding: 10px 30px;
    border-radius:  ${props => props.theme.radius.normal};
    line-height: ${props => props.theme.lineHeights.body};
    cursor: pointer;
    transition: 0.3s;
    border: none;

    &:hover {
      background-color: ${props => props.theme.colors.linkHover};
    }
`