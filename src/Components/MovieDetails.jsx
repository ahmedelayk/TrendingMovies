import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MovieDetails() {

  const globalState = useSelector((state)=>state);
  
  const {id} = useParams();
  const currentMovie = globalState.movies.find((m)=>String(m.id) === String(id));
  
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  }
  const imgPath = imageError? `https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg`:`https://image.tmdb.org/t/p/w500` + currentMovie.poster_path;
  

  return (
    <>
    <div className="container my-2">
        <div className="row">
            <div className="col-md-5">
                <img className='w-75' src={imgPath} alt={globalState.movies.title} onError={handleImageError} />
            </div>
            <div className="offset-1 col-md-6 text-white d-flex align-items-center flex-column justify-content-center">
                <h4>{currentMovie.title}</h4>
                <p>{currentMovie.overview}</p>
                {/* <p>{+(currentMovie.vote_average).toFixed(2)}</p> */}
                <p>{+(currentMovie.vote_average)}</p>
            </div>
        </div>
    </div>
</>
  )
}
