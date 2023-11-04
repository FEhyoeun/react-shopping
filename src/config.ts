import axios from 'axios';

const BASE_URL = 'https://picsum.photos/v2';
export const GET_API = `${BASE_URL}/list?`;

export async function getAPICall(url: string, params: object) {
  try {
    const response = await axios.get(url, {
      params,
    });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
