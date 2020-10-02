// TODO: add prod URL

export const baseApiUrl = process.env.NODE_ENV === 'production' ? 
  'http://8.9.4.25' :
  'http://127.0.0.1:5000'