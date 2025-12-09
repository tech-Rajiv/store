import LoginPage from "./LoginPage";

function page() {
  return (
    <div className="wrapper p-5">
      <div className="flex flex-col gap-4 p-5  max-w-sm mx-auto bg-white shadow rounded-xl mt-5">
        <h2 className="text-xl font-semibold text-center">Sign In</h2>
        <p className="text-gray-600 text-center mb-4">
          Please signin with your email and password
        </p>

        <LoginPage />
      </div>
    </div>
  );
}

export default page;
