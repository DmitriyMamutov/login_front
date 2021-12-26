import { FC } from "react";
import cn from "classnames";
import "./styles.scss";

type Props = {
  size?: string;
  text: string;
  className?: string;
  color?: string;
};

const Title: FC<Props> = (props) => {
  const { size, text, className, color } = props;

  const titleClass = cn(
    "title",
    {
      "title-h1": size === "h1",
      "title-h2": size === "h2",
      "title-h3": size === "h3",
      "title-black": color === "black",
      "title-white": color === "white",
    },
    className
  );

  return <div className={titleClass}>{text}</div>;
};

Title.defaultProps = {
  size: "h2",
  color: "black",
};

export default Title;
