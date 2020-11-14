import React from 'react'
import Signin from '../components/signin'
import axios from 'axios'
import './index.css'
import { useEffect } from 'react'

const submit = (e, formState, setErrorMessage, history) => {
    e.preventDefault()
    if (!formState.username || !formState.password) {
        setErrorMessage('Fields should not be empty')
        return
    }
    axios({
        method:'POST',
        url: 'https://easy-login-api.herokuapp.com/users/login',
        data: {
            username: formState.username,
            password: formState.password
        }
    })
        .then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('/joke')
        })
        .catch(err => {
            setErrorMessage('Une erreur est survenue sur le serveur')
            console.log(err)
        })
}

const Login = ({ history }) => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log('login => token', token)
        if (token) {
            history.push('/joke')
        }
    }, [])
    return (
        <div>
            <Signin submit={submit}></Signin>
        </div>
    )
}

export default Login