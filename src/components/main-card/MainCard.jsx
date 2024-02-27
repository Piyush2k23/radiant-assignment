import "./mainCard.scss";
import cardImage from "../../assets/card-image.png";
import { IoIosArrowDown } from "react-icons/io";
import { SlTrophy } from "react-icons/sl";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../button/Button";
import MainCardCDK from "../main-card-cdk/MainCardCDK";
import data from "../../utils/data.json";

const MainCard = () => {
  console.log(data);

  return (
    <section>
      { data && data.map(( item ) => {
        return(
        <div className="main-card-container" key={ item.id }>
    
          { item.choice && <div className="best-container">
            <SlTrophy className="trophy-icon" />
            <span>{ item.choice }</span>
          </div>
          }
          <div className="number-container">
            <span>{ item.id }</span>
          </div>
          <div className="left-container">
            <img src={ cardImage } alt="card-image" />
            <span>{ item.imageText }</span>
          </div>
          <div className="middle-container">
            <p>
              <span>{ item.paragraph.heading }</span>
              {item.paragraph.data}
            </p>
            <h5>Main highlights</h5>
            <p className="second-parg">
             { item.highlights }
            </p>
            <div className="show">
              <span>Show more</span>
              <IoIosArrowDown className="down-arrow" />
            </div>
          </div>
          <div className="right-container">
            <div className="rating-container">
              <span>{ item.rating_point }</span>
              <span>Exceptional</span>
              <div className="star-rating">{ item.ratings }</div>
            </div>
            <Button text="View" btn="btn-1" />
          </div>
        </div>
        ) 
      })}
      <MainCardCDK />
    </section>
  );
};

export default MainCard;

// <div className="main-card-container">
// <div className="best-container">
//   <SlTrophy className="trophy-icon" />
//   <span>Best Choice</span>
// </div>
// <div className="number-container">
//   <span>1</span>
// </div>
// <div className="left-container">
//   <img src={cardImage} alt="card-image" />
//   <span>Builder 1</span>
// </div>
// <div className="middle-container">
//   <p>
//     <span>WixPro 72-Inch Responsive Website Builder- </span>
//     Comprehensive Digital Platform Creation Tool, Streamlined Design
//     Interface for Professional Websites and Online Stores (Black/Blue)
//   </p>
//   <h5>Main highlights</h5>
//   <p className="second-parg">
//     [What You Get]: Receive the WixPro website builder suite, access to
//     premium design templates, an extensive library of widgets and apps,
//     and detailed step-by-step guides.
//   </p>
//   <div className="show">
//     <span>Show more</span>
//     <IoIosArrowDown className="down-arrow" />
//   </div>
// </div>
// <div className="right-container">
//   <div className="rating-container">
//     <span>9.8</span>
//     <span>Exceptional</span>
//     <div className="star-rating">★★★★★</div>
//   </div>
//   <Button text="View" btn="btn-1"/>
// </div>
// </div>
// {/* 1 */}
// <div className="main-card-container">
// <div className="best-container">
//   <SlTrophy className="trophy-icon" />
//   <span>Best Value</span>
// </div>
// <div className="number-container">
//   <span>2</span>
// </div>

// <div className="left-container">
//   <img src={cardImage} alt="card-image" />
//   <span>Builder 1</span>
// </div>
// <div className="middle-container">
//   <p>
//     <span>WixPro 72-Inch Responsive Website Builder- </span>
//     Comprehensive Digital Platform Creation Tool, Streamlined Design
//     Interface for Professional Websites and Online Stores (Black/Blue)
//   </p>
//   <h5>Main highlights</h5>
//   <p className="second-parg">
//     [What You Get]: Receive the WixPro website builder suite, access to
//     premium design templates, an extensive library of widgets and apps,
//     and detailed step-by-step guides.
//   </p>
//   <div className="show">
//     <span>Show more</span>
//     <IoIosArrowDown className="down-arrow" />
//   </div>
// </div>
// <div className="right-container">
//   <div className="rating-container">
//     <span>9.8</span>
//     <span>Exceptional</span>
//     {/* <div className="star-rating">★★★★<IoIosStarHalf className="star-half-icon"/></div> */}
//     <div className="star-rating">★★★★</div>
//   </div>
//   <Button text="View Deal" btn="btn-1"/>
// </div>
// </div>
// {/* 2 */}
// <div className="main-card-container">
// <div className="number-container">
//   <span>3</span>
// </div>

// <div className="left-container">
//   <img src={cardImage} alt="card-image" />
//   <span>Builder 1</span>
// </div>
// <div className="middle-container">
//   <p>
//     <span>WixPro 72-Inch Responsive Website Builder- </span>
//     Comprehensive Digital Platform Creation Tool, Streamlined Design
//     Interface for Professional Websites and Online Stores (Black/Blue)
//   </p>
//   <h5>Main highlights</h5>
//   <p className="second-parg">
//     [What You Get]: Receive the WixPro website builder suite, access to
//     premium design templates, an extensive library of widgets and apps,
//     and detailed step-by-step guides.
//   </p>
//   <div className="show">
//     <span>Show more</span>
//     <IoIosArrowDown className="down-arrow" />
//   </div>
// </div>
// <div className="right-container">
//   <div className="rating-container">
//     <span>9.8</span>
//     <span>Exceptional</span>
//     <div className="star-rating">★★★★</div>
//   </div>
//   <Button text="View Deal" btn="btn-1"/>
// </div>
// </div>
// {/* 3 */}
