import React from 'react';


const SearchResults = () => (
    <section aria-label="Search results for all posts">
      <h2
        className="search-results-count"
        aria-live="assertive"
        >
        Found X posts on Y
        </h2>
      <ol className="search-results-list">
        <li>
          <h3 className="search-results-list__heading">
            <a href="#" className="search-results-list__link">Post 1</a>
          </h3>
          <small>May 26th, 2019</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ea ipsum adipisci assumenda rerum amet praesentium totam veritatis facilis! Eveniet, quae? Dicta, nihil vitae. Laudantium cum ex placeat vel optio!</p>
        </li>
        <li>
          <h3 className="search-results-list__heading">
            <a href="#" className="search-results-list__link">Post 1</a>
          </h3>
          <small>May 26th, 2019</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ea ipsum adipisci assumenda rerum amet praesentium totam veritatis facilis! Eveniet, quae? Dicta, nihil vitae. Laudantium cum ex placeat vel optio!</p>
        </li>
      </ol>
    </section>
  );



export default SearchResults;