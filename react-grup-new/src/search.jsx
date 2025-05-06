import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>
        <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
