import axios from "axios";

const fetchSearchResults = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://google-web-search1.p.rapidapi.com/',
    params: {
      query: query,
      limit: '20',
      related_keywords: 'true'
    },
    headers: {
      'X-RapidAPI-Key': 'a7c4e0ef98msh208f6c966d313cap17efb3jsn25b82dceed45',
      'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export default fetchSearchResults;


// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://google-search72.p.rapidapi.com/imagesearch',
//   params: {
//     q: 'Word Cup',
//     gl: 'us',
//     lr: 'lang_en',
//     num: '10',
//     start: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'a7c4e0ef98msh208f6c966d313cap17efb3jsn25b82dceed45',
//     'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
