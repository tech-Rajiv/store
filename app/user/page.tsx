import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "../lib/auth";

export default async function () {
  const session = await getServerSession(AUTH_OPTIONS);
  console.log(" session : ", session);
  return <h1>{JSON.stringify(session)}</h1>;
}
