// ---IMPORT FUNCTIONS--- //
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(false);

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
        <div
          key={post.id}
          className="mt-[35px] mb-[35px] border border-gray-300 px-4 py-2 text-lg rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
          onClick={() => setSelectedPost(post)}
        >
          <p className="text-center text-3xl">{post.title}</p>
          <p className="text-center mt-[35px] ">{post.content}</p>
          <img className="mx-auto mt-4 w-130 h-80" src={post.image} alt={post.title} />
          <p className="text-center mt-4">{post.tags.map(tag => `#${tag}`).join(' ')}</p>
        </div>
      ))}

      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedPost(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black px-2 py-1 rounded-full text-lg font-bold"
              onClick={() => setSelectedPost(false)}
            >
              ✖
            </button>
            <p className="text-center text-3xl mb-4">{selectedPost.title}</p>
            <img className="mx-auto mb-4 w-full h-80 object-cover rounded" src={selectedPost.image} alt={selectedPost.title} />
            <p className="text-center mb-4">{selectedPost.content}</p>
            <p className="text-center">{selectedPost.tags.map(tag => `#${tag}`).join(' ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
