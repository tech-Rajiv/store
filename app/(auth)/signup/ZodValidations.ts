import z from "zod";
export const signupZodData = z.object({
  name: z.string().min(3, "Name should be atleast of 3 character"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be atleast of 6 characters."),
});
