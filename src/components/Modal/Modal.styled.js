import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${p => p.theme.colors.backdropBackground};
  font-family: ${props => props.theme.fonts.body};
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${p => p.theme.colors.modalBackground};
  padding: 40px;
  border-radius: 20px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;
`;

export const Header = styled.h2`
  margin: 0;
`

export const Rating = styled.p`
  display: flex;
  text-decoration: underline;
  gap: 8px;
  margin: 0;
`

export const Location = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`

export const Icon = styled.svg`
  fill: none;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

export const CardItem = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 16px;
`

export const Price = styled.h2`
  margin: 0;
  margin-top: 16px;
`

export const ImgWrap = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  margin-top: 24px;
`;

export const Image = styled.img`
  border-radius: 10px;
  min-width: 290px;
  height: 310px;
  object-fit: cover;
  max-width: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  margin: 24px 0 44px 0;
  line-height: 150%;
  color: ${(props) => props.theme.colors.mainBlack};
`;

export const FeaturesBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  font-weight: 600;
  margin-right: 40px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -28px;
    width: 100%;
    height: 6px;
    background-color: ${props => props.active ? props.theme.colors.button : 'transparent'};
    transition: 0.3s;
  }
`;


export const ReviewsBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  font-weight: 600;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -28px;
    width: 100%;
    height: 6px;
    background-color: ${props => props.active ? props.theme.colors.button : 'transparent'};
    transition: 0.3s;
  }
`;


export const Divider = styled.div`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.input};
  margin: 24px 0 44px;
`;
