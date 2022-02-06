import React from 'react';

import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';

import SiebarChart from './SidebarChart'


function SideBar() {
  return <div className='sidebar'>



<div className='siderbar__header'>
    <Avatar src='https://s1.filmy.today/albums/Kannada/2019/Aug/09/Ramesha_Suresha_Film_Press_Meet_Photos/e7b8c157b6f0076b17e7b45ce9fb392b.jpg'/>
  <div className='sider__header__right'>
  <IconButton>
   <DonutLargeIcon/>
  </IconButton>    
  <IconButton>
   <ChatIcon/>
  </IconButton>  
  <IconButton>
   <MoreVertIcon/>
  </IconButton>  
  
  </div>

</div>
  <div className='sidebar_search'>
      <div className='sidebar_searchContainer'>
          <SearchOutlined/>
          <input placeholder='Search' type="text"/>
      </div>
  </div>
  <div className='sidebar_chat'>


  </div >
  <div className='sidebar_chart'>
  <SiebarChart />
<SiebarChart />
  </div>

  </div>;
}

export default SideBar;
