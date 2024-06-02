import styled from "styled-components";
import background from "../../pictures/home-background.jpeg";

export const Background = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${background});
    filter: blur(10px);
    z-index: -1;
    background-size: cover;
    background-position: center;
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  color: ${props => props.theme.colors.primaryText};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 300px;
  text-align: center;
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxl}px;
`;

export const Text = styled.p`
  width: 50vw;
  font-size: ${props => props.theme.fontSizes.l}px;
  line-height: ${props => props.theme.lineHeights.body};
`;
