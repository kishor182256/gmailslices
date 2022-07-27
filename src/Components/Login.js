import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from '../firebase';

const Login = () => {

    const dispatch = useDispatch();

    const SignIn = (e) => {
       e.preventDefault();
       auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch(login({displayName: result.user.displayName, email: result.user.email, photoURL: result.user.photoURL}));
       }).catch(error => {
            console.log(error);
       })
    }

  return (
    <div>
        <Button
        type='submit' onClick={SignIn}
        variant='contained'
        color='primary'
        >Send</Button>
    </div>
  )
}

export default Login