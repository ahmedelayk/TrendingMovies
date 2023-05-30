import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (<>
    <nav className="navbar bg-back text-white navbar-expand-md bg-body-tertiary nav-shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary fs-4" to="/">Movies</Link>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-info"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white active" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="addmovie">Add</Link>
                            </li>
                        </ul>
                        {

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        }
                    </div>
                </div>
            </nav>
  </>

  )
}
