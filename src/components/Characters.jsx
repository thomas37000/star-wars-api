import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default function Character() {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [data, setData] = useState([]);
  // console.log(data);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const filterApi =
    data &&
    data.filter((val) => {
      if (search === "") return val;
      return val.name.toLowerCase().includes(search.toLowerCase());
    });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
    <>
      <div className="flex justify-center my-5">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            search a character from Star Wars
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Yoda"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {filterApi.map((all, i) => (
          <Card key={i} {...all} />
        ))}
      </div>
    </>
  );
}
