import React from "react";
import SigninForm from "../components/SigninForm";

function page() {
  return (
    <div className="wrapper p-5">
      <div className="flex flex-col gap-4 p-5  max-w-sm mx-auto bg-white shadow rounded-xl mt-5">
        <h2 className="text-xl font-semibold text-center">Sign Up</h2>
        <p className="text-gray-600 text-center mb-4">
          Please signup with your name, email and password
        </p>

        <SigninForm />
      </div>
    </div>
  );
}

export default page;
