import "./footer.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <section>
        <h4>CATEGORIES</h4>
        <ul>
          <li>
            <a href="#">Web Builder</a>
          </li>
          <li>
            <a href="#">Hosting</a>
          </li>
          <li>
            <a href="#">Data Center</a>
          </li>
          <li>
            <a href="#">Robotic-Automation</a>
          </li>
        </ul>
      </section>
      <section>
        <h4>CONTACT</h4>
        <ul>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms Of Service</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </section>
      <div className="country">
        <span>United States</span>
        <MdKeyboardArrowDown className="country-arrow"/>
      </div>
    </div>
  );
};

export default Footer;
