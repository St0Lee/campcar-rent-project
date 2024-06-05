import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 24px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 16px;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.blockFeatures};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.ml}px;
  color: ${(props) => props.theme.colors.button};
`;

export const ReviewerInfo = styled.div`
    display: flex;
`;

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const Name = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 133%;
    margin: 0;
`

export const Comment = styled.p`
    line-height: 150%;
    color: ${(props) => props.theme.colors.text};
`
