import classes from "./PriceList.module.css";
import {useState} from "react";

function PriceList() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className={classes.priceContainer}>
      <div className={classes.pro}>
        <span className={yearly ? classes.inactive : ""}>Monthly</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='32'
          viewBox='0 0 64 32'
          fill='none'
          onClick={() => setYearly((year) => !year)}
        >
          <rect
            width='64'
            height='32'
            rx='16'
            fill={yearly ? "#000" : "#DFDFDF"}
          />
          <circle
            cx={yearly ? "48" : "16"}
            cy='16'
            r='12'
            fill={yearly ? "#DFDFDF" : "black"}
          />
        </svg>
        <span className={yearly ? "" : classes.inactive}>Yearly</span>
      </div>
      <div className={classes.plansContainer}>
        <div className={classes.planItem}>
          <h5>Basic</h5>
          <p>
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <div className={classes.price}>
            <h2>{yearly ? "$190.00" : "$19.00"}</h2>
            <p>per {yearly ? "year" : "month"}</p>
          </div>
          <button>pick plan</button>
        </div>
        <div className={classes.planPro}>
          <h5>Pro</h5>
          <p>
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <div className={classes.price}>
            <h2>{yearly ? "$390.00" : "$39.00"}</h2>
            <p>per {yearly ? "year" : "month"}</p>
          </div>
          <button>pick plan</button>
        </div>
        <div className={classes.planItem}>
          <h5>Business</h5>
          <p>
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <div className={classes.price}>
            <h2>{yearly ? "$990.00" : "$99.00"}</h2>
            <p>per {yearly ? "year" : "month"}</p>
          </div>
          <button>pick plan</button>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
