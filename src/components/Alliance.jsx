import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default function Alliance() {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------------------------------------------------------------------------
  //Filter Characters by the Alliance
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setSearch(res.data.affiliations);
        console.log(res.data[1].affiliations[1]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ---------------------------------------------------------------------------
  //
  // ---------------------------------------------------------------------------
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {data.map((all, i) => (
        <Card key={i} {...all} />
      ))}
    </div>
  );
}
