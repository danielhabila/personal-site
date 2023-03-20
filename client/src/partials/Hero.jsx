import React from "react";

import image from "../images/my-avatar.jpg";

function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          {/* <img
            className="rounded-full mb-5"
            src={image}
            width="56"
            height="56"
            alt="Me"
          /> */}
          <h1 className="h1 font-aspekta mb-5">Hey 👋🏾</h1>
          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400">
            Welcome to my corner of the internet. I write about business, tech,
            and life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
