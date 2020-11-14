import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const Signin = ({submit }) => {
    const [formState, setFormState]= useState({username: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')

    const history = useHistory()
    return (
        <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
            <StyledSpan>Welcome in the joke page, please Singin</StyledSpan>
            <SigninInput placeholder='Username' onChange={e => setFormState({ ...formState, username: e.target.value})} type='text'></SigninInput>
            <SigninInput placeholder='Password' onChange={e => setFormState({ ...formState, password: e.target.value})}  type='password'></SigninInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninInput type='submit'></SigninInput>
        </StyledForm>
    )
}
const StyledSpan = styled.span`
    color: pink;
    padding : 40px;
    height: 10px;
    width : 200px;
    text-align: center;

` 

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background :white
`

const SigninInput = styled.input`
    margin: 20px;
    border-radius: 20px;
    border: none;
    background-color: #222222;
    height: 30px;
    width: 180px;
    color: grey;
    padding: 5px;
    text-align: center;
    

`

export default Signin