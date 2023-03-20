import React from "react";

import SideNavigation from "../partials/SideNavigation";
import BottomNavigation from "../partials/BottomNavigation";
import Header from "../partials/Header";
import Talks from "../partials/Talks";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import Footer from "../partials/Footer";
import PodcastsList from "../partials/PodcastsList";
import Subscribe from "../partials/Subscribe";

function Home() {
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
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
              {/* Middle area */}
              <div className="grow">
                <div className="max-w-[700px]">
                  <div className="space-y-10">
                    {/* <ArticlesList /> */}
                    <PodcastsList />
                    <Subscribe />
                    <Talks />
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetNewsletter />
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

export default Home;
