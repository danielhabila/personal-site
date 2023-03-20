import React, { useRef } from "react";

import Header from "../partials/Header";
import AudioPlayer from "../partials/AudioPlayer";
import Footer from "../partials/Footer";

import Host01 from "../images/host-04.jpg";
import Host02 from "../images/host-05.jpg";
import Host03 from "../images/host-06.jpg";

function PodPlayer() {
  const audio = useRef(null);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
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
                    <p className="text-slate-500">
                      In this episode, It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the with the
                      release of letraset sheets containing passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
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
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            0:55
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            Jason's first podcast ever
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            1:12
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            Helen's been on other podcasts: Startups for the
                            Rest of Us, Indie Bites, Indie Worldwide
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            3:06
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            Should we invest in the "auto publish to YouTube"
                            feature?
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            13:32
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            The best features the ones that feel like "magic"
                            when a customer uses them
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            18:46
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            The "wait and see" product development philosophy
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            20:27
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            A new podcast website builder CMS and website
                            designs
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            32:24
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            Making a few new podcast website themes
                          </span>
                        </button>
                        <button className="w-full text-left py-1.5 group">
                          <span className="text-slate-400 font-medium">›</span>{" "}
                          <span className="text-slate-800 font-medium">
                            34:30
                          </span>{" "}
                          <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">
                            How we run our weekly team meetings
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* Contributors */}
                  <div>
                    <h3 className="h3 font-hkgrotesk mb-4">Contributors</h3>
                    <div className="text-slate-500 space-y-3">
                      <p>
                        <span className="text-slate-400">—</span>{" "}
                        <a
                          className="font-medium text-slate-800 underline hover:no-underline"
                          href="#0"
                        >
                          Jon Buda
                        </a>{" "}
                        lives in London, UK. He's been involved in the
                        podcasting world since 2013, and has been building
                        software since 2002.
                      </p>
                      <p>
                        <span className="text-slate-400">—</span>{" "}
                        <a
                          className="font-medium text-slate-800 underline hover:no-underline"
                          href="#0"
                        >
                          Mark Mitchel
                        </a>{" "}
                        lives in London, UK. He's been involved in the
                        podcasting world since 2013, and has been building
                        software since 2002.
                      </p>
                      <p>
                        <span className="text-slate-400">—</span>{" "}
                        <a
                          className="font-medium text-slate-800 underline hover:no-underline"
                          href="#0"
                        >
                          Mary James
                        </a>{" "}
                        lives in London, UK. He's been involved in the
                        podcasting world since 2013, and has been building
                        software since 2002.
                      </p>
                    </div>
                  </div>
                  {/* Notes */}
                  <div className="text-slate-500 italic">
                    If you liked this episode, popularised in the with the
                    release of letraset sheets containing passages, and more
                    recently with desktop{" "}
                    <a
                      className="font-medium text-slate-800 hover:underline"
                      href="#0"
                    >
                      @PublishingSoftware
                    </a>
                    .
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="md:w-72 md:shrink-0">
                  <div className="relative bg-slate-100 rounded-3xl p-6">
                    <div
                      className="absolute top-0 right-0 -mt-8 mr-14 pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="50"
                      >
                        <path
                          fill="#FCD34D"
                          d="M.71 13.283A22.888 22.888 0 0 0 12.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM48 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83Z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-hkgrotesk font-extrabold text-slate-800 mb-4">
                      Hosts & Guests
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <img
                          className="shrink-0 rounded-full mr-3"
                          src={Host01}
                          width="44"
                          height="44"
                          alt="Host 04"
                        />
                        <div>
                          <div className="font-hkgrotesk font-extrabold text-sm text-slate-800">
                            Sarah Mendes
                          </div>
                          <div>
                            <a
                              className="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline"
                              href="#0"
                            >
                              @saramendes
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <img
                          className="shrink-0 rounded-full mr-3"
                          src={Host02}
                          width="44"
                          height="44"
                          alt="Host 05"
                        />
                        <div>
                          <div className="font-hkgrotesk font-extrabold text-sm text-slate-800">
                            Quentin Villard
                          </div>
                          <div>
                            <a
                              className="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline"
                              href="#0"
                            >
                              @quentin789
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <img
                          className="shrink-0 rounded-full mr-3"
                          src={Host03}
                          width="44"
                          height="44"
                          alt="Host 06"
                        />
                        <div>
                          <div className="font-hkgrotesk font-extrabold text-sm text-slate-800">
                            Oliver Martinez
                          </div>
                          <div>
                            <a
                              className="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline"
                              href="#0"
                            >
                              @OliverMarti
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-12 md:pb-20" aria-hidden="true"></div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default PodPlayer;
