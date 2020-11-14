import React from 'react'
import '../index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/login'
import Joke from '../pages/joke'
import Favorite from '../pages/favorite'
import Header from '../components/header'

const Routes = () => {
  return (
    <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/joke' component={Joke} />
          <Route path='/favorite' component={Favorite} />
          <Redirect to='/'></Redirect>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes