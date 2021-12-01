import React from "react";
import classes from "../preloader/preloader.module.scss";
import preloader from "../../../assets/images/loader.svg";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt={"preloader"} className={classes.preloader} />
    </div>
  );
};

export default Preloader;
