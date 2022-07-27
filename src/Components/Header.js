import React from 'react';
import './styles/header.css';
import { AiOutlineAppstore, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { IconButton } from '@mui/material';
import { RiArrowDropDownLine} from 'react-icons/ri';
import { IoAppsSharp, IoMdNotificationsOutline} from 'react-icons/io';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <div className='header'>
     <div className='header_left'>
       <IconButton>
       <AiOutlineMenu  />
       </IconButton>
       <img onClick={()=>history.push('/')} style={{cursor:'pointer'}}
        alt='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png' />
     </div>

     <div className='header_middle'>
         <AiOutlineSearch/>
         <input placeholder='Search Mail...'/>
         <RiArrowDropDownLine className='header_middle_dropdown'/>
         </div>

     <div className='header_right'>
        <IconButton>
          <AiOutlineAppstore/>
        </IconButton>

        <IconButton>
          <IoMdNotificationsOutline/>
        </IconButton>

        <IconButton>
          <Avatar/>
        </IconButton>
     </div>
    </div>
  )
}

export default Header