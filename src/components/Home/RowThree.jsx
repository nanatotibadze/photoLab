import classes from "./RowThree.module.css";
import NextButton from "../../ui/NextButton";

function RowOne() {
  return (
    <>
      <div className={`${classes.rowThree} `}>
        <div className={classes.descriptionThree}>
          <h2 className={classes.titleThree}>DESIGNED FOR EVERYONE </h2>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <NextButton
            title={"view the stories"}
            className={classes.nextThree}
            arrow={"black"}
          />
        </div>
        <div className={classes.imgRowThree}></div>
      </div>
    </>
  );
}

export default RowOne;
