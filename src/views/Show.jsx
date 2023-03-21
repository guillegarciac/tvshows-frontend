import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';
import { NavLink } from "react-router-dom";

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const navigate = useNavigate();

  const getShow = async () => {
    try {
      const response = await showService.getShow(id);
      setShow(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getShow()
    // eslint-disable-next-line
  }, [id])

  const handleDelete = async (id) => {
    try {
      await showService.deleteShow(id)
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <div>
    {/* ITERATION 3 */}
    {show &&
      <div className="card-container">
        <div className="card">
          <img className="card-img" src={show.image} alt={show.title} />
          <div className="card-body">
            <h1 className="card-title">{show.title}</h1>
            <h3 className="card-subtitle">{show.creator} ({show.launched})</h3>
            <h4 className="card-subtitle">{show.genre}</h4>
            <p className="card-text">{show.description}</p>
            <div className="card-buttons">
              <button type="submit"><NavLink to={`/edit/${show._id}`} className="nav-link">Edit</NavLink></button>
              <button type="submit" onClick={() => handleDelete(show._id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
)
}
