"use server";
import User from "@/app/lib/db/models/user";
import connectToDatabase from "@/app/lib/mogodb";

type UserProps = {
  name: string;
  email: string;
  password: string;
  avatar: string | null;
};
export const registerUser = async (formData: UserProps) => {
  await connectToDatabase();

  const { name, email, password, avatar } = formData;

  try {
    const exists = await User.findOne({ email: formData.email });
    // if (exists) throw new Error("User already exists");
    // const data = await User.create({
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    // });

    // const { password, ...userWithoutPassword } = data.toObject();
    // return {
    //   success: true,
    //   data: userWithoutPassword,
    //   message: "user created successfully",
    // };
    return { msg: "temp" };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message,
      message: "cannot create user",
    };
  }
};
