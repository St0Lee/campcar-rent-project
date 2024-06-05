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

export const RadioWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.mainBlack};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.input};
  transition: 0.3s;
  border-radius: 10px;
  &:hover{
    border-color: ${(props) => props.theme.colors.button};
  }
`;

export const RadioText = styled.span`
  margin-top: 5px;
`;

export const Icon = styled.svg`
  fill: none;
  width: 32px;
  height: 32px;
  padding-bottom: 10px;
`;

export const Divider = styled.div`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.input};
  margin: 2px 0 30px;
`;

export const Button = styled.button`
  width: 175px;
  height: 56px;
  border: none;
  border-radius: ${(props) => props.theme.radius.normal};;
  color: #fff;
  background-color: ${(props) => props.theme.colors.button};
  cursor: pointer;
  transition: 0.3s;
  margin-top: 70px;

  &:hover{
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

`;