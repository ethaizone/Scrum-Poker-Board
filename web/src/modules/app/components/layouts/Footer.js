import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component
{
    render()
    {
        let pathName = window.location.pathname
        let chatRoomActive = ''
        let memberActive = ''
        let adsActive = ''
        if (pathName === '/chat-rooms') {
            chatRoomActive = 'active'
        } else if (pathName === '/members') {
            memberActive = 'active'
        } else if (pathName === '/ads') {
            adsActive = 'active'
        }

        return (
            <nav className="app-tabbar">
              <ul className="clearfix">
                <li className="">
                  <NavLink to="/dashboard" activeClassName="active">
                    <i className="tabbar-icon tabbar-icon-message"></i>หน้าหลัก
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/ads" activeClassName="active">
                    <i className="tabbar-icon tabbar-icon-affiliate"></i>โฆษณา
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/profile" activeClassName="active">
                    <i className="tabbar-icon tabbar-icon-profile"></i>โปรไฟล์
                  </NavLink>
                </li>
              </ul>
            </nav>
        )
    }
}

export default Footer
