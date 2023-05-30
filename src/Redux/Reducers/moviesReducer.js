import axios from "axios";
import { ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES, UPDATE_MOVIE } from "../actionTypes";
import { v4 as uuid } from 'uuid';

const initialState = null;
export const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_MOVIES:
            console.log('get all movies reducer');
            return payload;
        case DELETE_MOVIE:
            console.log('delete movie reducer');
            axios.delete(`http://localhost:3000/results/${payload}`);
            console.log(state)
            return [...state.filter((movie) => movie.id !== payload)];
        case ADD_MOVIE:
            console.log('add movie reducer');
            axios.post('http://localhost:3000/results', { ...payload, id: uuid() });
            state.push(payload);
            return [...state];
        case UPDATE_MOVIE:
            console.log('update movie reducer');
            const index = state.findIndex(movie => movie.id === payload.id);
            console.log(payload);
            console.log(index);
            if (index !== -1) {
                state.splice(index, 1, payload);
            }
            axios.put(`http://localhost:3000/results/${payload.id}`, { ...payload });
            console.log(state);
            return [...state];
        // return state;
        default:
            return state;
    }
}