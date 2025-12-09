import { redirect } from "next/navigation";
import { sessionHelper } from "./lib/session";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default async function Home() {
  const session = await sessionHelper();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-5 text-center">
      <h2 className="text-xl font-semibold mb-2">
        Welcome, You need to sign in to access products and create orders.
      </h2>

      <p className="text-gray-600 mb-6 mt-2">
        for demo use only: guest@gmail.com with password: guest@01
      </p>
      <Button variant="outline" asChild>
        <Link href="/login">
          Sign In <ArrowUpRight size={16} />
        </Link>
      </Button>
    </div>
  );
}
