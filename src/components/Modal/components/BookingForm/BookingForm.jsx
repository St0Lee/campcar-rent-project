import { useForm } from "react-hook-form";
import { Calendar } from "./Calendar/Calendar";

import * as SC from "./BookingForm.styled"

export const BookingForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const handleDateChange = (date) => {
    setValue("date", date, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    window.location.reload();
  };

  return (
    <SC.Container>
      <SC.Header>Book your campervan now</SC.Header>
      <SC.Text>Stay connected! We are always ready to help you.</SC.Text>
      <SC.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SC.Input
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <SC.ErrorText className="error">{errors.name.message}</SC.ErrorText>}
        </div>
        <div>
          <SC.Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <SC.ErrorText className="error">{errors.email.message}</SC.ErrorText>}
        </div>
        <div>
          <SC.Input
            type="hidden"
            placeholder="Email"
            {...register("date", { required: "Date is required" })}
          />
          <Calendar handleDateChange={handleDateChange} />
          {errors.date && <SC.ErrorText className="error">{errors.date.message}</SC.ErrorText>}
        </div>
        <div>
          <SC.Input
            id="comment"
            placeholder="Comment"
            {...register("comment")} 
          />
        </div>
      </SC.Form>
      <SC.Button type="submit">Send</SC.Button >
    </SC.Container>
  );
};
