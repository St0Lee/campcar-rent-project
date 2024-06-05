import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.m}px;
  color: rgba(16, 24, 40, 0.6);
`;

export const Header = styled.h3`
  color: #475467;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.m}px;
  margin: 0 0 32px 0;
`;

export const SubHeader = styled.h2`
  color: ${(props) => props.theme.colors.mainBlack};
  margin: 0 0 32px 0;
`;

export const CheckboxWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.mainBlack};
  line-height: ${(props) => props.theme.lineHeights.body};
`;

export const CheckboxItem = styled.label`
  cursor: pointer;
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid; 
  transition: border-color 0.3s ease;
  border-color: ${(props) => (props.checked ? props.theme.colors.button : props.theme.colors.input)};
  border-radius: 10px;
  
  `;

export const Input = styled.input`
  display: none;
`;

export const Icon = styled.svg`
    fill: none;
    width: 32px;
    height: 32px;
    padding-bottom: 10px;
`

export const Divider = styled.div`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.input};
  margin: 2px 0 30px ;
`;