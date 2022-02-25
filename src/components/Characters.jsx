import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

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

  return <div>{data && data.map((all, i) => <Card key={i} {...all} />)}</div>;
}
