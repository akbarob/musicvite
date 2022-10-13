import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`);
  };
  return (
    <form
      className="p-2 text-gray-400 focus-within:text-gray-700"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-6 h-6 ml-4" />
        <input
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500"
          name="search-field text-white p-4"
          id=""
          autoComplete=""
          type=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for songs..."
        />
      </div>
    </form>
  );
};
