import { fetchMovies } from "../API/Movies"
import { ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES, UPDATE_MOVIE } from "./actionTypes";

export const getAllMovies = () => (dispatch) => {
    fetchMovies().then((res) => {
        dispatch({ type: GET_ALL_MOVIES, payload: res.data })
    });
}

export const deleteMovie = (movieId) => ({
    type: DELETE_MOVIE,
    payload: movieId
})

export const addMovie = (movieObject) => ({
    type: ADD_MOVIE,
    payload: movieObject
})

export const updateMovie = (idAndUpdatedMovie) => ({
    type: UPDATE_MOVIE,
    payload: idAndUpdatedMovie
})