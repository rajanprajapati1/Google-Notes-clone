import React from "react";

const Searchsuggestion = ({AiOutlineSearch, showresult, searchValue ,ApiData}) => {
  return (
    <>
      {showresult && (
        <div hidden className="search_result">
        {
          ApiData.map((val,i)=>{

          return(  <li key={i}>
            <AiOutlineSearch className="serachicon" /> {val.htmlFormattedUrl}
          </li>)
          })
        }
          <li>
            <AiOutlineSearch className="serachicon" /> {searchValue}
          </li>
        </div>
      )}
    </>
  );
};

export default Searchsuggestion;
