import React from "react";
import classes from "./Friends.module.scss";

const Friends = ({ state }) => {
  const friendsElements = state.friends.map((item) => {
    return (
      <div className={classes.friendsItem} key={item.id}>
        <span className={classes.friendsAvatar} />
        <div className={classes.friendsName}>{item.name}</div>
      </div>
    );
  });

  return (
    <div>
      <h3 className={classes.friendsHeader}>Friends</h3>
      <div className={classes.friendsContainer}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
