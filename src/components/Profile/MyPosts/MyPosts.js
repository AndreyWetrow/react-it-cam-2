import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validarors";
import { Textarea } from "../../common/FormsControls/FormsConrtols";

const maxLength30 = maxLengthCreator(30);

let AddNewPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength30]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

AddNewPostsForm = reduxForm({
  // a unique name for the form
  form: "ProfileAddNewPostForm",
})(AddNewPostsForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} key={item.id} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostsForm onSubmit={onAddPost} />

      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
