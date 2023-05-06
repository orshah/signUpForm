import "./customButton.style.css";

const CustomButton = (props) => {
  return <button className={`btn ${props.type}`}>{props.text}</button>;
};

export default CustomButton;
