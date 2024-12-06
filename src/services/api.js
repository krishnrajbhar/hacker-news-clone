import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1";

export const searchHackerNews = async (query, page = 0) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { query, page },
  });
  return response.data;
};
