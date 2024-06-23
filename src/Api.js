import axios from "axios";

const fetchApi = async () => {
  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/seller-products",
    params: {
      seller_id: "A02211013Q5HP3OMSZC7W",
      country: "US",
      page: "1",
    },
    headers: {
      "x-rapidapi-key": "f199d68e7bmsh2e74ed73a9c57f6p12d44djsnbb09ba75b362",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const { data } = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
export default fetchApi;
