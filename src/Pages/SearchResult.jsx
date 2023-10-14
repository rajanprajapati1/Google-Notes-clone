import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Search from "../components/search";
import Searchsuggestion from "../components/Searchsuggestion";
import Data from "../Data/Data";
import ResultCard from "../components/ResultCard";
import fetchSearchResults from "../utils/fetchSearchResults";

const SearchResult = ({ ApiData, HandleShow, handleKeyDown }) => {
  const { value } = useParams();
  const [Results, SetResults] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const getresult = await fetchSearchResults(value);
      SetResults(getresult.results);
    };
    getdata();
  }, [value]);

  return (
    <div className="searchresult_Section">
      <div className="navbar_search">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="main_searchbar">
          <Search
            value={value}
            HandleShow={HandleShow}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="nav_menu">
        <div className="menus">
          {Data.map((val, i) => {
            return (
              <NavLink href="" className="active" key={i}>
                <val.logo className="logo" />
                {val.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="results">
        <div className="boxes">
          {Results.map((val, index) => {
            return <ResultCard key={index} Results={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
