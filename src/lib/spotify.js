import { baseApiUrl } from '../config';

let accessToken = null;

const request = async (url, options) => {
  const response = options ?
    await fetch(url, options) :
    await fetch(url); 
  const jsonResponse = await response.json();
  if (!response.ok) {
    const message = jsonResponse?.error ?
      jsonResponse.error :
      'An error occurred. Please try again later.' 
    throw new Error(message);
  }
  return jsonResponse;
}

const getSpotifyHeaders = () => {
  return { 
    headers: { 
      Authorization: `Bearer ${accessToken}`
    }
  };
}

const getArtistName = (track) => {
  if (Array.isArray(track.artists) && track.artists.length > 0) {
    return track.artists.map((artist) => artist.name).join(', ');
  }
}

const getArtistId = (track) => {
  if (Array.isArray(track.artists) && track.artists.length > 0) {
    return track.artists[0].id;
  }
}

const getAlbumImageUrl = (track) => {
  const defaultImageUrl = 'http://via.placeholder.com/300x180';
  if (track.hasOwnProperty('album') && 
    Array.isArray(track.album.images) &&
    track.album.images.length > 0
  ) {
    return track.album.images[0].url;
  } else {
    return defaultImageUrl;
  }
}


const setAccessToken = async () => {
  const url = `${baseApiUrl}/access-token/`
  try {
    const response = await request(url);
    accessToken = response.token;
    console.log(accessToken);
  } catch (error) {
    console.error('Failed to get access token');
    console.error(error.message);
  }
}

const getPath = async (src, dest) => {
  const url = `${baseApiUrl}/path/?src=${src}&dest=${dest}`;
  return request(url)
}

const getTracks = async (artist, numSongs, recommended) => {
  const url = recommended ? 
    `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=${artist.id}` :
    `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`;
  const response = await request(url, getSpotifyHeaders());
  const tracks = response.tracks;
  return tracks.slice(0, numSongs).map((track) => (
    {
      id: track.id,
      name: track.name,
      artistId: getArtistId(track),
      artistName: getArtistName(track),
      imageUrl: getAlbumImageUrl(track),
    }
  ));
}

export const getArtistData = async (formData) => {
  const artists = await getPath(formData.src, formData.dest);
  for (const artist of artists) {
    artist.tracks = await getTracks(artist, formData.numSongs, formData.recommended);
  }
  return artists;
}

setAccessToken();
