import classes from "./Final.module.css";
import NextButton from "../../ui/NextButton";

function Final() {
  return (
    <div className={classes.containerFinal}>
      <h1>We’re in beta. Get your invite today!</h1>
      <NextButton
        arrow={"white"}
        title={"get an invite"}
        className={classes.finalBtn}
      />
    </div>
  );
}

export default Final;
