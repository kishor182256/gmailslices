import React from 'react'
import './styles/emailrow.css';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import { AiFillStar } from 'react-icons/ai';
import { MdLabelImportantOutline } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const EmailRow = ({description,subject,message,title,time}) => {
    const history = useHistory();
  return (
    <div className='emailrow' onClick={()=>history.push('/mail')}>
       <div className="emailrow_options">
        <Checkbox />
        <IconButton>
            <AiFillStar/>
        </IconButton>

        <IconButton>
            <MdLabelImportantOutline/>
        </IconButton>
       </div>

       <h3 className="emailrow_title">
             {title}{' '}
       </h3>

       <div className="emailrow_message">
            {/* <h4>{subject}{' '}</h4> */}
            <span className="emailrow_message_description">{' '}--{' '}{description}</span>
       </div>

       <div className="emailrow_description">
          <p>{time}</p>
       </div>


    </div>
  )
}

export default EmailRow