import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {
  // let postsData = [
  //   { id: 1, message: "How are you", likesCount: 15 },
  //   { id: 2, message: "I'm fine", likesCount: 21 },
  // ];

  let postsElements = posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} key={item.id} />
  ));

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
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
