import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesWithTopic = async (topic, page) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        per_page: 12,
        query: topic,
        page: page,
        orientation: "landscape",
      },
      headers: {
        Authorization: `Client-ID 4yDdelA9J6_di3z70Ccysjtb7rTkyKPDC1WwinsgP24`,
      },
    });

    console.log(response.data);

    return response.data.results;
  } catch (error) {
    console.log("Error in api:", error);
    return [];
  }
};

const API_KEY = "35290900-56ffde2696ef97590bed2c34b";
const URL = `https://pixabay.com/api/`;
const PerPage = 12;

export function fetchGalleryImg(searchQuery, page) {
  return fetch(
    `${URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
