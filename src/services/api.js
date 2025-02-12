import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesWithTopic = async (topic) => {
  const response = await axios.get(`/photos`, {
    params: {
      per_page: 12,
      query: topic,
    },
    headers: {
      Authorization: `Client-ID 4yDdelA9J6_di3z70Ccysjtb7rTkyKPDC1WwinsgP24`,
    },
  });

  console.log(response.data);

  return response.data;
};
