import classes from "./StoryBtn.module.css";

function StoryBtn({onClick}) {
  return (
    <button onClick={onClick} className={classes.storyBtn}>
      <p className={classes.storyBtnP}>Read Story</p>
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='42'
          height='14'
          viewBox='0 0 42 14'
          fill='none'
        >
          <path d='M0 7H41.864' stroke='white' />
          <path d='M35.4282 1L41.4282 7L35.4282 13' stroke='white' />
        </svg>
      </span>
    </button>
  );
}

export default StoryBtn;
