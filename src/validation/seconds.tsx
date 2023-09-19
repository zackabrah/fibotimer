import Joi from "joi";

export const secondsSchema = Joi.number()
  .min(1)
  .max(60000)
  .required()
  .messages({
    "number.base": "Input must be a number",
    "number.empty": "Input cannot be empty",
    "number.min": "Input must be greater than 0",
    "number.max":
      "Input must be less than 86400. Do you really want to wait a whole day for an update? 😅",
    "any.required": "Input is required",
  });

export function validateSeconds(input: number): string | undefined {
  const { error } = secondsSchema.validate(input, { abortEarly: true });
  return error?.message;
}
