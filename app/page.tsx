import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "./lib/auth";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import { sessionHelper } from "./lib/session";

export default async function Home() {
  const session = await sessionHelper();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="bg-gray-50 sm:p-5 p-3 min-h-screen">
      <Dashboard session={session} />
    </div>
  );
}
