import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />

      <button>Get Users</button>
      <div>
        {users.map((u) => {
          return (
            <User
              key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow}
              userPhoto={props.userPhoto}
            />
            // { user, followingInProgress, userPhoto, follow, unfollow }
            // <div key={u.id}>
            //   <div>
            //     <div>
            //       <div className={classes.usersWebsite}>{u.website}</div>
            //       <NavLink to={"/profile/" + u.id}>
            //         <img
            //           src={u.photos != null ? u.photos : props.userPhoto}
            //           alt=""
            //           className={classes.usersPhoto}
            //         />
            //       </NavLink>
            //     </div>
            //     <div>
            //       {u.followed ? (
            //         <button
            //           disabled={props.followingInProgress.some(
            //             (id) => id === u.id
            //           )}
            //           className={classes.usersButton}
            //           onClick={() => {
            //             props.unfollow(u.id);
            //           }}
            //         >
            //           Unfollow
            //         </button>
            //       ) : (
            //         <button
            //           disabled={props.followingInProgress.some(
            //             (id) => id === u.id
            //           )}
            //           className={classes.usersButton}
            //           onClick={() => {
            //             props.follow(u.id);
            //           }}
            //         >
            //           Follow
            //         </button>
            //       )}
            //     </div>
            //   </div>
            //
            //   <div>
            //     <div>
            //       <div>{u.name}</div>
            //       <div>{u.phone}</div>
            //     </div>
            //     <div>
            //       <div>{u.address.city}</div>
            //       <div>{u.address.street}</div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
