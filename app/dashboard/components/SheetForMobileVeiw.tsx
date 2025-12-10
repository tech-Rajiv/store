import SignInOrOutBtns from "@/components/nav/SignInOrOutBtns";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
function SheetForMobileVeiw() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Logo</SheetTitle>
          <SheetDescription className="flex flex-col gap-5 mt-5 text-md">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Admin</Link>
            <Link href={"/"}>Orders</Link>
            <Link href={"/dashboard/create-category"}>Create new category</Link>
            <Link href={"/dashboard/create-category"}>Settings</Link>
            <SignInOrOutBtns />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SheetForMobileVeiw;
