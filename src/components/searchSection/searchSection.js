import React from 'react';
import Input from './../inputComponent/input';

import './../../Assets/css/input.min.css';
function SearchSection() {
  return (
    <section className="search page_search">
      <div className="search-container">
        <p className="search__text"><span className="search__text--green">Job Portal</span> will help you to find the perfect job.</p>
        <p className="search__text">Perfect job at the city.</p>
        <form className="search__form">
          <Input placeholder="Country" />
          <Input placeholder="Location" />
          <Input placeholder="I'm looking for..." />
          <button className="search__button">Search</button>
        </form>
      </div>
      <div className="map-container">
        <img src={require('./../../images/map.png')} alt="map" width="500px" height="auto" />
      </div>
    </section >
  );
}

export default SearchSection;