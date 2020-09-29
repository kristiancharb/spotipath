export const fetchArtists = async (src, dest) => {
  const url = `http://127.0.0.1:5000/path/?src=${src}&dest=${dest}`;
  const response = await fetch(url); 
  return await response.json();
}