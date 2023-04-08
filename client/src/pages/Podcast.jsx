import React, { useEffect } from "react";

import SideNavigation from "../partials/SideNavigation";
import BottomNavigation from "../partials/BottomNavigation";
import Header from "../partials/Header";
import WidgetSubscribe from "../partials/WidgetSubscribe";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import Footer from "../partials/Footer";
import PodcastsList from "../partials/PodcastsList";
import Subscribe from "../partials/Subscribe";
import useFetch from "../hooks/useFetch";

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
            <div className="grow md:flex pb-16 md:pb-20 py-12 md:py-20 justify-between">
              <div className="max-w-[700px]">
                <div className="space-y-10">
                  {/* <ArticlesList /> */}
                  <PodcastsList />
                </div>
              </div>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0 space-y-8">
                <WidgetNewsletter />
                <WidgetSubscribe />
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
