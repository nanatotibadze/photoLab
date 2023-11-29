import classes from "./Table.module.css";
import icon from "../../assets/pricing/desktop/check.svg";

function Table() {
  return (
    <>
      <div className={classes.table}>
        <h2>compare</h2>
        <table>
          <thead>
            <tr>
              <th>The feautures</th>
              <th>basic</th>
              <th>pro</th>
              <th>business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UNLIMITED STORY POSTING</td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>UNLIMITED PHOTO UPLOAD</td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>EMBEDDING CUSTOM CONTENT</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>CUSTOMIZE METADATA</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>ADVANCED METRICS</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>ADVANCED METRICS</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>SEARCH ENGINE INDEXING</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
            <tr>
              <td>CUSTOM ANALYTICS</td>
              <td className={classes.icon}></td>
              <td className={classes.icon}></td>
              <td className={classes.icon}>
                <img src={icon} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.tableMobile}>
        <h5>the features</h5>
        <div className={classes.tableItem}>
          <p>UNLIMITED STORY POSTING</p>
          <div className={classes.description}>
            <p>
              basic{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              pro{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>UNLIMITED PHOTO UPLOAD</p>
          <div className={classes.description}>
            <p>
              basic{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              pro{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>EMBEDDING CUSTOM CONTENT</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>
              pro{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>CUSTOMIZE METADATA</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>
              pro{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>ADVANCED METRICS</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>pro </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>PHOTO DOWNLOADS</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>pro </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>SEARCH ENGINE INDEXING</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>pro </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
        <div className={classes.tableItem}>
          <p>CUSTOM ANALYTICS</p>
          <div className={classes.description}>
            <p>basic </p>
            <p>pro </p>
            <p>
              business{" "}
              <span>
                <img src={icon} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;
