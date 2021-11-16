import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profilePage, dispatch }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage.posts}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </>
  );
};

export default Profile;
