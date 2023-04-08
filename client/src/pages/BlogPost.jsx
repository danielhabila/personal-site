import React from "react";
import { Link, useParams } from "react-router-dom";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import WidgetSponsor from "../partials/WidgetSponsor";
import WidgetPosts from "../partials/WidgetPosts";
import Footer from "../partials/Footer";
import BottomNavigation from "../partials/BottomNavigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import parse from "html-react-parser";

function Post() {
  const { slug } = useParams();
  // console.log(slug);

  const getSinglePost = async () => {
    try {
      const response = await axios.get(`/api/single-post/${slug}`);
      return response.data.posts[0];
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error, isFetching } = useQuery(
    {
      queryKey: ["singlePosts"],
      queryFn: getSinglePost,
    }
    // { staleTime: 3600000, refetchOnmount: false }
  );

  // console.log(data);
  // ----------------------------------------------------

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        <div className="hidden sm:block">
          <SideNavigation />
        </div>
        <div className="fixed bottom-0 w-full z-20 sm:hidden">
          <BottomNavigation />
        </div>

        {/* Main content */}
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
            <Header />

            {/* Content */}
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
              {/* Middle area */}
              <div className="grow">
                <div className="max-w-[700px]">
                  {/* Back */}
                  <div className="mb-3">
                    <Link
                      className="inline-flex text-sky-500 rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
                      to="/articles"
                    >
                      <span className="sr-only">Back</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                      >
                        <path
                          className="fill-current"
                          d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"
                        />
                      </svg>
                    </Link>
                  </div>

                  <article>
                    {/* Post header */}
                    <header>
                      <div className="flex items-center justify-between mb-1">
                        {/* Post date */}
                        <div className="text-xs text-slate-500 uppercase">
                          <span className="text-sky-500">—</span> Dec 24, 2023{" "}
                          <span className="text-slate-400 dark:text-slate-600">
                            ·
                          </span>{" "}
                          4 Min read
                        </div>
                        {/* Share buttons */}
                        <ul className="inline-flex">
                          <li>
                            <a
                              className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                              href="#0"
                              aria-label="Twitter"
                            >
                              <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                              href="#0"
                              aria-label="Facebook"
                            >
                              <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                              href="#0"
                              aria-label="Share"
                            >
                              <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Title */}
                      <h1 className="h1 font-aspekta mb-4">
                        {data && data.title}
                      </h1>
                    </header>
                    {/* Post content */}
                    <div>
                      {/* {data && (
                        <div>
                          <img src={data.coverPhoto.url} alt={data.title} />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data && data.content.html,
                            }}
                          />
                        </div>
                      )} */}
                      <div className="content ">
                        {data && parse(data.content.html)}
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetNewsletter />
                  {/* <WidgetSponsor />
                  <WidgetPosts /> */}
                </div>
              </aside>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Post;
