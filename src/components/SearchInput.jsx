import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFilteredPosts } from "../features/postSlice";

const SearchInput = ({ allPosts }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const postList = [];
  for (const id in allPosts) {
    if (Object.hasOwnProperty.call(allPosts, id)) {
      const postItem = allPosts[id];
      postList.push(postItem);
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const updateFilterResults = () => {
    const filteredResults = postList.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    dispatch(updateFilteredPosts(filteredResults));
  };

  useEffect(() => {
    updateFilterResults();
  }, [query]);

  return (
    <>
      <input
        type="text"
        id="searchInput"
        className="px-1 m-1 rounded-lg focus:outline-none"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchInput;