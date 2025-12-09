import SignInOrOutBtns from "./SignInOrOutBtns";

function TopBar() {
  return (
    <div className="flex shadow justify-between p-3 sm:p-5 items-center">
      <h2 className="text-xl font-bold">TopBar</h2>
      <div className="btns">
        <SignInOrOutBtns />
      </div>
    </div>
  );
}

export default TopBar;
