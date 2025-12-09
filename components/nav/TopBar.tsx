import SignInOrOutBtns from "./SignInOrOutBtns";

function TopBar() {
  return (
    <div className="wrapper shadow">
      <div className="flex max-w-7xl mx-auto justify-between  p-3 sm:py-5 items-center">
        <h2 className="text-xl font-bold">TopBar</h2>
        <div className="btns">
          <SignInOrOutBtns />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
