import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Joke from '../pages/joke'

const Favorite = () => {
  const [fav, setFav] = useState([])
  useEffect(() => {
    setFav(localStorage.getItem('favorite')? JSON.parse(localStorage.getItem('favorite')) : [])
  })
  return (
    <div>
      {fav.map(f=>{
        console.log(f)
        return (
          <Joke joke={f} ></Joke>
        )
      })}
    </div>
  )
}

export default Favorite
