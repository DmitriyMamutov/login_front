import { FC } from "react";
import cn from "classnames";
import "./styles.scss";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: string;
};
const Button: FC<Props> = (props) => {
  const { onClick, children, type, variant } = props;

  const buttonClass = cn("button", {
    "button-primary": variant === "primary",
    "button-logout": variant === "logout",
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
