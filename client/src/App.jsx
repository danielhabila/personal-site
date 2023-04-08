import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import BlogHome from "./pages/BlogHome";
import Post from "./pages/BlogPost";
import About from "./pages/About";
import PodPlayer from "./pages/PodPlayer";
import Podcast from "./pages/Podcast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const location = useLocation();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/articles" element={<BlogHome />} />
          <Route path="/articles/:slug" element={<Post />} />
          <Route path="/podplayer" element={<PodPlayer />} />
          <Route path="/podcasts" element={<Podcast />} />
          <Route path="/podcasts/:slug" element={<PodPlayer />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
