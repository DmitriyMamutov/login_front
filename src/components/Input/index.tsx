import { FC } from "react";
import { Field, ErrorMessage } from "formik";
import "./styles.scss";

type Props = {
  name: string;
  placeholder: string;
  type: string;
  id: string;
};

const Input: FC<Props> = (props) => {
  const { name, placeholder, type, id } = props;

  return (
    <div id={id} className="input-wrapper">
      <Field name={name} placeholder={placeholder} type={type} />
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
};

export default Input;
