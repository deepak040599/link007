import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import bg7 from '../src/img/bg7.png'

function Sidebar() {
    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        {/* sidebar top */}
            <div className="sidebar_top">
                <img src={bg7} alt="" />
                <Avatar className='sidebar_avatar'/>
                <h2>Deepak Suthar</h2>
                <h4>deepak040599@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewed you </p>
                    <p className='sidebar_statNumber'>2,45 </p>
                </div>
                <div className="sidebar_stat">
                    <p>View on Post </p>
                    <p className='sidebar_statNumber'>123 </p>
                </div>
            </div>
            {/* sidebar bottom */}
            <div className="sidebar_bottom">
                <p>Skills:-</p>
                {recentItem("Reactjs")}
                {recentItem("Nodejs")}
                {recentItem("Expressjs")}
                {recentItem("MUI")}
                {recentItem("MongoDB")}
                {recentItem("Bootstrap")}
                {recentItem("DSA ALGO")}
                {recentItem("C++")}
               
                
            </div>
    </div>
  )
}

export default Sidebar