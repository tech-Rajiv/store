import { getServerSession } from "next-auth";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import { sessionHelper } from "@/app/lib/session";

async function SignInOrOutBtns() {
  const session = await sessionHelper();
  return <div>{session ? <SignOutBtn /> : <SignInBtn />}</div>;
}

export default SignInOrOutBtns;
