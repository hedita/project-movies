async function getMovies() {
  const result = await fetch("http://localhost:8080/");
  const resultJson = await result.json();
  const {results} = resultJson;

  const movieName = document.getElementById("movie-name");
  const movieTitle = resultJson.results[0].title;
  movieName.innerHTML = movieTitle;

  const movieRelease = document.getElementById("movie-release");
  const movieReleaseDate = resultJson.results[0].release_date;
  movieRelease.innerHTML = movieReleaseDate;
  
}

getMovies();