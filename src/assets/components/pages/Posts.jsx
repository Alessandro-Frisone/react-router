// ---IMPORT FUNCTIONS--- //
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/bacheca").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(fetchPosts, []);

  return (
    <div>
      <h1>POST</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <img src={post.image} alt={post.title} />
          <p>{post.tags}</p>
        </div>
      ))}
    </div>
  );
}
