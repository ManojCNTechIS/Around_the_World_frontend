import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Imgsearch from "../../assets/img/search.svg";
import React from 'react';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

  return (
    <section className="search">
      <div className="search-container">
        <h1>The Ulitmate Travel Guide</h1>
        <form onSubmit={submitAction} className="form">
          <input
            className="search-bar"
            name="search"
            type="inputbox"
            onChange={inputSearch}
            placeholder="Find your destination"
          />
          <a href="null">
            <img
              className="search-icon"
              onClick={() => {
                alert("test");
              }}
              src={Imgsearch}
              alt=""
            />
          </a>
        </form>
      </div>
    </section>
  );
};

export default Search;
