import React, { Component } from 'react'

class Tab extends Component
{
    render()
    {
        return (
            <div className="socialtab">
                <ul className="clearfix">
                    <li className="active">
                        <a>ทั้งหมด</a>
                    </li>
                    <li className="">
                        <a><i className="socialtab-icon socialtab-icon-facebook"></i></a>
                    </li>
                    <li className="">
                        <a><i className="socialtab-icon socialtab-icon-messenger"></i></a>
                    </li>
                    <li className="">
                        <a><i className="socialtab-icon socialtab-icon-line"></i></a>
                    </li>
                    <li className="">
                        <a><i className="socialtab-icon socialtab-icon-instagram"></i></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Tab