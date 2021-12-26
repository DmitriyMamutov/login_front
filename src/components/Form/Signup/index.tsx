import { FC } from "react";
import Button from "../../Button";
import { useHistory, Link } from "react-router-dom";
import Title from "../../Title";
import { Formik, Form as FormikForm } from "formik";
import { signupUser } from "../../../auth/actions/userActions";
import { connect } from "react-redux";
import Input from "../../Input";
import {
  FIELDS_LIST,
  SIGNUP_COMPONENT_CONFIG,
} from "../../../config/signup_config";
import { signupValidationSchema } from "../../../utils/validations";
import Loader from "react-loader-spinner";
import { ISignUp, IHistory } from "../../../interfaces";

import "../styles.scss";

type Props = {
  signupUser: (
    values: ISignUp,
    history: IHistory,
    setFieldError: (field: string, message: string | undefined) => void,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
};

const Signup: FC<Props> = (props) => {
  const { signupUser } = props;

  const { title, bottomText, linkText, loginLink } = SIGNUP_COMPONENT_CONFIG;

  const history = useHistory();

  return (
    <div className="form">
      <div className="form-box">
        <Title size="h3" text={title} />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            signupUser(values, history, setFieldError, setSubmitting);
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
                  <div>{title}</div>
                )}
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
      <p className="form__bottom-text">
        {bottomText} <Link to={loginLink}>{linkText}</Link>
      </p>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
