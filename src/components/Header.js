import Logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50">
            <img className="w-40" src={Logo} alt="Netflix Logo" />
        </div>
    );
};

export default Header;
