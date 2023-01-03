import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-bg bg-violet-500 text-violet-50 ">
      <div className="navbar container mx-auto flex justify-between items-center h-20 ">
        <div className="left">
          <Link to="/" className="logo text-xl font-semibold">
            tech<span className="text-orange-500">Alpha</span>
          </Link>
        </div>
        <div className="right flex gap-5 items-center ">
          <Link to="/" className="nav-link duration-300">
            Home
          </Link>
          <Link to="products" className="nav-link  duration-300">
            Products
          </Link>
          <Link to="cart">
            <span className="cart-icon flex items-center relative">
              <BsCart3 />
              <span className="cart-counter absolute -top-3 -right-3 text-xs flex items-center justify-center bg-orange-500 w-5 h-5 rounded-full font-medium">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
