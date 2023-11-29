import classes from "./Button.module.css";

function ButtonOne({children, onClick, className}) {
  return (
    <button onClick={onClick} className={`${classes.buttonOne} ${className}`}>
      {children}
    </button>
  );
}

export default ButtonOne;
