import "./customInput.style.css";

const CustomInput = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      minLength={props.minLenght}
      maxLength={props.maxLenght}
    />
  );
};

export default CustomInput;
