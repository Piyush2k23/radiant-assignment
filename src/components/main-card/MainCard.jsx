import "./mainCard.scss";
import cardImage from "../../assets/card-image.png";
import { IoIosArrowDown } from "react-icons/io";

const MainCard = () => {
  return (
    <div className="main-container">
        <div className="left-container">
            <img src={cardImage} alt="card-image" />
            <span>Builder 1</span>
        </div>
        <div className="middle-container">
            <p><span>WixPro 72-Inch Responsive Website Builder- </span>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
           </p>
           <h5>Main highlights</h5>
           <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            <div className="show"><span>Show More</span><IoIosArrowDown /></div>
        </div>
        <div className="right-container">
            <div className="rating-container">
                <span>9.8</span>
                <span>Exceptional</span>
                <span>Ratings</span>
            </div>
            <button className="btn">View</button>
        </div>
    </div>
  )
}

export default MainCard;