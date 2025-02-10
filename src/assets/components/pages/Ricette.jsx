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
        <h1 className="text-3xl font-bold text-yellow-500 mb-6">
        {ricetta.title}
      </h1>
      <img className="w-full aspect-video object-cover" src={ricetta.image} />
      {ricetta.ingredients && (
        <ul>
          {ricetta.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
      <p>{ricetta.content}</p>
    </div>
  )
}
