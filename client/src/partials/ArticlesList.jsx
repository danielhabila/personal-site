import React from "react";

import ArticleItem from "../partials/ArticleItem";

import Post01 from "../images/post-thumb-01.jpg";
import Post02 from "../images/post-thumb-02.jpg";
import Post03 from "../images/post-thumb-03.jpg";
import Post04 from "../images/post-thumb-04.jpg";
import Post05 from "../images/post-thumb-05.jpg";
import Post06 from "../images/post-thumb-06.jpg";
import Post07 from "../images/post-thumb-07.jpg";
import Post08 from "../images/post-thumb-08.jpg";

function ArticlesList() {
  const items = [
    {
      id: 0,
      title: "An Interactive Guide to Flexbox",
      slug: "/post",
      image: Post01,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 1,
      title: "Fuzzy Logic in a Hurry",
      slug: "/post",
      image: Post02,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 2,
      title: "Machine Learning for Humans",
      slug: "/post",
      image: Post03,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 3,
      title: "Writing My First Security Blogpost",
      slug: "/post",
      image: Post04,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 4,
      title: "10 YouTube Channels That Will Make You Smarter",
      slug: "/post",
      image: Post05,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 5,
      title: "How to Control CSS Animations with JavaScript",
      slug: "/post",
      image: Post06,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 6,
      title: "Lies You've Been Told About Podcasting",
      slug: "/post",
      image: Post07,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
    {
      id: 7,
      title: "How to Extend Prototypes with JavaScript",
      slug: "/post",
      image: Post08,
      date: "Dec 24, 2023",
      excerpt:
        "Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed.",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <h2 className="font-aspekta text-xl md:text-4xl font-[650] mb-3">
          Latest Articles
        </h2>

        {/* Articles list */}
        <div>
          {items.map((item) => {
            return (
              <ArticleItem
                key={item.id}
                id={item.id}
                title={item.title}
                slug={item.slug}
                image={item.image}
                date={item.date}
                excerpt={item.excerpt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ArticlesList;
