import CareScale from "./CareScale";
import '../styles/PlantItem.css'
function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}
function PlantItem ({name,cover,id,light,water}){
    return(
        <li className='lmj-plant-item' key={id} >
            <img src={cover} className='lmj-plant-item-cover' alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale scaleValue={light} careType='light'/>
                <CareScale scaleValue={water} careType='water'/>
            </div>
        </li>
    )
}

export default PlantItem