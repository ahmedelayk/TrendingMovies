import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteMovie } from "../Redux/actionCreators";

export default function MovieDetails() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state)=>state);
  
  const {id} = useParams();
  const currentMovie = globalState.movies.find((m)=>String(m.id) === String(id));
  
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  }
  const imgPath = imageError? `https://cinemaone.net/images/movie_placeholder.png`:`https://image.tmdb.org/t/p/w500` + currentMovie.poster_path;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      cancelButtonColor: '#1A1A1A',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch(deleteMovie(id));
          navigate('/');
        Swal.fire(
          'Deleted successfully'
        )
      }
    })
  }

  return (
    <>
    <div className="container my-2 view-100">
        <div className="row">
            <div className="col-md-5">
                <img className='w-75 ' src={imgPath} alt={globalState.movies.title} onError={handleImageError} />
            </div>
            <div className="offset-1 col-md-6 text-white d-flex align-items-center flex-column justify-content-center">
                <h4>{currentMovie.title}</h4>
                <p>{currentMovie.overview}</p>
                {/* <p>{+(currentMovie.vote_average).toFixed(2)}</p> */}
                {/* <p>{+(currentMovie.vote_average)}</p> */}
                <div className="d-flex gap-3">
                  <span className='imdb_btn'><i className="fa-solid fa-star star-icon"></i>{(currentMovie.vote_average)}</span>
                  <Link className='' to={`/movieupdate/${id}`}><button className='update-btn'>Update</button></Link>
                  <button className='delete_btn' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
