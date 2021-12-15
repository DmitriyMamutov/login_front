import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const Signup = ({ signupUser }) => {
  const history = useHistory();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.string()
      .min(8, "password is too short")
      .max(30, "password is too long")
      .required("Required"),
    name: Yup.string().required("Required"),
    repeatPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  return (<>
    <div className="form">
      <h1>Sign Up old</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          signupUser(values, history, setFieldError, setSubmitting);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-wrapper">
              <div className="input-wrapper">
                <Field name="name" placeholder="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div className="input-wrapper">
                <Field name="email" placeholder="email" type="text" />
                <ErrorMessage name="email" />
              </div>
              <div className="input-wrapper">
                <Field name="password" placeholder="password" type="password" />
                <ErrorMessage name="password" />
              </div>
              <div className="input-wrapper">
                <Field name="repeatPassword" placeholder="repeat password" type="password" />
                <ErrorMessage name="repeatPassword" />
              </div>
            </div>
            <button type="submit">Sign Up</button>
            
          </Form>
        )}
      </Formik>
    </div>
    <div className="page-wrapper__bottom-text">
    Already have an account? <Link to="/login">Login</Link>
  </div>
  </>
  );
};

export default connect(null, { signupUser })(Signup);
