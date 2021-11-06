import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="5" />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={"How are you"} likesCount={15} />
        <Post message={"I'm fine "} likesCount={20} />
      </div>
    </div>
  );
};

export default MyPosts;
