import { BookingForm } from "../BookingForm/BookingForm";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map(({ reviewer_name, reviewer_rating, comment }, i) => (
          <li key={i}>
            <p>{reviewer_name}</p>
            <p>{reviewer_rating}</p>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};
