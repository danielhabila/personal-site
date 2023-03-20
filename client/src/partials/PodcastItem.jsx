import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Play from "../images/play-02.svg";

function PodcastItem(props) {
  const navigate = useNavigate();
  return (
    <div
      className="sm:flex items-center p-5 border-b border-slate-100 dark:border-slate-800 hover:bg-gray-500/20 cursor-pointer hover:rounded-lg"
      onClick={() => navigate(props.slug)}
    >
      <div className="flex items-start mb-4 sm:mb-0">
        <img
          className="rounded w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6"
          src={props.image}
          width="88"
          height="88"
          alt={props.title}
        />
        <div>
          <h3 className="font-hkgrotesk font-extrabold text-lg mb-1">
            {props.title}
          </h3>
          <div className="font-hkgrotesk font-medium text-xs text-slate-500 mb-1">
            {props.date} <span className="text-slate-300">·</span> Episode{" "}
            {props.episode}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {props.excerpt}
          </div>
        </div>
      </div>
      <div className="hidden md:block shrink-0 sm:ml-5">
        <Link to={props.slug} aria-label="play">
          <img
            src={Play}
            width="40"
            height="40"
            alt="Play"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

export default PodcastItem;
