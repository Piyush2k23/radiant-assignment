import "./heroSection.scss";
import { CiCircleCheck } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <main className="hero-main-container">
      <h1>Best Website builders in the US</h1>
      <div className="informational-container">
        <div className="header-line-top"/>
        <div className="information">
          <div className="information-left">
            <div className="update">
              <CiCircleCheck className="icon"/>
              <span className="last">Last Update - </span>
              <span className="date">February 27, 2024</span>
            </div>
            <div className="advertising">
              <div className="logo-advertising"><span>i</span></div>
              <span className="advertising-text">Advertising Disclosure</span>
            </div>
          </div>
          <div className="information-right">
              <span>Top Relevant</span>
              <MdKeyboardArrowDown className="arrow-down-icon"/>
            </div>
        </div>    
        <div className="header-line-bottom"/> 
      </div>
      <div className="features-container">
        <button>Tools</button>
        <button>AWS Builder</button>
        <button>Start Build</button>
        <button>Build Supplies</button>
        <button>Tooling</button>
        <button>BlueHosting</button>
      </div>
      <div className="breadCrumbs">
        <span>Home</span>
        <IoIosArrowForward className="arrowForward-icon"/>
        <span>Hosting for all</span>
        <IoIosArrowForward className="arrowForward-icon"/>
        <span>Hosting</span>
        <IoIosArrowForward className="arrowForward-icon"/>
        <span>Hosting5</span>
        <IoIosArrowForward className="arrowForward-icon"/>
        <span>Hosting6</span>
      </div>
    </main>
  );
};

export default HeroSection;
