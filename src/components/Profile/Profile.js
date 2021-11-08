import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
