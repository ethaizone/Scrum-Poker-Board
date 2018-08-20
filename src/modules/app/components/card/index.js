import React from 'react'
import './index.css'

const Card = (props) => {
    let classList = "card grow"
    let children = ( <p>{props.text}</p> ) 
    if (props.children) {
        children = props.children
    }

    if (props.isHide) {
        classList += " hide"
    }
    return (
        <div className={classList}>
            { children }
        </div>
    )
}

export default Card