import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchAllCharacters = async (
  page: number = 1,
  search: string = ""
) => {
  try {
    const response = await axios.get(
      `${API_URL}/character?page=${page}&name=${search}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching characters");
  }
};

export const fetchCharacterById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching character");
  }
};
