import classes from "./Stories.module.css";
import imgOne from "../assets/stories/desktop/mountains.jpg";
import StoryBtn from "../ui/StoryBtn";

function StoryItem({img, title, author}) {
  return (
    <div className={classes.storyItem}>
      <img src={img} className={classes.storyImg} />
      <div className={classes.storyDescription}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <hr className={classes.storyHr}></hr>
        <StoryBtn />
      </div>
    </div>
  );
}

export default StoryItem;
