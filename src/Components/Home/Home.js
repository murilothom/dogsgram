import React from "react";

import Head from "../Helper/Head";
import Feed from "../Feed/Feed";

const Home = () => {
  return (
    <section className="container mainContainer">
      <h1 className="title">Feed</h1>
      <Head
        title="Feed"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
