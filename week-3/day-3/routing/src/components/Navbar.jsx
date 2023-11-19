import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex py-2 items-center gap-12 bg-gray-400 rounded-b-md text-white font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
