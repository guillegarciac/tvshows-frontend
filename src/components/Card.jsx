import React from 'react'
import { Link } from "react-router-dom";

export default function Card({ show }) {
  console.log(show.title)
  return (
    // Use to display each one of the movies
    <div>
      <img style={{width: '200px'}} src={show.image} alt={show.title} />
      <h2>
        <Link to={`/shows/${show._id}`}>{show.title}</Link>
      </h2>
    </div>
  )
}
