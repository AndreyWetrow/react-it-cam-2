import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // console.log(profilePage, newPostText, addPost, updateNewPostText);

  let postsElements = props.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} key={item.id} />
  ));

  let newPostRef = React.createRef();

  const onAddPost = () => {
    props.addPost();
    // dispatch(addPostActionCreator());
  };
  // const addPostMessageText = () => {
  //   let text = newPostRef.current.value;
  //   postMessageText(text);
  // };
  const onPostChange = () => {
    let text = newPostRef.current.value;

    props.updateNewPostText(text);

    // let action = updateNewPostTextActionCreator(text);
    // dispatch(action);
    // updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostRef}
            cols="30"
            rows="5"
            value={props.newPostText}
          />
        </div>
        <div>
          <button
            onClick={() => {
              onAddPost();
            }}
          >
            Add post
          </button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
