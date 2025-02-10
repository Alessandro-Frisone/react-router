// ---IMPORT FUNCTIONS--- //
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Ricette() {
  const [ricetta, setRicetta] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/bacheca/${id}`)
      .then((response) => {
        setRicetta(response.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [id, navigate]);


  return (
    <div className="container max-w-7xl mx-auto py-12 space-y-4">
      <h1 className="text-5xl font-bold text-[#d4bb9b] text-center mb-10">
        {ricetta.title}
      </h1>
      <img
        className="w-120 h-90 m-auto aspect-video object-cover mb-8"
        src={ricetta.image}
      />
      <p className="text-center mb-8">{ricetta.content}</p>
      <p className="text-center mb-7">
        {ricetta.tags?.map((tag) => `#${tag}`).join(" ")}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mx-auto px-6 py-3 bg-[#d4bb9b] text-white font-semibold rounded-lg shadow-md hover:bg-[#bfa07d] transition duration-300 flex items-center" 
      >
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
  );
}
