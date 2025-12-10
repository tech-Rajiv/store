import z, { string } from "zod";
export const categoryZodValidation = z.object({
  name: z
    .string()
    .min(1, "Category name is required.")
    .min(3, "name length should be at least 3 charcters"),
  thumbnail: string() || null,
  description: string() || null,
});
