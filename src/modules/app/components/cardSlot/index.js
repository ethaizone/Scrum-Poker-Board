import React from 'react'
import './index.css'

const CardSlot = (props) => {
    return (
        <div className="card_slot">
            {props.children}
        </div>
    )
}

export default CardSlot