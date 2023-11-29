import classes from "../Features/Introduction.module.css";

function PricesIntroduction() {
  return (
    <div className={classes.introductionOne}>
      <div className={classes.introductionTitle}>
        <h2>PRices</h2>
        <p>
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <div className={`${classes.introductionImg} ${classes.pricesImg}`}></div>
    </div>
  );
}

export default PricesIntroduction;
