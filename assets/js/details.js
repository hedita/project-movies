  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");
  const apiKey = "9f120f0e95e5cedf05a78abda9ef8477";
  const detailsContainer = document.getElementById("details-container");
  
  async function getMovieDetails () {
   const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
   const {poster_path: img, title, vote_average, overview} = await result.json();

   document.body.style = ` background-image: linear-gradient(
      var(--primary-gradient-color),
      var(--secondery-gradient-color)),
      url("https://image.tmdb.org/t/p/w342/${img}");`

  detailsContainer.innerHTML = `<img id="movie-img" class="img" src="https://image.tmdb.org/t/p/w342/${img}" />
   <figcaption class="details">
     <h2 id="movie-name" class="movie-name"${title}></h2>
     <p id="rate" class="rate">${vote_average}</p>
     <p id="over-view" class="summary">${overview}</p>
   </figcaption>` 
}

getMovieDetails();