import axios from "axios";

export const fetchDatasFromAPI = async (parsedUrl: string) => {
  try {
    const { data, status } = await axios.get<API_Response>(parsedUrl);

    if (status === 200) {
      return data;
    }
    throw new Error();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
