import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import Blog from "./pages/BlogHome";
import Post from "./pages/BlogPost";
import About from "./pages/About";
import PodPlayer from "./pages/PodPlayer";
import Podcast from "./pages/Podcast";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/podplayer" element={<PodPlayer />} />
        <Route path="/post" element={<Post />} />
        <Route path="/podcasts" element={<Podcast />} />
      </Routes>
    </>
  );
}

export default App;
