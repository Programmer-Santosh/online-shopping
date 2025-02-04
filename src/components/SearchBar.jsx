import React from "react";
import "../css/searchBar.css";

import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <>
      <div className="searchBox !ml-6 flex items-center h-[40px] bg-[#e5e5e5] rounded-[10px]  relative ">
        <div>
          
          <input
            type="text" id="input-search"
            placeholder="Search for product"
            className="h-[20px] focus:outline-none p-2 text-[14px]"
          />
        </div>
        <div className="search-btn">
       
          <CiSearch  type="button" id="search-icon" />
      
        </div>
      </div>
    </>
  );
};

export default SearchBar;
