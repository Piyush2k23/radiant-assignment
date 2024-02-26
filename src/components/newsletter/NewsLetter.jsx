import "./newsLetter.scss";
import Button from "../button/Button";

const NewsLetter = () => {
  return (
    <section className="newsLetter-container">
        <h4>Sign up and get exclusive special deals</h4>
        <div className="input-container">
            <input type="text" placeholder="Email address" className="newsLetter-input"/>
            <button className="newsLetter-btn">Sign Up</button>

        </div>
    </section>
  )
}

export default NewsLetter;