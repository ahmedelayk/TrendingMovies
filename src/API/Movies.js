import axios from "axios";

const MoviesUrl = 'http://localhost:3000/results';
export const fetchMovies = () => axios.get(MoviesUrl);