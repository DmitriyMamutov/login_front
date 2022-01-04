import Button from "../../Button";
import { useHistory, useParams } from "react-router-dom";
import Title from "../../Title";
import { Formik, Form as FormikForm } from "formik";
import { forgottenPassword } from "../../../auth/actions/userActions";
import { connect } from "react-redux";
import Input from "../../Input";
import { FIELDS_LIST } from "../../../config/forgottenPassword_config";
import { forgottenPasswordValidationSchema } from "../../../utils/validations";
import Loader from "react-loader-spinner";

import "../styles.scss";

const ForgottenPassword = (props) => {
  const { forgottenPassword } = props;

  const history = useHistory();
  const { userEmail } = useParams();

  return (
    <div className="form">
      <div className="form-box">
        <Title size="h3" text="Password Reset" />

        <Formik
          initialValues={{
            email: userEmail,
            redirectUrl: "http://localhost:3000/passwordreset",
          }}
          validationSchema={forgottenPasswordValidationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            forgottenPassword(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <div className="form-box-wrapper">
                {FIELDS_LIST.map(({ id, name, placeholder, type }) => (
                  <Input
                    key={id}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                  />
                ))}
              </div>
              <Button type="submit">
                {isSubmitting ? (
                  <Loader type="TailSpin" color="#fff" width={32} height={32} />
                ) : (
                  <div>Submit</div>
                )}
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default connect(null, { forgottenPassword })(ForgottenPassword);
