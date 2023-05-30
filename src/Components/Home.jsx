/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies, deleteMovie } from '../Redux/actionCreators'
import { v4 as uuid } from 'uuid';
import Movie from './Movie';
import Swal from 'sweetalert2';


export default function Home() {

    const dispatch = useDispatch();
    useEffect(() => dispatch(getAllMovies()), [dispatch]);
    const globalState = useSelector((state) => state);
    console.log(globalState)
    
    const deleteMov = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteMovie(id));
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <>
            <div className='container'>
                <div className="row my-2">
                    {globalState.movies ? globalState.movies.map((movie) => <Movie key={uuid()} movie={movie} deleteMov={deleteMov} />) : <h3>Data not found</h3>}
                </div>
            </div>
        </>

    )
}