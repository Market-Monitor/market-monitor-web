import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="w-11/12 mx-auto">
      <nav className="py-8 flex items-center justify-between">
        <h1 className="text-lg font-black text-gray-700">
          Market<span className="text-emerald-500">Monitor</span>
        </h1>

        <HeaderRight />
      </nav>
    </header>
  );
};

export default Header;
