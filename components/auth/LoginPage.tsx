"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Label } from "../ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleLogin() {
    setLoading(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex flex-col gap-4 p-5 sm:p-8 bg-white max-w-md mx-auto shadow rounded-xl">
      <div className="head">
        <h2 className="font-semibold text-xl mb-1 text-center">SignIn</h2>
        <p className="mb-3 text-gray-600 text-center">
          please signin with your email and password
        </p>
      </div>
      <div className="inp">
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          placeholder="username"
          value={email}
          className="mt-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inp">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2"
        />
      </div>

      <Button disabled={loading} onClick={handleLogin}>
        {loading ? "please wait..." : "Sign In"}
      </Button>
      <div className="links text-center">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="underline hover:text-blue-600 cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
