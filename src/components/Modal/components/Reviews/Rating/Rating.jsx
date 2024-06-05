import * as SC from "./Rating.styled"

export const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<SC.Star key={i} active={i <= rating}>★</SC.Star>);
    }
    return <SC.Stars>{stars}</SC.Stars>;
  };