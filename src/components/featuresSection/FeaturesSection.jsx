import "./featuresSection.scss";
import cardImage from "../../assets/card-image.png";
import { IoIosArrowDown } from "react-icons/io";
import { SlTrophy } from "react-icons/sl";
import Button from "../button/Button";
import FeatureSectionCard from "../featuresSectionCard/FeaturesSectionCard";
import data from "../../utils/data.json";

const MainCard = () => {
  return (
    <section>
      {data &&
        data.map((item) => {
          return (
            <div className="main-card-container" key={item.id}>
              {item.choice && (
                <div className="best-container">
                  <SlTrophy className="trophy-icon" />
                  <span>{item.choice}</span>
                </div>
              )}
              <div className="number-container">
                <span>{item.id}</span>
              </div>
              <div className="left-container">
                <img src={cardImage} alt="card-image" />
                <span>{item.imageText}</span>
              </div>
              <div className="middle-container">
                <p>
                  <span>{item.paragraph.heading}</span>
                  {item.paragraph.data}
                </p>
                <h5>Main highlights</h5>
                <p className="second-paragraph">{item.highlights}</p>
                <div className="show">
                  <span>Show more</span>
                  <IoIosArrowDown className="down-arrow" />
                </div>
              </div>
              <div className="right-container">
                <div className="rating-container">
                  <span>{item.rating_point}</span>
                  <span>Exceptional</span>
                  <div className="star-rating">{item.rating}</div>
                </div>
                <Button text="View" btn="btn-1" />
              </div>
            </div>
          );
        })}
      <FeatureSectionCard />
    </section>
  );
};

export default MainCard;
