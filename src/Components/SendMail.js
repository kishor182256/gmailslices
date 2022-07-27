import React from 'react'
import './styles/sendmail.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';




const SendMail = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const dispatch = useDispatch();

    const onSubmit = (data,e) => {
      // e.preventDefault();
        console.log(data);
        dispatch(closeSendMessage());
        console.log('--->');
    }

  return (
    <div className='sendmail'>
       <div className='sendmail_header'>
        <h3>New Message</h3>
        <AiFillCloseCircle className='sendmail_closeCircle' onClick={()=>{dispatch(closeSendMessage())}}/>
       </div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='To' name='to' {...register("to",{ required: true })}/>
        {errors.to && <p>Last name is required</p>}
        <input type='text' placeholder='Subject' name='subject' {...register("subject",{ required: true })}/>
        <input placeholder='Message' className='sendmail_subject' {...register("message",{ required: true })} name='message'/>
        <div className='sendmail_button'>
        <Button
        type='submit'
        variant='contained'
        color='primary'
        >Send</Button>
        </div>
       </form>
    </div>
  )
}

export default SendMail