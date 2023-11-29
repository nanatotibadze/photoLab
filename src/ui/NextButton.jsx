import classes from "./NextButton.module.css";

function NextButton({title, className, arrow}) {
  return (
    <button className={`${classes.nextBtn} ${className}`}>
      <p className={classes.nextP}>{title}</p>
      <span className={classes.span}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='42'
          height='14'
          viewBox='0 0 42 14'
          fill='none'
        >
          <path d='M0 7H41.864' stroke={arrow} />
          <path d='M35.4282 1L41.4282 7L35.4282 13' stroke={arrow} />
        </svg>
      </span>
    </button>
  );
}

export default NextButton;
