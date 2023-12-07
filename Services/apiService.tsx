import axios from 'axios';
import { useState } from 'react';

export const getSuggestions = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://wayfair.p.rapidapi.com/auto-complete',
    params: {
      query: 'red pillow'
    },
    headers: {
      'X-RapidAPI-Key': '746875383emshdf688801aac8de7p14ceeajsnec7a7a2de96f',
      'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};



export const getProductSearch = async (searchKeyword) => {
  const [searchResults, setSearchResults] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://wayfair.p.rapidapi.com/products/search',
    params: {
      keyword: searchKeyword,
    },
    headers: {
      'X-RapidAPI-Key': '746875383emshdf688801aac8de7p14ceeajsnec7a7a2de96f',
      'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    }
  };
  
    try {
      const response = await axios.request(options);
      console.log("neetu",response.data);
      setSearchResults(response.data.response.categoryAppData.categories);
    } catch (error) {
      console.error(error);
    }
  };
  
