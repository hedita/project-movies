  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");
  const apiKey = "9f120f0e95e5cedf05a78abda9ef8477";
  
  async function getMovieDetails () {
   const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?${apiKey}`);
   const resultJson = await result.json();
   const {results: movies} = resultJson;
}

getMovieDetails();
