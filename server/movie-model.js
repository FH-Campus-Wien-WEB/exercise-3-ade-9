/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const movies = {
  
  tt2543164: {
    imdbID: `tt2543164`,
    Title: `Arrival`,
    Released: `2016-11-11`,
    Runtime: 116,
    Genres: [`Drama`, `Mystery`, `Sci-Fi`],
    Directors: [`Denis Villeneuve`],
    Writers: [`Eric Heisserer`, `Ted Chiang`],
    Actors: [`Amy Adams`, `Jeremy Renner`, `Forest Whitaker`],
    Plot: `Linguist Louise Banks leads a team of investigators when gigantic spaceships touch down around the world. As nations teeter on the verge of global war, Banks and her crew must find a way to communicate with the extraterrestrial vi...`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg`,
    Metascore: 81,
    imdbRating: 7.9
  },


  tt1375666: {
    imdbID: `tt1375666`,
    Title: `Inception`,
    Released: `2010-07-16`,
    Runtime: 148,
    Genres: [`Action`, `Adventure`, `Sci-Fi`],
    Directors: [`Christopher Nolan`],
    Writers: [`Christopher Nolan`],
    Actors: [`Leonardo DiCaprio`, `Joseph Gordon-Levitt`, `Elliot Page`],
    Plot: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg`,
    Metascore: 74,
    imdbRating: 8.8
  },


  tt6710474: {
    imdbID: `tt6710474`,
    Title: `Everything Everywhere All at Once`,
    Released: `2022-04-08`,
    Runtime: 139,
    Genres: [`Action`, `Adventure`, `Comedy`],
    Directors: [`Daniel Kwan`, `Daniel Scheinert`],
    Writers: [`Daniel Kwan`, `Daniel Scheinert`],
    Actors: [`Michelle Yeoh`, `Stephanie Hsu`, `Jamie Lee Curtis`],
    Plot: `A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.`,
    Poster: `https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_SX300.jpg`,
    Metascore: 81,
    imdbRating: 7.7
  },

  tt0088930: {
  imdbID: `tt0088930`,
  Title: `Clue`,
  Released: `1985-12-13`,
  Runtime: 94,
  Genres: [`Comedy`, `Crime`, `Mystery`],
  Directors: [`Jonathan Lynn`],
  Writers: [`John Landis`, `Jonathan Lynn`, `Anthony E. Pratt`],
  Actors: [`Eileen Brennan`, `Tim Curry`, `Madeline Kahn`],
  Plot: `Six guests are anonymously invited to a strange mansion for dinner, but after their host is killed, they must cooperate with the staff to identify the murderer as the bodies pile up.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMzMwZTY3ZGItYTY3Zi00YTRmLWE3Y2UtYWE1NmMwZDVjMmYxXkEyXkFqcGc@._V1_SX300.jpg`,
  Metascore: 41,
  imdbRating: 7.3
},

tt0347149: {
  imdbID: `tt0347149`,
  Title: `Howl's Moving Castle`,
  Released: `2005-06-17`,
  Runtime: 119,
  Genres: [`Animation`, `Adventure`, `Family`],
  Directors: [`Hayao Miyazaki`],
  Writers: [`Diana Wynne Jones`, `Hayao Miyazaki`],
  Actors: [`Chieko Baishô`, `Takuya Kimura`, `Tatsuya Gashûin`],
  Plot: `When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_SX300.jpg`,
  Metascore: 82,
  imdbRating: 8.2
},

tt2948372: {
  imdbID: `tt2948372`,
  Title: `Soul`,
  Released: `2020-12-25`,
  Runtime: 100,
  Genres: [`Animation`, `Adventure`, `Comedy`],
  Directors: [`Pete Docter`, `Kemp Powers`],
  Writers: [`Pete Docter`, `Mike Jones`, `Kemp Powers`],
  Actors: [`Jamie Foxx`, `Tina Fey`, `Graham Norton`],
  Plot: `Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BZTZkYjA5MDEtMjY1ZC00ODk5LThjOTUtZDYxODEzYWNjMTU2XkEyXkFqcGc@._V1_SX300.jpg`,
  Metascore: 83,
  imdbRating: 8.0
},

tt0211915: {
  imdbID: `tt0211915`,
  Title: `Amélie`,
  Released: `2002-02-08`,
  Runtime: 122,
  Genres: [`Comedy`, `Romance`],
  Directors: [`Jean-Pierre Jeunet`],
  Writers: [`Guillaume Laurant`, `Jean-Pierre Jeunet`],
  Actors: [`Audrey Tautou`, `Mathieu Kassovitz`, `Rufus`],
  Plot: `Despite being caught in her imaginative world, young waitress Amelie decides to help people find happiness. Her quest to spread joy leads her on a journey during which she finds true love.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg`,
  Metascore: 70,
  imdbRating: 8.3
}

};

module.exports = {movies}; // Exports the object so server.js can use it