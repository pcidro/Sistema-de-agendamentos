import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="border-b-2 border-[#818181] w-full">
      <header>
        <img className="w-62  object-contain" src={Logo} alt="" />
      </header>
    </div>
  );
};

export default Header;
