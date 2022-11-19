const apiKey = "9f120f0e95e5cedf05a78abda9ef8477";

async function getMovies() {
  const result = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  const resultJson = await result.json();
  const {results: movies} = resultJson;
  const movieList = document.getElementById("movie-list");
  let listHtml = "";

  movies.forEach(({id,poster_path: img,title,release_date}) => {
    listHtml += `<li class="movie-item">
    <a href="./movie.html?id=${id}">
      <img class="img" src="https://image.tmdb.org/t/p/w342/${img}" />
      <section class="movie-details">
        <h2 class="movie-name">${title}</h2>
        <p class="movie-release">${release_date}</p>
      </section>
    </a>
  </li>`;
  });
  movieList.innerHTML = listHtml;

}
getMovies();