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
