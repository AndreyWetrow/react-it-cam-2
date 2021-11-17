import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer
      // store={props.store}
      // posts={profilePage.posts}
      // newPostText={profilePage.newPostText}
      // dispatch={dispatch}
      />
    </>
  );
};

export default Profile;
