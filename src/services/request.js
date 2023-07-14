const API_KEY = "8e52c51f7d65ec583c5e477848524554";
// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumantaries: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
//   }
const requests = [
  {
    fetchu: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    id: 1,
  },
  {
    fetchu: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    id: 2,
  },
  {
    fetchu: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    id: 3,
  },
  {
    fetchu: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    id: 4,
  },
  {
    fetchu: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    id: 5,
  },
  {
    fetchu: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    id: 6,
  },
  {
    fetchu: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    id: 7,
  },
  {
    fetchu: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
    id: 8,
  },
];
export default requests;
