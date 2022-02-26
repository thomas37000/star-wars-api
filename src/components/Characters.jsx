import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default function Character() {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [data, setData] = useState([]);
  // console.log(data);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then((res) => {
        setData(res.data);
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
      {data && data.map((all, i) => <Card key={i} {...all} />)}
    </div>
  );
}
