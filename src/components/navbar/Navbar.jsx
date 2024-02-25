import "./navbar.scss";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="search-container">
            <div className="search"><CiSearch /></div>
            <input type="text" />
        </div>
        <nav>
            <ul>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Website Builders</a>
                </li>
                <li>
                  <a href="#">Today's deals</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;