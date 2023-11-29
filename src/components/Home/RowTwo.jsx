import classes from "./RowTwo.module.css";
import NextButton from "../../ui/NextButton";

function RowTwo() {
  return (
    <>
      <div className={classes.rowTwo}>
        {/* <div className={classes.descriptionTwo}>
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
        </div> */}
        <div className={classes.imgRowTwo}></div>
        <div className={classes.descriptionTwo}>
          <h2 className={classes.titleTwo}>Beautiful stories every time </h2>
          <p className={classes.pTwo}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <NextButton
            title={"view the stories"}
            className={classes.nextTwo}
            arrow={"black"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwo;
