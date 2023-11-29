import Stories from "../features/Stories";
import StoryItem from "../features/StoryItem";
import tour from "../assets/stories/desktop/world-tour.jpg";
import corners from "../assets/stories/desktop/unforeseen-corners.jpg";
import lion from "../assets/stories/desktop/king-on-africa.jpg";
import nowhere from "../assets/stories/desktop/trip-to-nowhere.jpg";
import sea from "../assets/stories/desktop/rage-of-the-sea.jpg";
import horses from "../assets/stories/desktop/running-free.jpg";
import vawes from "../assets/stories/desktop/behind-the-waves.jpg";
import calm from "../assets/stories/desktop/calm-waters.jpg";
import milkyway from "../assets/stories/desktop/milky-way.jpg";
import darkforest from "../assets/stories/desktop/dark-forest.jpg";
import somwarpet from "../assets/stories/desktop/somwarpet.jpg";
import dreams from "../assets/stories/desktop/land-of-dreams.jpg";
import classes from "./StoryPage.module.css";
import NextButton from "../ui/NextButton";

function StoryPage() {
  return (
    <>
      {" "}
      <div className={classes.container}>
        <div className={classes.columnOne}>
          <div className={classes.backgroundImg}></div>
          <div className={classes.description}>
            <h6 className={classes.columnOneTitle}>
              {" "}
              LAST MONTH’S FEATURED STORY
            </h6>
            <h3 className={classes.columnOneh3}>
              HAZY FULL MOON OF APPALACHIA
            </h3>
            <p className={classes.date}>
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called &quot;mountains,&quot;
              especially in eastern Kentucky and West Virginia, and while the
              ridges are not high, the terrain is extremely rugged.
            </p>
            <NextButton
              arrow={"white"}
              title={"read the story"}
              className={classes.storyBtn}
            />
          </div>
        </div>

        <Stories />
        <div className={classes.row}>
          <StoryItem
            img={tour}
            title={"World Tour 2019"}
            author={"by Timothy Wagner"}
          />
          <StoryItem
            img={corners}
            title={"Unforeseen Corners"}
            author={"by William Malcolm"}
          />
          <StoryItem
            img={lion}
            title={"King on Africa: Part II"}
            author={"by Tim Hillenburg"}
          />
          <StoryItem
            img={nowhere}
            title={"The Trip to Nowhere"}
            author={"by Felicia Rourke"}
          />
          <StoryItem
            img={sea}
            title={"Rage of The Sea"}
            author={"by Mohammed Abdul"}
          />
          <StoryItem
            img={horses}
            title={"Running Free"}
            author={"by Michelle"}
          />
          <StoryItem
            img={vawes}
            title={"Behind the Waves"}
            author={"by Lamarr Wilson"}
          />
          <StoryItem
            img={calm}
            title={"Calm Waters"}
            author={"by Lamarr Wilson"}
          />
          <StoryItem
            img={milkyway}
            title={"The Milky Way"}
            author={"by Benjamin Cruz"}
          />
          <StoryItem
            img={darkforest}
            title={"Night at The Dark Forest"}
            author={"by  Mohammed Abdul"}
          />
          <StoryItem
            img={somwarpet}
            title={"Somwarpet’s Beauty"}
            author={"by Michelle"}
          />
          <StoryItem
            img={dreams}
            title={"Land of Dreams"}
            author={"by William Malcolm"}
          />
        </div>
      </div>
    </>
  );
}
export default StoryPage;
