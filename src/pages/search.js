import React, { useState } from 'react';
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import SearchForm from "../components/searchForm";
import SearchResults from "../components/searchResults";

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


const Search = ({
    data,
    location
  }) => {
    const [results, setResults] = useState([]);

    if (window.__LUNR__) {
        window.__LUNR__.__loaded.then(lunr => {
          const refs = lunr.en.index.search('interesting things');
          const posts = refs.map(({ ref }) => lunr.en.store[ref]);    
          setResults(posts);            
        });
      }

    return (
      <Layout location={location} title={data.site.siteMetadata.title}>
        <SearchForm />
        <SearchResults />
      </Layout>
    );
  };

export default Search;