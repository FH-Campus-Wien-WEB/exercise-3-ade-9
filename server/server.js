const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

/* Task 1.2: Add a GET /genres endpoint:
   This endpoint returns a sorted array of all the genres of the movies
   that are currently in the movie model.
*/
app.get('/genres', (req, res) => {   //Collects all unique genres across movies and returns them sorted 
  const genreSet = new Set();  // using a Set avoids duplicates, as genres repeat across movies

  const moviesArray = Object.values(movieModel.movies);

  moviesArray.forEach(movie => {
    if(movie.Genres) {
      movie.Genres.forEach(genre => genreSet.add(genre));
    }
  });
  const sortedGenres = Array.from(genreSet).sort();
  res.json(sortedGenres);
});

/* Task 1.4: Extend the GET /movies endpoint:
   When a query parameter for a specific genre is given, 
   return only movies that have the given genre
 */
app.get('/movies', (req, res) => {

  const requestedGenre = req.query.genre;
  const moviesArray = Object.values(movieModel.movies);

  if (requestedGenre) { //If a genre query paramter is given, only matching movies are returned, otherwise full list

    const filteredMovies = moviesArray.filter(movie =>
      movie.Genres && movie.Genres.includes(requestedGenre)
    );
    res.json(filteredMovies);
  } else {
    res.json(moviesArray);
  }
});
 
// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {

  const requestedID = req.params.imdbID; // Takes the ID from the URL
  const movie = movieModel.movies[requestedID]; // looks into the movies object

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
}
});

app.put('/movies/:imdbID', function (req, res) {

  const requestedID = req.params.imdbID;
  const updatedMovieData = req.body;

  if (movieModel.movies[requestedID]) {
    movieModel.movies[requestedID] = updatedMovieData;
    res.sendStatus(200);
  } else {
    movieModel.movies[requestedID] = updatedMovieData;
    res.status(201).json(movieModel.movies[requestedID]);
  }
  });

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
