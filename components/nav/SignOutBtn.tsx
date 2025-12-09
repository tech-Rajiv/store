"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

function SignOutBtn() {
  return (
    <Button variant={"destructive"} onClick={() => signOut()}>
      SignOutBtn
    </Button>
  );
}

export default SignOutBtn;
