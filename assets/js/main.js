async function getMovies() {
  const result = await fetch("http://localhost:8080/");
  const resultJson = await result.json();
  const {results} = resultJson;
  const movieList = document.getElementById("movie-list");
  const imgSrc = "./assets/test.jpg";
  listHtml = "";

  results.forEach(movie => {
    const movieTitle = resultJson.results[0].title;
    const movieReleaseDate = resultJson.results[0].release_date;
    listHtml += `<li class="movie-item">
    <a href="./movie.html">
      <img id="img" class="img" src=${imgSrc}>
      <section class="movie-details">
        <h2 id="movie-name" class="movie-name">${movie.title}</h2>
        <p id="movie-release" class="movie-release">${movie.release_date}</p>
      </section>
    </a>
  </li>`
  console.log(movie.title)
  });
  movieList.innerHTML = listHtml;
}

getMovies();