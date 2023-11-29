import classes from "./Stories.module.css";
import StoryItem from "./StoryItem";
import imgOne from "../assets/stories/desktop/mountains.jpg";
import imgTwo from "../assets/stories/desktop/cityscapes.jpg";
import imgThree from "../assets/stories/desktop/18-days-voyage.jpg";
import imgFour from "../assets/stories/desktop/architecturals.jpg";

function Stories() {
  return (
    <>
      <div className={classes.story}>
        <StoryItem
          img={imgOne}
          title={"The Mountains"}
          author={"by John Appleseed"}
        />
        <StoryItem
          img={imgTwo}
          title={"Sunset Cityscapes"}
          author={"by Benjamin Cruz"}
        />{" "}
        <StoryItem
          img={imgThree}
          title={"18 Days Voyage"}
          author={"by Alexei Borodin"}
        />
        <StoryItem
          img={imgFour}
          title={"Architecturals"}
          author={"by Samantha Brooke"}
        />
      </div>
    </>
  );
}
export default Stories;
