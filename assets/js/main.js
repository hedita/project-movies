async function getMovies() {
  const result = await fetch("http://localhost:8080/");
  const resultJson = await result.json();
  const {results: movies} = resultJson;
  const movieList = document.getElementById("movie-list");
  const imgSrc = "./assets/test.jpg";
  let listHtml = "";

  movies.forEach(movie => {
    listHtml += `<li id="movie-item" class="movie-item">
    <a id="movie-link" href="./movie.html">
      <img id="img" class="img" src=${imgSrc}>
      <section class="movie-details">
        <h2 id="movie-name" class="movie-name">${movie.title}</h2>
        <p id="movie-release" class="movie-release">${movie.release_date}</p>
      </section>
    </a>
  </li>`;
  });
  movieList.innerHTML = listHtml;
}

getMovies();

movie.addEventListener("click", function() {

});