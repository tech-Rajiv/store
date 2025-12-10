"use client";
import { signIn } from "next-auth/react";

function SignInGoogleBtn() {
  return (
    <button
      type="button"
      onClick={() =>
        signIn("google", { callbackUrl: "/", prompt: "select_account" })
      }
      className="
        w-full px-4 py-2
        flex items-center justify-center gap-2
        rounded-lg border border-gray-300 
        bg-white
        hover:bg-gray-50 
      "
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 533.5 544.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4285F4"
          d="M533.5 278.4c0-18.5-1.5-36.3-4.3-53.5H272v101h146c-6.3 34-25 63-53.3 82.3v68h86c50-46 82.8-114 82.8-197.8z"
        />
        <path
          fill="#34A853"
          d="M272 544.3c71.8 0 132-23.7 176-64.3l-86-68c-24 16-55 25.3-90 25.3-69 0-128-46.7-149-110.5h-89v69.3C77 482.5 167 544.3 272 544.3z"
        />
        <path
          fill="#FBBC05"
          d="M123 326.8c-10-30-10-62.3 0-92.3v-69.2h-89C14 225.6 0 271.7 0 320c0 48.3 14 94.4 34 134.7l89-69.2z"
        />
        <path
          fill="#EA4335"
          d="M272 108c37 0 70 12.8 96 38l72-72C404 27.6 345 0 272 0 167 0 77 61.7 34 155.3l89 69.2C144 154.7 203 108 272 108z"
        />
      </svg>
      Sign in with Google
    </button>
  );
}

export default SignInGoogleBtn;
