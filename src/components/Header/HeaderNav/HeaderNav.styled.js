import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    background-image: linear-gradient( #1a1a1a, #333333 );
    gap: 300px;
    height: 50px;
    `;

export const ListElements = styled.li`
`;

export const NavLinkStyled= styled(NavLink)`
    font-size: ${props => props.theme.fontSizes.ml}px;
    text-decoration: none;
    color: ${props => props.theme.colors.primaryText};
    text-shadow: ${props => props.theme.shadows.textShadow};
    transition: 0.3s;
  
  &:hover{
    color: ${props => props.theme.colors.linkHover};
  }
`;
