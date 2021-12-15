import Button from "../Button";
import { useHistory } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import { loginUser, signupUser } from "../../auth/actions/userActions";
import { connect } from "react-redux";
import Input from "../Input";
import "./styles.scss";

const Form = (props) => {
  const { loginUser, title, validationSchema, initialValues, isLogin, isSignUp, listName } = props;

  const history = useHistory();

  return (
    <div className="form">
      <h1>{title}</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          console.log(values);
          {
            isLogin && loginUser(values, history, setFieldError, setSubmitting);
          }
          {
            isSignUp && signupUser(values, history, setFieldError, setSubmitting);
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <div className="form-wrapper">
              {listName.map(({ id, name, placeholder, type }) => (
                <Input id={id} name={name} placeholder={placeholder} type={type} />
              ))}
            </div>
            <Button type="submit">{title}</Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, { loginUser, signupUser })(Form);
