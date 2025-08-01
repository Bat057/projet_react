import { NavLink, Link } from 'react-router'
import './error404.scss'

function Error404() {
    return (
        <div className='error'>
            <h1 className='error404'>404</h1>
            <p className='errorMessage'>Oups! La page que vous demandez n'existe pas</p>
            <Link className='returnHome' to="/">Retourner sur la page d'accueil</Link>

        </div>
    )
}
export default Error404