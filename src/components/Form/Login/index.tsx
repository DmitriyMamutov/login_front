import { FC } from "react";
import Button from "../../Button";
import { Link, useHistory } from "react-router-dom";
import Title from "../../Title";
import { Formik, Form as FormikForm } from "formik";
import { loginUser } from "../../../auth/actions/userActions";
import { connect } from "react-redux";
import Input from "../../Input";
import {
  FIELDS_LIST,
  LOGIN_COMPONENT_CONFIG,
} from "../../../config/login_config";
import { loginValidationSchema } from "../../../utils/validations";
import Loader from "react-loader-spinner";
import { ILogin, IHistory } from "../../../interfaces";

import "../styles.scss";

type Props = {
  loginUser: (
    values: ILogin,
    history: IHistory,
    setFieldError: (field: string, message: string) => void,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
};

const Login: FC<Props> = (props) => {
  const { loginUser } = props;

  const { title, bottomText, linkText, signupLink } = LOGIN_COMPONENT_CONFIG;

  const history = useHistory();

  return (
    <div className="form">
      <div className="form-box">
        <Title size="h3" text={title} />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            loginUser(values, history, setFieldError, setSubmitting);
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
        {bottomText} <Link to={signupLink}>{linkText}</Link>
      </p>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
