import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <NavLink className="back-link" to="/">Home</NavLink>
      <NavLink className="back-link" to="/new">New show</NavLink>
      <NavLink onClick={() => navigate(-1)} className="back-link">Back</NavLink>
    </div>
  )
}
