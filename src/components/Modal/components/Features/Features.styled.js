import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 24px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const FeaturesWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 8px;
`

export const FeaturesList = styled.ul`
    list-style: none;
    border-radius: 100px;
    padding: 12px 18px;
    background-color: ${props => props.theme.colors.blockFeatures};
    display: flex;
    align-items: center;
`

export const Icon = styled.svg`
    fill: none;
    width: 20px;
    height: 20px;
    margin-right: 8px;
`

export const Header = styled.h2`
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 24px;
`

export const DetailsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 14px;
    font-size: 18px;
    line-height: 133%;
`

export const DetailsItem = styled.li`  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Divider = styled.div`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.input};
  margin: 0 0 0 24px;
`;

export const DetailsText = styled.div`
    margin: 0;
`;

