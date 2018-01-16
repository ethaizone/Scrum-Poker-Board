import React from 'react'
import './index.css'

const Card = (props) => {
    let children = ( <p>{props.text}</p> ) 
    if (props.children) {
        children = props.children
    }
    return (
        <div className="card grow">
            { children }
        </div>
    )
}

export default Card