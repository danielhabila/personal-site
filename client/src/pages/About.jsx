import React, { useState, useEffect } from "react";

import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import Footer from "../partials/Footer";
import image from "../images/my-avatar.jpg";
import BottomNavigation from "../partials/BottomNavigation";

function About() {
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
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 py-12 md:py-20">
              {/* Middle area */}
              <div className="grow">
                <div className="max-w-[700px]">
                  <section>
                    {/* Page title */}
                    <h1 className="h1 max-md:text-center font-aspekta mb-5">
                      Hey! I'm Daniel 👋🏾
                    </h1>
                    <img
                      className="w-80 rounded-full mb-10 max-md:mx-auto"
                      src={image}
                      alt="About"
                    />
                    {/* Page content */}
                    <div className="text-slate-500 dark:text-slate-400 space-y-8">
                      <div className="space-y-4">
                        <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                          TLDR
                        </h2>
                        <p>
                          Welcome to my corner of the internet. On here you'll
                          find my essays and podcasts on books, self-help,
                          business and generic life advice I've found helpful.
                          These days, I spend most of my time either
                          programming, flying around Vancouver, working on my
                          YouTube channel, or writing on here.
                        </p>
                        <p>
                          While there isn't a Wikipedia page about me (sorry
                          folks!), a media bio is available below.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                          Let's Connect
                        </h2>
                        <p>
                          I like making internet friends, so if you're reading
                          this, you can say hi to me on{" "}
                          <a
                            className="font-medium text-sky-500 hover:underline"
                            href="#0"
                          >
                            Twitter
                          </a>{" "}
                          or{" "}
                          <a
                            className="font-medium text-sky-500 hover:underline"
                            href="#0"
                          >
                            Instagram
                          </a>{" "}
                          to chat about projects and ideas.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <WidgetNewsletter />
              </aside>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
