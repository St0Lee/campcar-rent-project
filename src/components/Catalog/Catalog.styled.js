import styled from 'styled-components';

export const Container = styled.div`
    font-family: ${props => props.theme.fonts.body};
    display: flex;
    justify-content: space-between;
    margin: 50px 40px 50px 40px;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FiltersWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    line-height: ${props => props.theme.lineHeights.body};
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap:32px;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`

export const ImgWrap = styled.div`
    overflow: hidden;
    max-width: 290px;
    height: 310px;
    border-radius: 10px;
    margin-right: 24px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const ContentWrap = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: space-between;

`

export const Description = styled.p`
  margin-top: 24px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.mainBlack};
`;

export const SpecTags = styled.div`
    margin: 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

export const Tag = styled.div`
    border-radius: 100px;
    padding: 12px 18px;
    background-color: ${props => props.theme.colors.blockFeatures};
    display: flex;
    align-items: center;
`

export const CardHeaders = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

export const Header = styled.h2`
    margin: 0;
`

export const Price = styled.h2`
    margin: 0;
`

export const FavButton = styled.button`
    border: none;
    background: none;
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
`

export const CardItem = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 10px;
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

export const FavIcon = styled.svg`
    fill: none;
    width: 20px;
    height: 20px;
`

export const ShowMoreButton = styled.button`
    font-size: ${props => props.theme.fontSizes.m}px;
    border-radius:  ${props => props.theme.radius.normal};
    line-height: ${props => props.theme.lineHeights.body};
    cursor: pointer;
    transition: 0.3s;
    border: none;
    background-color: ${props => props.theme.colors.button};
    color: #fff;
    width: 165px;
    padding: 16px 40px;
    margin-top: 24px;

    &:hover {
      background-color: ${props => props.theme.colors.buttonHover};
    }
`

export const LoadMoreButton = styled.button`
    font-size: ${props => props.theme.fontSizes.m}px;
    border-radius:  ${props => props.theme.radius.normal};
    line-height: ${props => props.theme.lineHeights.body};
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid ${props => props.theme.colors.input};
    background-color: #fff;
    color: ${props => props.theme.colors.mainBlack};
    width: 145px;
    padding: 16px 32px;
    margin-top: 24px;

    &:hover {
      border-color: ${props => props.theme.colors.buttonHover};
    }
`
