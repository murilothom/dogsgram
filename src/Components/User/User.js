import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
