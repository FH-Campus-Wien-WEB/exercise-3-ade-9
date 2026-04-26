import { ElementBuilder, ParentChildBuilder } from "./builders.js";

const genreColors = {  // using specific colors for genres
                            "Action":      "#b83434",
                            "Adventure":   "#e8ac4d",
                            "Sci-Fi":      "#629390",
                            "Drama":       "#3953b8",
                            "Mystery":     "#2e3b32",
                            "Comedy":      "#6a48a1",
                            "Animation":   "#d96d2c",
                            "Biography":   "#7a5a3a",
                            "Crime":       "#4a1f1f",
                            "Documentary": "#4a6670",
                            "Family":      "#c66b8d",
                            "Fantasy":     "#7a4ec4",
                            "Film Noir":   "#2a2a2a",
                            "History":     "#8a6d1f",
                            "Horror":      "#5c0f0f",
                            "Music":       "#1f6e8a",
                            "Musical":     "#b83a7d",
                            "Romance":     "#a02d4a",
                            "Short":       "#5e7a3a",
                            "Short Film":  "#5e7a3a",
                            "Sport":       "#2d7a4a",
                            "Superhero":   "#1c4a8a",
                            "Thriller":    "#3a3a52",
                            "War":         "#4d5a2e",
                            "Western":     "#9c5a2a",
                        };

class ParagraphBuilder extends ParentChildBuilder {
  constructor() {
    super("p", "span");
  }
}

class ListBuilder extends ParentChildBuilder {
  constructor() {
    super("ul", "li");
  }
}

function formatRuntime(runtime) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h " + minutes + "m";
}

function appendMovie(movie, element) {  //renders a single movie card and then appends it to the given parent

      function createListSection(title, items) { //creates the name lists without repeating code
                            const nameContainer = document.createElement("section");

                            const listHeading = document.createElement("h3");
                            listHeading.textContent = title;
                            nameContainer.appendChild(listHeading);

                            const namesElement = document.createElement("span");
                            namesElement.textContent = items.join(", ");
                            nameContainer.appendChild(namesElement);

                            return nameContainer;                           
                        }

          
           const movieArticle = document.createElement("article");
           movieArticle.id = movie.imdbID;

                        // Adding the poster
                        const img = document.createElement("img");
                        img.src = movie.Poster;
                        movieArticle.appendChild(img);
                        img.alt = "No poster available";

                        //wraps all the text into a container sitting next to the image
                        const contentDiv = document.createElement("div");
                        contentDiv.classList.add("movie-content");

                        const titleElement = document.createElement("h2");
                        titleElement.textContent = movie.Title;
                        contentDiv.appendChild(titleElement);
                        
                                      
                        //Genres:                                              
                        const genreContainer = document.createElement("div");
                        genreContainer.classList.add("genre-list");

                        for (const genre of movie.Genres) {
                            const tag = document.createElement ("span");
                                tag.textContent = genre;
                                tag.classList.add("genre-tag");
                                
                                const color = genreColors[genre] || "#555555"; // setting grey as a fallback color
                                tag.style.backgroundColor = color;

                                genreContainer.appendChild(tag);
                        }


                        //Create Container for MetaData
                        const metaBar = document.createElement("div");
                        metaBar.classList.add("movie-data");
                        
                        //Released:
                        const releaseElement = document.createElement("time"); //using semantic <time> tag for SEO and screen readers
                        releaseElement.setAttribute("datetime", movie.Released);
                        releaseElement.innerHTML = "<strong>Released: </strong>" + movie.Released;
                        metaBar.appendChild(releaseElement);


                        //Runtime:
                        const runtimeElement = document.createElement("data"); //using semantic <data> tag for machine-readable numbers
                        runtimeElement.value = movie.Runtime;
                        runtimeElement.innerHTML = "<strong>Duration: </strong>" + movie.Runtime + " min";
                        metaBar.appendChild(runtimeElement);

                        metaBar.appendChild(genreContainer);
                        contentDiv.appendChild(metaBar);
                        

                        //Plot:
                        const plotElement = document.createElement("p"); //using paragraph for plot text
                        plotElement.textContent = movie.Plot;
                        contentDiv.appendChild(plotElement);


                        //placing the name lists using the helper function:                            
                        contentDiv.appendChild(createListSection("Directors", movie.Directors));
                        contentDiv.appendChild(createListSection("Writers", movie.Writers));
                        contentDiv.appendChild(createListSection("Actors", movie.Actors));

                        //Ratings:
                        const ratingContainer = document.createElement("div");
                        ratingContainer.classList.add("movie-ratings");

                        const metaScoreSpan = document.createElement("span");
                        metaScoreSpan.innerHTML = "<strong>Metascore: </strong> " + movie.Metascore;
                        ratingContainer.appendChild(metaScoreSpan);

                        const imdbRatingSpan = document.createElement("span");
                        imdbRatingSpan.innerHTML = "<strong>IMDb: </strong> " + movie.imdbRating + "/10";
                        ratingContainer.appendChild(imdbRatingSpan);

                        contentDiv.appendChild(ratingContainer); //placing the ratings


                        //Edit-Button:

                        const editButton = document.createElement("button");
                        editButton.textContent = "Edit";
                        editButton.classList.add("edit-btn"); 

                        editButton.onclick = function() {
                          window.location.href = "edit.html?imdbID=" + movie.imdbID;
                        };

                        contentDiv.appendChild (editButton);
                        
                          // putting the text block into the article
                          movieArticle.appendChild(contentDiv);
                    
                          //putting the whole article onto the page
                          element.appendChild(movieArticle);
                      }


function loadMovies(genre = '') {  //loads all movies and rerenderes the main element
 
  const xhr = new XMLHttpRequest();
  const url = new URL("/movies", location.href);

  if (genre !== '') {
    url.searchParams.set('genre', genre);
  }

  xhr.open('GET', url);
  xhr.onload = function() {

    const mainElement = document.querySelector("main");

    while (mainElement.childElementCount > 0) {
      mainElement.firstChild.remove();
    }

    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText)
      for (const movie of movies) {
        appendMovie(movie, mainElement)
      }
    } else {
      mainElement.append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  };
  

  /* Task 1.4. Add query parameter to the url if a genre is given */


  xhr.send()
}

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const listElement = document.querySelector("nav>ul");

    if (xhr.status === 200) {
      /* Task 1.3. Add the genre buttons to the listElement and 
         initialize them with a click handler that calls the 
         loadMovies(...) function above. */

          const genres = JSON.parse(xhr.responseText);

          const allLi = document.createElement('li');
          const allBtn = document.createElement('button');
          allBtn.textContent = 'All';
          allBtn.classList.add('genre-btn');
          allBtn.style.backgroundColor = '#333'
          allBtn.onclick = () => loadMovies('');
          allLi.appendChild(allBtn);
          listElement.appendChild(allLi);

          for (const genre of genres) { // Builds a button per genre
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = genre;
            btn.classList.add('genre-btn');

            const genreColor = genreColors[genre] || '#555555';
            btn.style.backgroundColor = genreColor;

            btn.onclick = () => loadMovies(genre);
            li.appendChild(btn);
            listElement.appendChild(li);
          }

      /* When a first button exists, we click it to load all movies. */
      const firstButton = document.querySelector("nav button");
      if (firstButton) {
        firstButton.click();
      }
    } else {
      document.querySelector("body").append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.open("GET", "/genres");
  xhr.send();
};
