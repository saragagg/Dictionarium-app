import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <h1 className="text-5xl md:text-7xl ld:text-9xl text-center text-blue-900 font-bold hover:text-blue-900/75 hover:underline py-10">
        Dictionarium.
      </h1>
    </Link>
  );
};

export default Header;
