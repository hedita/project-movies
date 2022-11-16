  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");
  const apiKey = "9f120f0e95e5cedf05a78abda9ef8477";
  
  async function getMovieDetails () {
   const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
   const resultJson = await result.json();

   const movieName = document.getElementById("movie-name");
   const movieImg = document.getElementById("movie-img");
   const movieRate = document.getElementById("rate");
   const movieOverView = document.getElementById("over-view");
   const detailsContainer = document.getElementById("details-container");

   document.body.style = ` background-image: linear-gradient(
      var(--primary-gradient-color),
      var(--secondery-gradient-color)),
      url("https://image.tmdb.org/t/p/w342/${resultJson.poster_path}");`

  detailsContainer.innerHTML = `<img id="movie-img" class="img" src="https://image.tmdb.org/t/p/w342/${resultJson.poster_path}" />
   <figcaption class="details">
     <h2 id="movie-name" class="movie-name"${resultJson.title}></h2>
     <p id="rate" class="rate">${resultJson.vote_average}</p>
     <p id="over-view" class="summary">${resultJson.overview}</p>
   </figcaption>` 
}

getMovieDetails();