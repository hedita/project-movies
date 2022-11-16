async function getMovies() {
  const result = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9f120f0e95e5cedf05a78abda9ef8477&language=en-US&page=1");
  const resultJson = await result.json();
  const {results: movies} = resultJson;
  const movieList = document.getElementById("movie-list");
  const imgSrc = "./assets/test.jpg";
  let listHtml = "";

  movies.forEach(movie => {
    listHtml += `<li id="movie-item" class="movie-item">
    <a id="movie-link" href="./movie.html?id=${movie.id}">
      <img id="img" class="img" src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" />
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