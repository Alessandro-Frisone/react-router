// ---IMPORT FUNCTIONS--- //
import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <Link to={`/Posts/${post.id}`}>
      <div className="mt-[35px] mb-[35px] border border-gray-300 px-4 py-2 text-lg rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 cursor-pointer">
        <p className="text-center text-3xl">{post.title}</p>
        <p className="text-center mt-[35px] ">{post.content}</p>
        <img
          className="mx-auto mt-4 w-130 h-80"
          src={post.image}
          alt={post.title}
        />
        <p className="text-center mt-4">
          {post.tags.map((tag) => `#${tag}`).join(" ")}
        </p>
      </div>
    </Link>
  );
}
