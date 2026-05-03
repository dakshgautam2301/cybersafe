import axios from "axios";

const API_KEY = "2091a35d0004568e85a7f1c81f148292";

export const fetchThreatNews = async () => {
  const response = await axios.get(
    `https://gnews.io/api/v4/search?q=cybersecurity&token=${API_KEY}`
  );

  return response.data.articles;
};