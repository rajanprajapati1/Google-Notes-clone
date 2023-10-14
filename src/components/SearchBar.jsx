  import React, { useState, useEffect } from "react";
  import { AiOutlineSearch } from "react-icons/ai";
  import { useNavigate } from "react-router-dom";
  import fetchSearchResults from "../utils/fetchSearchResults";
  import Search from "./search";
  import Searchsuggestion from "./Searchsuggestion";
  const SearchBar = ({value}) => {
    const [showresult, Setshowresult] = useState(false);
    const [searchValue, SetSearchValue] = useState(value || "");
    const [ApiData, setApiData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    const handleOutsideClick = (e) => {
      if (!e.target.closest(".main_searchbar")) {
        Setshowresult(false);
      }
    };
    const HandleShow = (e) => {
      SetSearchValue(e.target.value);
      Setshowresult(true);
    };
    const handleKeyDown = async (e) => {
      if (e.key === "Enter") {
        const results = await fetchSearchResults(searchValue);
        setApiData(results);
        navigate(`/search/${searchValue}`);
        Setshowresult(false);
      }
    };

    return (
      <div className="Searchbar">
        <div className="main_searchbar">
          <Search HandleShow={HandleShow} handleKeyDown={handleKeyDown} 
          SetSearchValue={SetSearchValue}
          setApiData={setApiData}
           /> 
        </div>
        <Searchsuggestion
          AiOutlineSearch={AiOutlineSearch}
          showresult={showresult}
          searchValue={searchValue}
          ApiData={ApiData}
        />
      </div>
    );
  };

  export default SearchBar;
