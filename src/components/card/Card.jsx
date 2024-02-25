import "./card.scss";
import cardImage from "../../assets/card-image.png";

const Card = () => {
  return (
    <>
     <h2>Related deals you might like for</h2>
    <div className="card-container">
        <img src={cardImage} alt="card-image" className="card-img"/>
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
    </>
  )
}

export default Card;