import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, updateMovie } from '../Redux/actionCreators';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieUpdate() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllMovies()), [dispatch]);

  const navigate = useNavigate();
  const {id} = useParams();
  const globalState = useSelector((state)=>state);

  const currentMovie = globalState.movies.find((m)=>String(m.id) === String(id));

  const [movieTitle, setMovieTitle] = useState(currentMovie.title);
  const [movieReleaseYear, setMovieReleaseYear] = useState(currentMovie.release_date);
  const [movieOverview, setMovieOverview] = useState(currentMovie.overview);
  const [movieVoteAverage, setMovieVoteAverage] = useState(currentMovie.vote_average);
  const [moviePosterPath, setMoviePosterPath] = useState(currentMovie.poster_path);

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

  const handleUpdate=()=>{
      dispatch(updateMovie({id:id,title:movieTitle, release_date:movieReleaseYear,overview:movieOverview, poster_path:moviePosterPath, vote_average:movieVoteAverage}))
      navigate('/');
  }



  return (
    <>
    <div className='container text-white my-4 view-100-add'>
        <div className="row">
            <h4 className='text-center'>Update a Movie</h4>
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
                        <input className='btn btn-primary' type="button" value='update' onClick={handleUpdate} />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
