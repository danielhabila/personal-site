import React, { useRef } from "react";
import { Link } from "react-router-dom";

import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import WidgetSubscribe from "../partials/WidgetSubscribe";
import Footer from "../partials/Footer";
import BottomNavigation from "../partials/BottomNavigation";
import AudioPlayer from "../partials/AudioPlayer";

function PodPlayer() {
  const audio = useRef(null);

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

            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
              {/* Content */}
              <main className="grow">
                {/*  Page sections */}
                <AudioPlayer ref={audio} />

                {/* Content */}
                <section>
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pb-12 md:pb-20">
                      <div className="md:flex md:justify-between md:space-x-14">
                        {/* Main content */}
                        <div className="md:grow space-y-8 mb-12 md:mb-0">
                          {/* Notes */}
                          <div>
                            <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4">
                              Notes
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400">
                              In this episode, It has survived not only five
                              centuries, but also the leap into electronic
                              typesetting, remaining essentially unchanged. It
                              was popularised in the with the release of
                              letraset sheets containing passages, and more
                              recently with desktop publishing software like
                              Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                          </div>
                          {/* Topics */}
                          <div>
                            <h3 className="h3 font-hkgrotesk mb-4">Topics</h3>
                            <ul>
                              <li>
                                <button
                                  className="w-full text-left py-1.5 group"
                                  onClick={() => audio.current.goToTime("0:55")}
                                >
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    0:55
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    Jason's first podcast ever
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    1:12
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    Helen's been on other podcasts: Startups for
                                    the Rest of Us, Indie Bites, Indie Worldwide
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    3:06
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    Should we invest in the "auto publish to
                                    YouTube" feature?
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    13:32
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    The best features the ones that feel like
                                    "magic" when a customer uses them
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    18:46
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    The "wait and see" product development
                                    philosophy
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    20:27
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    A new podcast website builder CMS and
                                    website designs
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    32:24
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    Making a few new podcast website themes
                                  </span>
                                </button>
                                <button className="w-full text-left py-1.5 group">
                                  <span className="text-slate-400 font-medium">
                                    ›
                                  </span>{" "}
                                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                                    34:30
                                  </span>{" "}
                                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition duration-150 ease-in-out">
                                    How we run our weekly team meetings
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="pb-12 md:pb-20" aria-hidden="true"></div>
              </main>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetNewsletter />
                  <WidgetSubscribe />
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

export default PodPlayer;
