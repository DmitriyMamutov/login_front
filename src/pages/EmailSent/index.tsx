import Title from "../../components/Title";
import { useParams, Link } from "react-router-dom";
import cn from "classnames";

import "./styles.scss";

interface IUserEmail {
  userEmail: string;
}

const EmailSent = () => {
  const { userEmail }: IUserEmail = useParams();

  console.log("userEmail", userEmail);

  return (
    <div>
      <div className={cn("page-wrapper", "products-wrapper")}>
        <div className={"products-wrapper-header"}>
          <Title color="white" text="Account Confirmation" />
        </div>
        <div className={"products-content"}>
          <p>
            An mail with your account confirmation link has been sent to your
            email:
            <b> {userEmail}</b>
          </p>
          <Link to={`/login/${userEmail}`}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
