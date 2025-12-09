import z, { email } from "zod";
export const loginZodData = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
