import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderLogout = () => {
const history = useHistory()
const isToken = localStorage.getItem('token')
const handleLogout = () => {
  localStorage.removeItem('token')
    history.push('/')
  }
const handleFav = () => {
  history.push('/favorite')
}
  return (
    <Container>
      <FavButton onClick={handleFav}>Favorite</FavButton>
      {isToken ? (
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : null }
    </Container>   
  )
}

const LogoutButton = styled.button
`
  margin-left: 320px;
  background-color: pink;
  width: 100px;
  height: 60px;
`
const FavButton = styled.button
`
  background-color: pink;
  padding: 5px;
  width: 100px;
  height: 60px;
  margin-left: 15px;
`
const Container = styled.div
`
  background-color: white;
  height: 60px;

`

export default HeaderLogout