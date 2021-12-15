import Login from "../components/Login";
import { Link } from "react-router-dom";
import { signUpValidationSchema } from "../utils/validations";
import { FIELDS_LIST } from "../config/signup_config";

import "./styles.scss";

const SignupPage = () => {
  return (
    <div className="page-wrapper">
      <Login
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        title="Sign Up"
        validationSchema={signUpValidationSchema}
        isSignUp
        listName={FIELDS_LIST}
      />
      <p className="page-wrapper__bottom-text">
      Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
