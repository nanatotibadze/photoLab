import classes from "./Row.module.css";
import NextButton from "../../ui/NextButton";

function RowOne() {
  return (
    <>
      <div className={`${classes.rowOne} ${classes.row}`}>
        <div className={classes.description}>
          <h2 className={classes.title}>
            Create and share your photo stories.{" "}
          </h2>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <NextButton
            title={"get an invite"}
            className={classes.next}
            arrow={"white"}
          />
        </div>
        <div className={classes.imgRowOne}></div>
      </div>
    </>
  );
}

export default RowOne;
