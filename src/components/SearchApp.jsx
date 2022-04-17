import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import { fetchPosts, postSelectors } from "../features/postSlice";

const SearchApp = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(postSelectors.selectEntities);
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);



  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container bg-red-300 p-1">
      <div className=" bg-yellow-200 px-4 py-2">
        <div className="bg-gray-300 px-1">
          <SearchInput allPosts={allPosts} />
        </div>
        <SearchList filteredPosts={filteredPosts} />
        <p className="text-slate-700 text-2xl">{filteredPosts.length}</p>
      </div>
    </div>
  );
};

export default SearchApp;