import "./button.scss";

const Button = ({ text, btn }) => {
  return <button className={btn}>{text}</button>;
};

export default Button;
