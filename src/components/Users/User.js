import React from "react";
import classes from "./users.module.scss";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, userPhoto, follow, unfollow }) => {
  return (
    <div>
      <div>
        <div>
          <div className={classes.usersWebsite}>{user.website}</div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos != null ? user.photos : userPhoto}
              alt=""
              className={classes.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={classes.usersButton}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={classes.usersButton}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.phone}</div>
        </div>
        <div>
          <div>{user.address.city}</div>
          <div>{user.address.street}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
