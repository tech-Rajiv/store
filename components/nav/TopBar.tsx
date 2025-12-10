import Link from "next/link";
import SignInOrOutBtns from "./SignInOrOutBtns";
import SheetForMobileVeiw from "@/app/dashboard/components/SheetForMobileVeiw";

function TopBar() {
  return (
    <div className="wrapper border-b">
      <div className="flex max-w-7xl mx-auto justify-between  p-5 items-center">
        <h2 className="text-xl font-bold">
          <Link href={"/"}>Logo</Link>
        </h2>
        <div className="btns">
          <div className="deskVeiw hidden sm:flex gap-5 items-center">
            <div className="lists">Orders</div>
            <div className="lists">Settings</div>
            <SignInOrOutBtns />
          </div>

          <div className="responsiveMobile block sm:hidden">
            <SheetForMobileVeiw />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
