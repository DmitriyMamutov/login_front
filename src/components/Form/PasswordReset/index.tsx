import { FC } from "react";
import Button from "../../Button";
import { useHistory, useParams } from "react-router-dom";
import Title from "../../Title";
import { Formik, Form as FormikForm } from "formik";
import { resetPassword } from "../../../auth/actions/userActions";
import { connect } from "react-redux";
import Input from "../../Input";
import { FIELDS_LIST } from "../../../config/resetPassword_config";
import { resetPasswordValidationSchema } from "../../../utils/validations";
import Loader from "react-loader-spinner";

import "../styles.scss";

type Props = {
  resetPassword: any;
};

interface IUser {
  userId: string;
  resetString: string;
}

const PasswordReset: FC<Props> = (props) => {
  const { resetPassword } = props;

  const history = useHistory();
  
  const { userId, resetString }: IUser = useParams();

  return (
    <div className="form">
      <div className="form-box">
        <Title size="h3" text="Password Reset" />

        <Formik
          initialValues={{
            newPassword: "",
            confirmNewPassword: "",
            userId,
            resetString,
          }}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            resetPassword(values, history, setFieldError, setSubmitting);
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

export default connect(null, { resetPassword })(PasswordReset);
