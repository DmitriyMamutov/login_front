import { FC, useState, useEffect } from "react";
import Button from "../Button";
import { logoutUser } from "../../auth/actions/userActions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import cn from "classnames";
import { LogoutProps } from "../../types";

import "./styles.scss";

const Header: FC<LogoutProps> = ({ logoutUser }) => {
  const [headerActive, setHeaderActive] = useState(false);

  const history = useHistory();

  const headerClass = cn("header", {
    "header--active": headerActive,
  });

  const changeHeaderClass = () => {
    if (window.pageYOffset > 5) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderClass);
  }, []);

  return (
    <div className={headerClass}>
      <div className="container">
        <Button variant="logout" onClick={() => logoutUser(history)} />
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(Header);
