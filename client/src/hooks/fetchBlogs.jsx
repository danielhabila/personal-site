import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";

const fetchBlogs = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const graphqlAPI = import.meta.env.VITE_APP_HYGRAPH_ENDPOINT;

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
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
        setData(results.posts);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    getPost();
  }, []);

  return { data, loading, error };
};

export default fetchBlogs;
// ------------------------------------------------------------
