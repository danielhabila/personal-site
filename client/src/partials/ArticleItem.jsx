import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ArticleItem(props) {
  const navigate = useNavigate();

  return (
    <article
      className="p-5 border-b border-slate-100 dark:border-slate-800 hover:bg-gray-500/20 cursor-pointer hover:rounded-lg"
      onClick={() => navigate(props.slug)}
    >
      <div className="flex items-start">
        <img
          className="rounded w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6"
          src={props.image}
          width="88"
          height="88"
          alt={props.title}
        />
        <div className="">
          <h3 className="font-aspekta text-lg font-[650] mb-1">
            {props.title}
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">
              {props.excerpt}
            </div>
          </div>
          <div className="text-xs text-slate-500 mb-1">
            <span className="text-sky-500">—</span> {props.date}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleItem;
