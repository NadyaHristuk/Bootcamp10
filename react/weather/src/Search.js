import React from "react";

const Search = ({ getInput }) => (
  <form onSubmit={getInput}>
    <input type="text" name="city" />
    <input type="submit" />
  </form>
);

export default Search;
