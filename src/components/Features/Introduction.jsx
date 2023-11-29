import classes from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={classes.introductionOne}>
      <div className={classes.introductionTitle}>
        <h2>FEATURES</h2>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
      <div className={`${classes.introductionImg} ${classes.heroImg}`}></div>
    </div>
  );
}

export default Introduction;
