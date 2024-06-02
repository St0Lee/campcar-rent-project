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
