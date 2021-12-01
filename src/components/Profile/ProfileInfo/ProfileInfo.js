import React from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={classes.content__bg}>
        <img
          src="https://www.myfitness.ee/wp-content/uploads/2016/05/nature-wallpaper-07.jpg"
          alt=""
        />
      </div>
      <div>{props.profile.website}</div>
      <div>{props.profile.phone}</div>
      <div className={classes.descriptionBlock}> {props.profile.name}</div>
      <div className={classes.descriptionBlock}> {props.profile.username}</div>
    </>
  );
};

export default ProfileInfo;
