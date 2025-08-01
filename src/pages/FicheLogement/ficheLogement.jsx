import myData from '../../../public/logements.json'
import { useParams } from 'react-router'
import './ficheLogement.scss'
import StarActive from '../../assets/StarActive.png'
import StarInactive from '../../assets/StarInactive.png'
import Collapse from '../../components/Collapse/collapse.jsx'
import Slideshow from '../../components/Slideshow/slideshow.jsx'





function FicheLogement() {
    const { cardNumber } = useParams()
    /*const listCards = myData.map((card) =>
        <li  key={card.id}> {card.tags} </li>
    );*/

    /*const currentCard = myData.filter(card => card.id === myData[cardNumber].id)*/
    const tag = myData[cardNumber].tags.map((tags, index) => {
        <p key={index}> {tags} </p>
    })
    
    let star = []

    for (let i = 0; i < myData[cardNumber].rating; i++) {
        star.push((

            <img key={i} src={StarActive} />

        ));
    }

    for (let i = 0; i < 5 - myData[cardNumber].rating; i++) {
        star.push((

            <img src={StarInactive} />

        ));
    }

    let equipments = []

    for (let i = 0; i < myData[cardNumber].equipments.length; i++) {
        equipments.push((

            <li>{myData[cardNumber].equipments[i]}</li>

        ));
    }

    let tags = []

    for (let i = 0; i < myData[cardNumber].tags.length; i++) {
        tags.push((

            <li key={i}>{myData[cardNumber].tags[i]}</li>

        ));
    }

    let pictures = []

    for (let i = 0; i < myData[cardNumber].pictures.length; i++) {
        pictures.push((

            myData[cardNumber].pictures[i]

        ));
    }

    return (
        <div className='fiche'>
            <Slideshow index={myData[cardNumber]} />
            <div className='title_host'>
                <div className='title'>
                    <h2>{myData[cardNumber].title}</h2>
                    <p>{myData[cardNumber].location}</p>
                </div>
                <div className='host'>
                    <p className='hostName'>{myData[cardNumber].host.name}</p>
                    <img className='imgHost' src={myData[cardNumber].host.picture} />
                </div>
            </div>
            <div className='tags_rating'>

                <ul className='tags'>{tags}</ul>

                <div className='rating'>{star}</div>
            </div>
            <div className='description_equipments'>
                <Collapse title="Description" content={myData[cardNumber].description} />
                <Collapse title="Equipements" content={equipments} />
            </div>
        </div>
    )
}

export default FicheLogement