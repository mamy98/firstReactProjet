import React, { useState, useEffect } from 'react'
import Favorite from './favorite'
import styled from 'styled-components'
import './index.css'

function Joke(props) {
  return (
    <div className='joke'>
      <p className='setup'>{props.joke.setup}</p>
      <p className='punchline'>{props.joke.punchline}</p>
    </div>
)}

function App() {
  const [joke, setJoke] = useState({
    setup: ``,
    punchline: ``
})

  useEffect(() => {
    fetchJoke()
  }, [])

  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(resp => resp.json())
      .then(data => setJoke(data[0]))
}
  
const handleFavorite = joke => {
  const local = localStorage.getItem('favorite')? JSON.parse(localStorage.getItem('favorite')) : []
  local.push(joke)
  localStorage.setItem('favorite',JSON.stringify(local) )
  console.log(JSON.parse(localStorage.getItem('favorite')))
}


return (
    <div className='App'>
      <Joke joke={joke} />
      <AnotherButton onClick={() => fetchJoke()}> Another one </AnotherButton>
      <FavButton onClick={() => handleFavorite(joke)}> Add to favorite</FavButton>
    </div>
)}

const AnotherButton = styled.button
`
  background-color: pink;
  width:100px;
  height:40px;
  border-radius: 20px;
`
const FavButton = styled.button
`
  border-radius: 20px;
  background-color: transparent;
  height:40px;
  margin-left: 55%;
`
export default App
