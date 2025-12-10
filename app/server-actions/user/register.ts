"use server";
import User from "@/app/lib/db/models/user";
import connectToDatabase from "@/app/lib/mogodb";
import bcrypt from "bcryptjs";
type UserProps = {
  name: string;
  email: string;
  password: string;
  avatar: string | null;
};
export const registerUser = async (formData: UserProps) => {
  await connectToDatabase();

  try {
    const { name, email, password, avatar } = formData;
    const exists = await User.findOne({ email: formData.email });
    if (exists) throw new Error("User already exists");

    const hashedPass = await bcrypt.hash(password, 10);
    console.log("hashedPass: ", hashedPass);
    const data = await User.create({
      name,
      email,
      password: hashedPass,
    });

    const { password: _, ...userWithoutPassword } = data.toObject();
    return {
      success: true,
      data: userWithoutPassword,
      message: "user created successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message,
      message: "cannot create user",
    };
  }
};
