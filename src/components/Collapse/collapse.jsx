import './collapse.scss'
import { useState } from 'react'
import ArrowClosed from '../../assets/arrow_back_closed.png'
import ArrowOpened from '../../assets/arrow_back_open.png'

function Collapse({title, content}) {

    const [isToggle, setToggle] = useState(false)

    return (
        <div className="collapse">
            <div className="main">
                <p className='titre'>{title}</p>
                <img src={isToggle ? ArrowOpened : ArrowClosed} onClick={() => setToggle(!isToggle)} className="btn" />
            </div>

            {isToggle && (
                <div className='content'>
                    <p className='description'>{content}</p>
                </div>
            )}

        </div>

    )

}

export default Collapse