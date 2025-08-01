import KasaLogo from '../../assets/LOGO-white.png'
import './footer.scss'



function Footer() {

    return (

        <div className='footerDiv'>
            <img className='logoFooter' src={KasaLogo} />

            <p className='footerContent'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer