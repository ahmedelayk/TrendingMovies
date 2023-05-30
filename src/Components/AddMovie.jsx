import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie, getAllMovies } from '../Redux/actionCreators';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
  
    const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllMovies()), [dispatch]);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieReleaseYear, setMovieReleaseYear] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieVoteAverage, setMovieVoteAverage] = useState('');
  const [moviePosterPath, setMoviePosterPath] = useState('');


  const handleTitleInput = (e)=>{
      setMovieTitle(e.target.value);
  }
  const handleReleaseYearInput = (e)=>{
      setMovieReleaseYear(e.target.value);
  }
  const handleOverviewInput = (e)=>{
      setMovieOverview(e.target.value);
  }
  const handleMovieVoteAverage = (e)=>{
      setMovieVoteAverage(e.target.value);
  }
  const handleMoviePosterPath = (e)=>{
      setMoviePosterPath(e.target.value);
  }

  const handleAdd=()=>{
      dispatch(addMovie({title:movieTitle, release_date:movieReleaseYear,overview:movieOverview, poster_path:moviePosterPath, vote_average:movieVoteAverage}))
      navigate('/');
  }


  return (
    <>
    <div className='container text-white my-4 view-100-add'>
        <div className="row">
            <h4 className='text-center'>Adding A New Movie</h4>
        </div>
        <div className='row'>
            <div className="offset-md-3 col-md-6">
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="title">Title</label>
                        <input className='form-control' type="text" id='title' name='title' value={movieTitle} onChange={handleTitleInput} />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="year">Release year</label>
                        <input className='form-control' type="text" id='year' name='year' value={movieReleaseYear} onChange={handleReleaseYearInput} />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="vote">vote</label>
                        <input className='form-control' type="text" id='vote' name='vote' value={movieVoteAverage} onChange={handleMovieVoteAverage} />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="poster">Poster path</label>
                        <input className='form-control' type="text" id='poster' name='poster' value={moviePosterPath} onChange={handleMoviePosterPath} />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="overview">Overview</label>
                        <input className='form-control' type="text" id='overview' name='overview' value={movieOverview} onChange={handleOverviewInput} />
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-primary' type="button" value='Add' onClick={handleAdd} />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
