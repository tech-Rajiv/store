"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { signupZodData } from "../signup/ZodValidations";
import ErrorValidation from "./ErrorValidation";
import { Button } from "@/components/ui/button";
import BottomRedirect from "./BottomRedirect";
import { registerUser } from "@/app/server-actions/user/register";

function SigninForm() {
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(null);

    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const password = form.get("password")?.toString() || "";
    const avatar = "";

    const parsed = signupZodData.safeParse({ email, password, name });

    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors;
      const firstError =
        err.email?.[0] ||
        err.password?.[0] ||
        err.name?.[0] ||
        "Fill the feilds correctly";

      setErrors(firstError);
      setIsLoading(false);
      return;
    }
    const res = await registerUser({ name, email, password, avatar });
    console.log("res : ", res);

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleLogin} className=" flex flex-col gap-4">
      <div>
        <Label>Name</Label>
        <Input
          name="name"
          onChange={() => setErrors(null)}
          placeholder="name"
          className="mt-2"
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          name="email"
          onChange={() => setErrors(null)}
          placeholder="email"
          className="mt-2"
        />
      </div>
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          onChange={() => setErrors(null)}
          name="password"
          className="mt-2"
        />
      </div>

      <ErrorValidation errors={errors} />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </Button>
      <BottomRedirect content="already a user? Login" url={"/login"} />
    </form>
  );
}

export default SigninForm;
