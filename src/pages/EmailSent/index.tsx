import Title from "../../components/Title";
import { useParams, Link } from "react-router-dom";
import cn from "classnames";

import "./styles.scss";

interface IProps {
  userEmail: string;
  reset: any;
}

const EmailSent = () => {
  const { userEmail, reset }: IProps = useParams();

  return (
    <div>
      {reset && userEmail && (
        <div className={cn("page-wrapper", "products-wrapper")}>
        <div className="container">
          <div className={"products-wrapper-header"}>
            <Title color="white" text="Password Reset" />
          </div>
          <div className={"products-content"}>
            <p>
              An email with a password reset link has been sent to your email:
              <b> {userEmail}</b>
            </p>
            <p>Check your email and click on the link to proceed!</p>
          </div>
          </div>
        </div>
      )}
      {!reset && userEmail && (
        <div className={cn("page-wrapper", "products-wrapper")}>
        <div className="container">
          <div className={"products-wrapper-header"}>
            <Title color="white" text="Account Confirmation" />
          </div>
          <div className={"products-content"}>
            <p>
              An email with your account confirmation link has been sent to your
              email:
              <b> {userEmail}</b>
            </p>
            <Link to={`/login/${userEmail}`}>Login</Link>
          </div>
        </div>
        </div>
      )}

      {!reset && !userEmail && (
        <div className={cn("page-wrapper", "products-wrapper")}>
        <div className="container">
          <div className={"products-wrapper-header"}>
            <Title color="white" text="Password Reset" />
          </div>
          <div className={"products-content"}>
            <p>Your password has been reset successfully.</p>
            <p>You may now login.</p>
            <Link to={`/login`}>Login</Link>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default EmailSent;
