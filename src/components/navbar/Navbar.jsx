import "navbar.scss";

const Navbar = () => {
  return (
    <div>
        <div>
            <input type="text" />
        </div>
        <nav>
            <ul>
                <li>
                  <Link to="#">Categories</Link>
                </li>
                <li>
                  <Link to="#">Website Builders</Link>
                </li>
                <li>
                  <Link to="#">Today's deals</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;