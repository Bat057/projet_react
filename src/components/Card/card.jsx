import { useRef, useEffect, useState } from 'react'
import myData from '../../../public/logements.json'
import './card.scss'
import { NavLink, Link } from 'react-router'


console.log(myData)


function Card() {
   
    const listCards = myData.map((card, index) =>
        <a href={`/Fiche/${index}`} className='card' key={index}>
            <img className='imgCard' src={card.cover} />
            <h2>{card.title}</h2>
        </a>
    );
    console.log(listCards)
  
   
    return (
        <div>
            <div className="gallery">{listCards}</div>
        </div>
    );
}

export default Card