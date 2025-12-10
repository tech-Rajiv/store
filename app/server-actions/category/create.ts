"use server";
import Category from "@/app/lib/db/models/category";
import connectToDatabase from "@/app/lib/mogodb";

export const createCategory = async (
  name: string,
  thumbnail?: string,
  description?: string
) => {
  try {
    await connectToDatabase();
    const exists = await Category.findOne({ name });
    if (exists) {
      throw new Error("category already exists");
    }
    const newCategory = await Category.create({
      name,
      thumbnail,
      description,
    });
    return {
      success: true,
      data: newCategory,
      message: "Category created successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      message: "Failed to create category",
    };
  }
};
