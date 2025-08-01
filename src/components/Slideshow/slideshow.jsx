import myData from '../../../public/logements.json'
import { useParams } from 'react-router'
import { useState } from 'react'
import arrowRight from '../../assets/arrowRight.png'
import arrowLeft from '../../assets/arrowLeft.png'
import './slideshow.scss'

function Slideshow() {
    const { cardNumber } = useParams()
    const [Btn, setBtn] = useState(myData[cardNumber].pictures.length == 1 ? false : true)
    const [currentIndex, setCurrentIndex] = useState(0)
    let pictures = []

    for (let i = 0; i < myData[cardNumber].pictures.length; i++) {
        pictures.push((

            myData[cardNumber].pictures[i]

        ));


    }

    return (
        <div className='slideshow'>
            
                <img className='imgSlideshow' src={pictures[currentIndex]} />
           


            {Btn && (
                <>
                    <p className='slideNumber'>{currentIndex + 1}/{pictures.length}</p>
                    <img onClick={() => currentIndex == pictures.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)} className='arrowRight' src={arrowRight} />
                    <img onClick={() => currentIndex == 0 ? setCurrentIndex(pictures.length - 1) : setCurrentIndex(currentIndex - 1)} className='arrowLeft' src={arrowLeft} />
                </>
            )}
        </div>

    )

}


export default Slideshow