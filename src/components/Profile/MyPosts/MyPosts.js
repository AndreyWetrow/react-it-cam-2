import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = ({ profilePage, newPostText, dispatch }) => {
  // console.log(profilePage, newPostText, addPost, updateNewPostText);

  let postsElements = profilePage.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} key={item.id} />
  ));

  let newPostRef = React.createRef();

  const addPostFunc = () => {
    dispatch(addPostActionCreator());
  };
  // const addPostMessageText = () => {
  //   let text = newPostRef.current.value;
  //   postMessageText(text);
  // };
  const onPostChange = () => {
    let text = newPostRef.current.value;
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
    // updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/*<textarea*/}
          {/*  onInput={addPostMessageText}*/}
          {/*  ref={newPostRef}*/}
          {/*  cols="30"*/}
          {/*  rows="5"*/}
          {/*  value={"it-kamasutra"}*/}
          {/*/> */}
          <textarea
            onChange={onPostChange}
            ref={newPostRef}
            cols="30"
            rows="5"
            value={newPostText}
          />
        </div>
        <div>
          <button
            onClick={() => {
              addPostFunc();
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
