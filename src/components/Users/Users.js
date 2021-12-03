import React from "react";
import classes from "./users.module.scss";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={
                props.currentPage === p ? classes.selectedPage : undefined
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      <button>Get Users</button>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <div>
                <div className={classes.usersWebsite}>{u.website}</div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos != null ? u.photos : props.userPhoto}
                    alt=""
                    className={classes.usersPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={classes.usersButton}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={classes.usersButton}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>

            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.phone}</div>
              </div>
              <div>
                <div>{u.address.city}</div>
                <div>{u.address.street}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
