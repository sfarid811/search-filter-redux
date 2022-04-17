
import React from "react";

const SearchList = ({ filteredPosts }) => {
  return (
    <div>
      {filteredPosts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default SearchList;