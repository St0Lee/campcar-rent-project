import { BookingForm } from "../BookingForm/BookingForm";
import { Rating } from "./Rating/Rating";

import * as SC from "./Reviews.styled";

export const Reviews = ({ reviews }) => {
  return (
    <SC.Container>
      <SC.ReviewList>
        {reviews?.map(({ reviewer_name, reviewer_rating, comment }, i) => (
          <SC.ReviewItem key={i}>
            <SC.ReviewerInfo>
              <SC.Circle>{reviewer_name.charAt(0)}</SC.Circle>
              <SC.InfoItem>
                <SC.Name>{reviewer_name}</SC.Name>
                <Rating rating={reviewer_rating} />
              </SC.InfoItem>
              </SC.ReviewerInfo>
                <SC.Comment>{comment}</SC.Comment>
            </SC.ReviewItem>
        ))}
      </SC.ReviewList>
      <BookingForm />
    </SC.Container>
  );
};
