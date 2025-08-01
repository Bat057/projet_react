import './home.scss'
import { useRef, useEffect } from 'react'
import Banner from '../../components/Banner/banner.jsx'
import Card from '../../components/Card/card.jsx'

function Home() {
    return (
        <div>
            <Banner/>
            <Card/>
        </div>
    )
}

export default Home