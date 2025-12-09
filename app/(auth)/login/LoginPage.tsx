"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../../../components/ui/label";
import { signIn } from "next-auth/react";
import SignInGoogleBtn from "./SignInGoogleBtn";
import ErrorValidation from "./ErrorValidation";
import { loginZodData } from "./ZodValidations";
import { useState } from "react";

export default function LoginPage() {
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(null);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    const parsed = loginZodData.safeParse({ email, password });

    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors;
      const firstError =
        err.email?.[0] || err.password?.[0] || "Invalid credentials";

      setErrors(firstError);
      setIsLoading(false);
      return;
    }

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className=" flex flex-col gap-4">
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
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>

      <SignInGoogleBtn />
    </form>
  );
}
