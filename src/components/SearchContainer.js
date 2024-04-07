import React from 'react'
import { ImCancelCircle } from 'react-icons/im';
import { IoIosSearch } from 'react-icons/io';

const SearchContainer = ({setSearchClicked}) => {
  return (
    <div className="w-full flex items-center justify-between  px-10 py-5 bg-white text-black">
      <div className="flex  flex-col justify-center gap-3 lg:gap-5">
        
        <div className="border w-full border-gray-800" />

        <div className="flex justify-between items-center gap-2 lg:gap-4 xl:gap-5">
          <div className='flex  items-center'>
          <IoIosSearch size={30} className="cursor-pointer" />

          <input
            type="text"
            placeholder="search item here.."
            className="-ml-2 py-2 lg:py-3 pl-3 lg:pl-5 pr-2 text-gray-300 border-none outline-none"
          />
          </div>


          <ImCancelCircle
            size={30}
            className="cursor-pointer "
            onClick={() => setSearchClicked(false)}
          />
        </div>

      </div>
    </div>
  );
}

export default SearchContainer
