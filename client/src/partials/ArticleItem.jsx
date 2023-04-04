import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";

function ArticleItem(props) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState("");

  const graphqlAPI = import.meta.env.VITE_APP_HYGRAPH_ENDPOINT;
  const getPost = async () => {
    try {
      const query = gql`
        query Posts {
          posts {
            id
            postDate
            slug
            title
            content {
              html
            }
            coverPhoto {
              url
            }
          }
        }
      `;
      // Making request
      const results = await request(graphqlAPI, query);
      setPosts(results.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

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
