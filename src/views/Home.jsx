import React, { useState, useEffect } from 'react'
import showService from '../services/showService'
import Card from "../components/Card";

export default function Home() {
  const [shows, setShows] = useState([]);

  const getAllShows = async () => {
    try {
      const response = await showService.getShows();
      setShows(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return (
    <div>
      {/* ITERATION 2: Should display a list of all the shows */}
      {shows && 
      shows.map((elem) => {
        return (
          <div key={elem._id}>
            <Card show={elem} />
          </div>
        )
      })}
    </div>
  )
}
