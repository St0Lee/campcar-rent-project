import { useState } from "react";

import * as SC from "./Calendar.styled";

export const Calendar = ({ handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const onDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    handleDateChange(newDate);
  };

  return (
    <SC.Container>
      <SC.Input
        id="datePicker"
        type="date"
        value={selectedDate}
        onChange={onDateChange}
      />
    </SC.Container>
  );
};
