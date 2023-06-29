import axios from "axios";

const MoviesUrl = 'https://trending-movies.onrender.com/results';
// const MoviesUrl = 'http://localhost:8000/results';
export const fetchMovies = () => axios.get(MoviesUrl);