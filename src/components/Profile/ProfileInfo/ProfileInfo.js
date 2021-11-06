import React from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <>
      <div className={classes.content__bg}>
        <img
          src="https://www.myfitness.ee/wp-content/uploads/2016/05/nature-wallpaper-07.jpg"
          alt=""
        />
      </div>
      <div className={classes.descriptionBlock}> ava + desk</div>
    </>
  );
};

export default ProfileInfo;
