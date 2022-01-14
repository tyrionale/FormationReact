import '../styles/banner.css'
import logo from '../logo.svg'
function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} className='lmj-logo' alt={title}/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner
