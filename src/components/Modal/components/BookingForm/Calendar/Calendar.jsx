import { useState } from "react";

export const Calendar = ({ handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const onDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    handleDateChange(newDate);
  };

  return (
    <div>
      <input
        id="datePicker"
        type="date"
        value={selectedDate}
        onChange={onDateChange}
      />
    </div>
  );
};
