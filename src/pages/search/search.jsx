import React from "react";
import HeaderMobile from "../../components/headerMobile/headerMobile";
import ButtonNavigations from "../../components/buttonNavigations/buttonNavigations";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";


const Search = () => {

 
  return (
    <>
      <HeaderMobile />
      <div   className="flex bg-[#f2f2f2] w-[358px h-[44px] top-[6px] left-[17px] rounded-[10px] relative">
        <IconContext.Provider  value={{ color: "#a7a7a7" }}>
          <IoIosSearch
            type="text"
            placeholder="Search for a dish"
            className="bg-[#f2f2f2] w-4 h-4 left-[16px] relative top-[13px]"
           
          />
        </IconContext.Provider>
        <input
          
          type="text"
          placeholder="Search for a dish"
          className="bg-[#f2f2f2] w-auto h-4 top-[13px] relative left-[26px] input"
          name="searchText"
          
        />
      </div>

      <p className="w-auto relative left-4 top-4">Recent searches</p>
     
      <ButtonNavigations />
    </>
  );
};

export default Search;
