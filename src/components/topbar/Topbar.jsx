import React from 'react'
import img from "../../components/Assets/Avatar/avata2.jpg";

/* ICON */
import {MdOutlineNotifications} from 'react-icons/md'
import {MdOutlineLanguage} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import "./topbar.css"


export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarwrapper">
            <div className="topLeft">
                <span className="logo">BOOKING</span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <MdOutlineNotifications className='noti-icon'/>
                    <span className="topIconBadge">2
                    </span>
                </div>

                <div className="topbarIconsContainer">
                    <MdOutlineLanguage className='noti-icon'/>
                    <span className="topIconBadge">2
                    </span>
                </div>

                <div className="topbarIconsContainer">
                    <IoMdSettings className='noti-icon'/>
                </div>
                <img src={img} alt="" className="topAvatar" />
            </div>
        </div>

    </div>
  )
}
