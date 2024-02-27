import "./featuresSectionCard.scss";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import cardImage from "../../assets/card-image.png";
import Button from "../button/Button";

const MainCardCDK = () => {
  return (
    <div className="main-card-cdk-container">
      <div className="number-container">
        <span>4</span>
      </div>
      <div className="left-container">
        <img src={cardImage} alt="card-image" />
        <span>CDK</span>
      </div>
      <div className="middle-container">
        <p>
          <span>CDK Responsive Builder: </span>
          An extensive library of widgets and apps, and detailed step-by-step
          guides
        </p>
        <div className="percentage">26% Off</div>
        <h5>Main highlights</h5>
        <div className="highlights-container">
          <div className="inner-highlights-container">
            <span className="number">9.9</span>
            <span className="main-highlights-text">Building Responsive</span>
          </div>
          <div className="inner-highlights-container">
            <span className="number">8.9</span>
            <span className="main-highlights-text">Cool</span>
          </div>
          <div className="inner-highlights-container">
            <span className="number">8.9</span>
            <span className="main-highlights-text">Docs</span>
          </div>
        </div>
        <div className="check-container">
          <h5>Why we love it</h5>
          <div className="inner-check-container">
            <FaRegCircleCheck />
            <span>Documentation</span>
          </div>
          <div className="inner-check-container">
            <FaRegCircleCheck />
            <span>Easy Use</span>
          </div>
          <div className="inner-check-container">
            <FaRegCircleCheck />
            <span>Out of box</span>
          </div>
        </div>
        <div className="show">
          <span>Show more</span>
          <IoIosArrowDown className="down-arrow" />
        </div>
      </div>
      <div className="right-container">
        <div className="rating-container">
          <span>9.8</span>
          <span>Exceptional</span>
          <div className="star-rating">★★★★☆</div>
        </div>
        <Button text="View" btn="btn-1" />
      </div>
    </div>
  );
};

export default MainCardCDK;
