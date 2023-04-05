import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchBlogs from "../hooks/fetchBlogs";

function ArticleItem(props) {
  const navigate = useNavigate();
  const { data, loading, error } = fetchBlogs();

  const fetched = props.excerpt.__html.html;
  const excerpt = fetched.split(" ").slice(0, 30).join(" ") + " ...";

  // useEffect(() => {
  //   console.log(props.excerpt.__html.html);
  // }, [props]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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
            <div
              className="grow text-sm text-slate-500 dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          </div>
          <div className="text-[0.7rem] text-slate-500 my-1">
            <span className="text-sky-500">—</span> {props.postDate}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleItem;
