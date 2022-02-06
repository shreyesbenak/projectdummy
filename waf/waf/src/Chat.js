import React from 'react';
import "./Chat.css"
import { Avatar } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {  IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';



function Chat() {
  return <div className='chat'>

 <div className='chat_header'>
     <Avatar/>
     <div className='chat_header_info'>
        <h3>Room name</h3>
        <p>last seen at ..</p>
     </div>
 <div className='chat_header_info'>
 <IconButton>
   <SearchIcon/>
  </IconButton>    
  <IconButton>
   <AttachFileIcon/>
  </IconButton>  
  <IconButton>
   <MoreVertIcon/>
  </IconButton>  
 </div>
 </div>

 <div className='chart_body'>
     <p className="chart_message">
         <span className="chart_name"> Benak</span>
          This is a message
          <span className='chat_timestamp'>
{new Date().toLocaleString()}

          </span>
          </p>
          <p className="chart_message chart_reciver">
         <span className="chart_name"> Benak</span>
          This is a message
          <span className='chat_timestamp'>
{new Date().toLocaleString()}

          </span>
          </p>
          <p className="chart_message">
         <span className="chart_name"> Benak</span>
          This is a message
          <span className='chat_timestamp'>
{new Date().toLocaleString()}

          </span>
          </p>
          <p className=" chart_message chart_reciver">
         <span className="chart_name"> Benak</span>
          This is a message
          <span className='chat_timestamp'>
{new Date().toLocaleString()}

          </span>
          </p>
 </div>
 <div className='chat_footer'>
     <InsertEmoticonIcon />
     <form>
         <input placeholder='type your message' type="text"/>
         <button type="submit">Send</button>
     </form>
     <IconButton>
     < MicIcon/>
  </IconButton>  
   
 </div>
  </div>;
}

export default Chat;
