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

const buttonAnother = styled.button`
  padding: 12px;
  background-color: pink;
  width:50px;
  height:50px;
`
return (
    <div className='App'>
      <Joke joke={joke} />
      <buttonAnother onClick={() => fetchJoke()}>another one</buttonAnother>
      <button onClick={() => handleFavorite(joke)}> add to favorite</button>
    </div>
)}


export default App
