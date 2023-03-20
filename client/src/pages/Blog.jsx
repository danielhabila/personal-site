import React from "react";

import SideNavigation from "../partials/SideNavigation";
import BottomNavigation from "../partials/BottomNavigation";
import Header from "../partials/Header";
import ArticlesList from "../partials/ArticlesList";
import WidgetNewsletter from "../partials/WidgetNewsletter";
import Footer from "../partials/Footer";

function Blog() {
  return (
    <div className="max-w-7xl mx-auto ">
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
            <div className=" md:flex pb-16 md:pb-20 justify-between py-12 md:py-20">
              {/* Middle area */}
              <div className="grow max-w-[700px]">
                <ArticlesList />
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

export default Blog;
