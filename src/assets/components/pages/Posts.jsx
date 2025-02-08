// ---IMPORT FUNCTIONS--- //
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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
        <div key={post.id} className="mt-[35px] mb-[35px] border border-gray-300 px-4 py-2 text-lg rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
          <p className="text-center text-3xl">{post.title}</p>
          <p className="text-center mt-[35px] ">{post.content}</p>
          <img className="mx-auto mt-4 w-130 h-80" src={post.image} alt={post.title} onClick={() => setSelectedImage(post.image)}/>
          <p className="text-center mt-4">{post.tags.map(tag => `#${tag}`).join(' ')}</p>
        </div>
      ))}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4">
            <img
              className="max-w-full max-h-[90vh] rounded-lg"
              src={selectedImage}
              alt="Ingrandita"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full text-lg font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

