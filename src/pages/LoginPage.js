import Login from "../components/Login";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../utils/validations";
import { FIELDS_LIST } from "../config/login_config";

import "./styles.scss";

const LoginPage = () => {
  return (
    <div className="page-wrapper">
      <Login
        initialValues={{
          email: "",
          password: "",
        }}
        title="Login"
        validationSchema={loginValidationSchema}
        isLogin
        listName={FIELDS_LIST}
      />
      <p className="page-wrapper__bottom-text">
        New here? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;
