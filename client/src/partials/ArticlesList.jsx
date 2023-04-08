import React from "react";
import ArticleItem from "../partials/ArticleItem";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function ArticlesList() {
  const getPosts = async () => {
    try {
      const response = await axios.get("/api/fetchBlogs");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error, isFetching } = useQuery(
    {
      queryKey: ["posts"],
      queryFn: getPosts,
    }
    // { staleTime: 3600000, refetchOnmount: false }
  );

  // console.log("show data: ", data);
  // console.log("is loading: ", loading);
  // console.log("is fetching: ", fetching);

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-aspekta text-2xl md:text-4xl font-[650] mb-3">
          Latest Articles
        </h2>

        {/* Articles list */}
        <div>
          {error
            ? "something went wrong"
            : isLoading
            ? "Loading..."
            : data &&
              data.posts.map((item) => {
                const date = moment(item.postDate).format("MMM DD, YYYY");

                return (
                  <ArticleItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    slug={item.slug}
                    image={item.coverPhoto && item.coverPhoto.url}
                    postDate={date}
                    excerpt={{ __html: item.content }}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default ArticlesList;
