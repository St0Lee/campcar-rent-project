import { BookingForm } from "../BookingForm/BookingForm";

export const Features = ({ advert }) => {
  return (
    <div>
      <div>
        {Object.entries(advert.details).map(([key, value]) => (
          <ul>
            <li key={key}>{key}: {value}</li>
          </ul>
        ))}
      </div>
      <div>
        <h2>Vehicle details</h2>
        <ul>
          <li>Form: {advert.form}</li>
          <li>Length: {advert.length}</li>
          <li>Width: {advert.width}</li>
          <li>Height: {advert.height}</li>
          <li>Tank: {advert.tank}</li>
          <li>Consumption: {advert.consumption}</li>
        </ul>
      </div>
      <BookingForm />
    </div>
  );
};