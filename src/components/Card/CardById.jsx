import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CardById() {
  const { id } = useParams();
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    affiliations,
    apprentices,
    born,
    bornLocation,
    cybernetics,
    homeworld,
    image,
    masters,
    name,
    species,
  } = data;

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .then((res) => {
        setData(res.data);
        setCharacters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // ---------------------------------------------------------------------------
  //
  // ---------------------------------------------------------------------------
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{affiliations}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{apprentices}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{masters}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{homeworld}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{born}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{bornLocation}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{cybernetics}
        </span>
      </div>
    </div>
  );
}
