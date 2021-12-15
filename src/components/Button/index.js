
import "./styles.scss";

const Button = (props) => {
  const { onClick, children, type } = props;

  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
