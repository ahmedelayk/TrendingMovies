import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className="text-light vw-100 view-100 d-flex flex-column justify-content-center align-items-center">
        <h1>Not Found</h1>
        <p className="text-center">
        This page doesn't exist. <br />
        If this is a mistake, let us know, and we will try to fix it!</p>
        <Link to='/'>
            <button className='btn btn-info'>Back to Home</button>
        </Link>
    </div>
    </>
  )
}
