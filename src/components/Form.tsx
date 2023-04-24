import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be a min of 3 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .min(5, { message: "Amount must be at least 18" }),
  category: z
    .string({ required_error: "Category is required" })
    .min(3, { message: "Category is required" }),
});

interface Props {
  onFormSubmit: (data: {description: string; amount: number; category: string;}[]) => void;
}

type FormData = z.infer<typeof schema>;

const Form = ({ onFormSubmit }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: {description: string; amount: number; category: string;}[]) => {
    onFormSubmit(data);
  };

  return (
    <form
      className="mb-5"
      onSubmit={handleSubmit(onSubmit, () => console.log("error"))}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option defaultValue=""></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
