import React, { useState } from "react";

import PodcastItem from "./PodcastItem";

import PodcastImg01 from "../images/podcast-01.jpg";
import PodcastImg02 from "../images/podcast-02.jpg";
import PodcastImg03 from "../images/podcast-03.jpg";
import PodcastImg04 from "../images/podcast-04.jpg";
import PodcastImg05 from "../images/podcast-05.jpg";
import PodcastImg06 from "../images/podcast-06.jpg";
import PodcastImg07 from "../images/podcast-07.jpg";
import PodcastImg08 from "../images/podcast-08.jpg";

function PodcastsList() {
  const [category, setCategory] = useState("All");

  const items = [
    {
      id: 0,
      image: PodcastImg01,
      title: "Into Public Speaking as a Developer, Part 2",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Indie Stories",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 1,
      image: PodcastImg02,
      title: "Talking Competitive Advantage and Moats for Small SaaSes, Part 1",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Indie Stories",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 2,
      image: PodcastImg03,
      title: "Bootstrapping DevKit to $4.5k MRR",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Interviews",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 3,
      image: PodcastImg04,
      title: "Focusing on one product in a strong market - For 15 years",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Software Social",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 4,
      image: PodcastImg05,
      title: "How to build a brand for your indie product",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Indie Stories",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 5,
      image: PodcastImg06,
      title: "Enterprise Sales as an Indie SaaS featuring Josh Luiz",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Software Social",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 6,
      image: PodcastImg07,
      title: "Building a community of generalists on a remote island",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Interviews",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
    {
      id: 7,
      image: PodcastImg08,
      title: "Getting Started with Customer Interviews",
      slug: "/podcast",
      date: "Jan 24",
      episode: 234,
      category: "Interviews",
      excerpt:
        "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-aspekta text-2xl md:text-4xl font-[650] mb-3">
          Latest Podcasts
        </h2>
        {/* Podcasts */}
        <div>
          {items.map((item) => {
            return (
              <PodcastItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                slug={item.slug}
                date={item.date}
                episode={item.episode}
                category={item.category}
                excerpt={item.excerpt}
                selectedCategory={category}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PodcastsList;
