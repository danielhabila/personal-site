import React, { useState } from "react";
import moment from "moment";
import PodcastItem from "./PodcastItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function PodcastsList() {
  const getPodcastList = async () => {
    try {
      const response = await axios.get(`/api/podcast-list`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error, isFetching } = useQuery(
    {
      queryKey: ["podcastList"],
      queryFn: getPodcastList,
    }
    // { staleTime: 3600000, refetchOnmount: false }
  );

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-aspekta text-2xl md:text-4xl font-[650] mb-3">
          Latest Podcasts
        </h2>
        {/* Podcasts */}
        <div>
          {error
            ? "something went wrong"
            : isLoading
            ? "Loading..."
            : data &&
              data.items.map((item, index) => {
                const date = moment(item.snippet.publishedAt).format(
                  "MMM DD, YYYY"
                );

                return (
                  <PodcastItem
                    key={item.index}
                    id={item.id.videoId}
                    image={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    slug={item.id.videoId}
                    date={date}
                    episode={2}
                    // category={item.category}
                    excerpt={item.snippet.description}
                    // selectedCategory={category}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default PodcastsList;
