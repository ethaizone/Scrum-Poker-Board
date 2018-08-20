import React, { Component } from 'react'

class Search extends Component
{
    render()
    {
        return (
            <div className="searchbar">
                <form action=".">
                    <i className="searchbar-icon searchbar-icon-search"></i>
                    <input type="search" placeholder="ค้นหา" className="form-control" />
                </form>
            </div>
        )
    }
}

export default Search