import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children, item }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const url = `https://croma-b97df-default-rtdb.asia-southeast1.firebasedatabase.app/Product/${item}.json`;

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response)
        const filteredResults = response.data.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredResults)
        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [query, url]); 

  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};
