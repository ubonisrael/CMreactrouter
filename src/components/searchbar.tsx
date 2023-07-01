import React from 'react'
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="w-full relative">
        <input
          id="search"
          name="search"
          className="w-full p-1 pl-6 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md "
          type="text"
          placeholder="Search..."
        />
        <div className="absolute inset-0 w-6 flex items-center justify-center dark:text-white">
          <MdSearch />
        </div>
      </div>
  )
}

export default SearchBar