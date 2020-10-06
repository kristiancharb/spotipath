# Spotipath

[Demo](https://kristiancharb.github.io/spotipath/)

Spotipath was inspired by [Boil the Frog](http://boilthefrog.playlistmachinery.com/).
I thought it was a really cool way of using the Spotify API and decided I wanted to try my hand
at recreating it and maybe figuring out a way to put my own spin on it. 

Spotipath is a web app that lets you explore artist relationships through Spotify. Search
for two artists and it'll show the path connecting them through related artists, along with the top songs 
from each artist. Additionally, adjust the following parameters for playlist generation:
  - Include only songs from artists in the path or Spotify recommended songs based on those artists
  - The number of songs for each artist

### How to run the app

This app was created with create-react-app.

Ensure Spotipath API is running locally on port 5000

Run:
```
$ npm install 
$ npm run start
```

[Spotipath API GitHub](https://github.com/kristiancharb/spotipath-app)