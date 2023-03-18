import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="w-11/12 mx-auto py-4 flex items-center justify-between">
        <h1 className="text-lg font-black text-gray-700">
          Market<span className="text-emerald-500">Monitor</span>
        </h1>

        <HeaderRight />
      </nav>
    </header>
  );
};

export default Header;
