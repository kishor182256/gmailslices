import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import { AiFillCaretLeft,AiOutlineInbox, AiFillCaretRight, AiOutlineMore, AiOutlineRedo, AiOutlineSetting } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineLocalOffer } from 'react-icons/md';
import Section from './Section';
import './styles/emaillist.css';
import EmailRow from './EmailRow';


const EmailList = () => {
  return (
    <div className='emaillist'>
      <div className="email_list_settings">
        <div className="email_list_settings_left">
          <Checkbox/>
          <IconButton>
            <RiArrowDropDownLine/>
          </IconButton>

          <IconButton>
            <AiOutlineRedo/>
          </IconButton>

          <IconButton>
            <AiOutlineMore/>
          </IconButton>
        </div>
        <div className="email_list_settings_right">
        
          <IconButton>
            <AiFillCaretLeft/>
          </IconButton>

          <IconButton>
            <AiFillCaretRight/>
          </IconButton>

          <IconButton>
            <AiOutlineSetting/>
          </IconButton>
        </div>
      </div>
      <div className="email_list_section">
           <Section Icon={AiOutlineInbox} tittle="Primary" selected color="red"/>
           <Section Icon={BsFillPeopleFill} tittle="Social" selected color="teal"/>
           <Section Icon={MdOutlineLocalOffer} tittle="Promotions" selected color="green"/>
      </div>
      <div className="email_list_section_list">
        <EmailRow description="This is the test email"
        subject="Test email"
        title="Test email from Kishor"
         time='10pm'/>
         <EmailRow description="This is the test email"
        subject="Test email"
        title="Test email from Kishor"
         time='10pm'/>

        <EmailRow description="This is the test email"
        subject="Test email"
        title="Test email from Kishor"
         time='10pm'/>
      </div>
    </div>
  )
}

export default EmailList