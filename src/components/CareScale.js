import '../styles/shoppinglist.css'
import sun from "../assets/sun.svg";
import water from "../assets/water.svg"
function handleClick(scaleValue,careType) {
    let textToDisplay
    const caringType = careType === 'light' ? 'lumière' : 'arrosage'
    switch (scaleValue) {
        case 1:
            textToDisplay= 'peu'
            break
        case 2:
            textToDisplay= 'modérément'
            break
        case 3:
            textToDisplay= 'beaucoup'
            break
        default:
            textToDisplay= 'beaucoup'
            break
    }
    alert(`Cette plante requiert ${textToDisplay} de ${caringType} `)
}

function CareScale (props){
    const {scaleValue, careType} = props
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
            <img src={sun} alt='sun-icon' />
        ) :
        (
            <img src={water} alt='sun-icon' />
        )
            return (
                <div onClick={()=> handleClick(scaleValue,careType)}>
                    {range.map((rangeElem) =>
                        scaleValue >= rangeElem ? <span key={rangeElem.toString()}> {scaleType}️</span> : null
                    )}
                </div>
            )
}


export default CareScale