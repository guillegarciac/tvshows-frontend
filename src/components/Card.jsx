import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ show }) {
  return (
    <div className="card-container">
        <div className="card">
          <img className="card-img" src={show.image} alt={show.title} />
          <div className="card-body">
            <h1 className="card-title"><Link to={`/shows/${show._id}`} className="details-link">{show.title}</Link></h1>
          </div> 
        </div>
    </div>
  )
}