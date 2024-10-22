// src/Profile.js

import React from 'react';
import {useSelector} from 'react-redux'
const Profile = () => {
  const posts = useSelector((state) => state.posts)
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <p>This is the profile page. You can share details about yourself, your interests, and your blogging journey here!</p>
    </div>
  );
};

export default Profile;
