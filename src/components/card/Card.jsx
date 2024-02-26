import "./card.scss";
import cardImage from "../../assets/card-image.png";
import Button from "../button/Button";

const Card = () => {
  return (
    <>
      <h2>Related deals you might like for</h2>
      <div className="detail-main-container">
        <div className="card-container">
          <img src={cardImage} alt="card-image" className="card-img" />
          <div className="offer-container">
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h6>Webbuilder1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% Off)</span>
          </div>
          <button className="btn">View Deal</button>
        </div>
        {/* 1 */}
        <div className="card-container">
          <img src={cardImage} alt="card-image" className="card-img" />
          <div className="offer-container">
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h6>Webbuilder1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% Off)</span>
          </div>
          <button className="btn">View Deal</button>
        </div>
        {/* 2 */}
        <div className="card-container">
          <img src={cardImage} alt="card-image" className="card-img" />
          <div className="offer-container">
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h6>Webbuilder1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% Off)</span>
          </div>
          <button className="btn">View Deal</button>
        </div>
        {/* 1 */}
        <div className="card-container">
          <img src={cardImage} alt="card-image" className="card-img" />
          <div className="offer-container">
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h6>Webbuilder1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% Off)</span>
          </div>
          <button className="btn">View Deal</button>
        </div>
        {/* 1 */}
        <div className="card-container">
          <img src={cardImage} alt="card-image" className="card-img" />
          <div className="offer-container">
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h6>Webbuilder1</h6>
          <p>Computer Modern classic with wix support</p>
          <div className="price-container">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% Off)</span>
          </div>
          <Button text="View Deal" />
        </div>
      </div>
    </>
  );
};

export default Card;
