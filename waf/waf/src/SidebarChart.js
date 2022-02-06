import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChart.css'
function SidebarChart() {
  return (

      <div className='sidebarChart'>
            <Avatar/>
           <div className='sidebarChart_info' >
            <h2>Room name</h2>
            <p>This is the last chat</p>
           </div>
      </div>
  )
}

export default SidebarChart;
