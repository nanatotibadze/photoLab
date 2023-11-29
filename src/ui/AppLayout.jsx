import {Outlet} from "react-router-dom";
import classes from "./AppLayout.module.css";
import Navigation from "../features/Navigation";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
