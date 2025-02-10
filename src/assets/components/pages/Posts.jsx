// ---IMPORT FUNCTIONS--- //
import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/bacheca").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(fetchPosts, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl mt-[35px]">RICETTE</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Card post={post}/>
        </div>
      ))}
    </div>
  );
}
