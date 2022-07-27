import React from 'react'
import './styles/sidebar.css';
import Button from '@mui/material/Button';
import { GrAdd} from 'react-icons/gr';
import { AiOutlinePhone, AiOutlineStar} from 'react-icons/ai';
import { MdDuo, MdForwardToInbox} from 'react-icons/md';
import { BiTimeFive,BiLabel} from 'react-icons/bi';
import { MdNearMe} from 'react-icons/md';
import { GrNote} from 'react-icons/gr';
import { BsChevronExpand, BsFillPersonFill} from 'react-icons/bs';

import SideBarOption from './SideBarOption';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

const SideBar = () => {


  const dispatch = useDispatch();

  return (
    <div className="sidebar">
        <Button startIcon={<GrAdd/>} className="sidebar_button" onClick={()=>{dispatch(openSendMessage())}}
         fontSize='large'>COMPOSE</Button>
         <SideBarOption Icon={MdForwardToInbox} title="Inbox" number={54}/>
         <SideBarOption Icon={AiOutlineStar} title="Starred" number={54}/>
         <SideBarOption Icon={BiTimeFive} title="Snoozed" number={54}/>
         <SideBarOption Icon={BiLabel} title="Important" number={54}/>
         <SideBarOption Icon={MdNearMe} title="Sent" number={54}/>
         <SideBarOption Icon={GrNote} title="Draft" number={54}/>
         <SideBarOption Icon={BsChevronExpand} title="More" number={54}/>

           <div className="sidebar_footer">
                <div className="sidebar_footer_icons">
                    <IconButton>
                        <AiOutlinePhone/>
                    </IconButton>

                    <IconButton>
                        <BsFillPersonFill/>
                    </IconButton>

                    <IconButton>
                        <MdDuo/>
                    </IconButton>
                     </div>
           </div>

    </div>
  )
}

export default SideBar