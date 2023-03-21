import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new">New show</NavLink>
      <NavLink onClick={() => navigate(-1)}>Back</NavLink>
    </div>
  )
}
