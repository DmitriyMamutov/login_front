import { Formik, Form, Field, ErrorMessage } from "formik";
import './styles.scss';

const Input = (props) =>{
const {name, placeholder, type} = props;
    return(
        <div className="input-wrapper">
        <Field name={name} placeholder={placeholder} type={type} />
        <ErrorMessage className="error" name={name} component="div"/>
      </div>
    )
}

export default Input;