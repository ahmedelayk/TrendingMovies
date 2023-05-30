import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

export default function Movie({movie, deleteMov}) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  }
  const imgPath = imageError? `https://cinemaone.net/images/movie_placeholder.png`:`https://image.tmdb.org/t/p/w500` + movie.poster_path;
  
  const showDetails = (id)=>{
    navigate(`moviedetails/${id}`);
  }

  const handleDelete= ()=> {
    deleteMov(movie.id);
  }

  return (
    <>
    <div className='col-sm-6 col-md-4 col-lg-3 p-1'>
        <div className='text-white rounded bg-sec overflow-hidden'>
            <img className='w-100 clickable' src={imgPath} alt={movie.title} title={movie.title} onClick={()=>{showDetails(movie.id)}} onError={handleImageError}/>
            <div className='p-2'>
                <div className='mt-2'>
                    <h6 className='clickable' onClick={()=>{showDetails(movie.id)}} >{movie.title}</h6>
                    <h6 className=''>{parseInt(movie.release_date)}</h6>
                </div>
                <div className='d-flex justify-content-between p-2'>
                    <span className='imdb_btn'><i className="fa-solid fa-star star-icon"></i>{(movie.vote_average)}</span>
                    <Link className='' to={`/movieupdate/${movie.id}`}><button className='update-btn'>Update</button></Link>
                    <button className='delete_btn' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
