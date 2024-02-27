import "./card.scss";
import cardImage from "../../assets/card-image.png";
import Button from "../button/Button";
import data from "../../utils/cardData.json";

const Card = () => {
  console.log(data);
  return (
    <section className="card-section">
      <h2>Related deals you might like for</h2>
      {data &&
        data?.map((item) => {
          return(
          <div className="detail-main-container" key={item.id}>
            <div className="card-container">
              <img src={cardImage} alt="card-image" className="card-img" />
              <div className="offer-container">
                <span>{item.discount}</span>
                <span>Limited time</span>
              </div>
              <h6>{item.heading}</h6>
              <p>Computer Modern classic with wix support</p>
              <div className="price-container">
                <span>{item.discount_price}</span>
                <span>{item.original_price}</span>
                <span>({item.discount})</span>
              </div>
              <Button text="View Deal" btn="btn-2" />
            </div>
          </div>
          )
        })}
    </section>
  );
};

export default Card;

{
  /* <div className="card-container">
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
<Button text="View Deal" btn="btn-2"/>
</div>
{/* 2 */
}
{
  /* <div className="card-container">
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
<Button text="View Deal" btn="btn-2"/>
</div>
{/* 1 */
}
{
  /* <div className="card-container">
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
<Button text="View Deal" btn="btn-2"/>
</div> */
}
{
  /* 1 */
}
{
  /* <div className="card-container">
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
<Button text="View Deal" btn="btn-2"/>
</div> */
}
// </div> */} */}
