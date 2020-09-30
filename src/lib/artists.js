import { baseApiUrl } from '../config';

export const fetchArtists = async (src, dest) => {
  const url = `${baseApiUrl}/path/?src=${src}&dest=${dest}`;
  const response = await fetch(url); 
  const jsonResponse = await response.json();
  if (!response.ok) {
    const message = jsonResponse?.error ?
      jsonResponse.error :
      'An error occurred. Please try again later.' 
    throw new Error(message);
  }
  return jsonResponse;
}