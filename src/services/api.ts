import axios from "axios";
import { Image } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesWithTopic = async (
  topic: string,
  page: number
): Promise<Image[]> => {
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

    const results: Image[] = response.data.results.map((item: any) => ({
      id: item.id,
      alt_description: item.alt_description,
      urls: {
        small: item.urls.small,
        regular: item.urls.regular,
      },
    }));

    return results;
  } catch (error) {
    console.log("Error in api:", error);
    return [];
  }
};
