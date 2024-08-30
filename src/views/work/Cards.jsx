import React from 'react'
import Card from './Card'
import {card_data as cards} from './data/data'

function Cards() {
  return (
    <div className={`cards-container`}>
        <div className="cards-list" >
          {cards.map((card) => {
            return (<Card card={card}/>)
          })}
        </div>
    </div>
  )
}

export default Cards