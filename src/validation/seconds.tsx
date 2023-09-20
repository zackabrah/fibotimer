import Joi from "joi";

// Joi schema for seconds input
export const secondsSchema = Joi.number()
  .min(1)
  .max(60000)
  .required()
  .messages({
    "number.base": "Input must be a number",
    "number.empty": "Input cannot be empty",
    "number.min": "Input must be greater than 0",
    "number.max": "Input must be less than 86400. 😅",
    "any.required": "Input is required",
  });

// Validate the seconds input
export function validateSeconds(input: number): string | undefined {
  const { error } = secondsSchema.validate(input, { abortEarly: true });
  return error?.message;
}
