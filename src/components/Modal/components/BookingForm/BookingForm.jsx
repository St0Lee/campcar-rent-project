 import { useForm } from "react-hook-form";
import { Calendar } from "./Calendar/Calendar";

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
    <>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="hidden"
            {...register("date", { required: "Date is required" })}
          />
          <Calendar handleDateChange={handleDateChange} />
          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>
        <div>
          <input
            id="comment"
            {...register("comment")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
