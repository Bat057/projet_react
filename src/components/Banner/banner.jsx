import Background from '../../assets/eric-muhr.png'
import './banner.scss'
import { useRef, useEffect } from 'react'

function Banner() {
    return (
    <div className='banner'>
        <div className="title">
            <div className="back">
                <img className="background" src={Background} />
            </div>
            <h1>
                Chez vous, partout et ailleurs
            </h1>
        </div>
    </div>
    )
}

export default Banner