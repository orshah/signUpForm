import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";
import "./App.css";

function App() {
  return (
    <>
      <h1>Sign Up Form</h1>
      <div className="form">
        <div className="container">
          <CustomInput
            type="text"
            minLenght="5"
            maxLenght="20"
            placeholder="Username"
          />
          <CustomInput
            type="text"
            minLenght="5"
            maxLenght="20"
            placeholder="Email"
          />
          <CustomInput
            type="text"
            minLenght="5"
            maxLenght="20"
            placeholder="Password"
          />
        </div>
        <CustomButton type="signUp" text="Sign Up" />
        <CustomButton type="login" text="Login" />
      </div>
    </>
  );
}

export default App;
