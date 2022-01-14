import {plantList} from "../data/plantList";

import '../styles/shoppinglist.css'
import './PlantItem'
import PlantItem from "./PlantItem";
const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
)
function ShoppingList() {
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant , index) => (
                        <PlantItem
                            name={plant.name}
                            cover={plant.cover}
                            id={plant.id}
                            light={plant.light}
                            water={plant.water}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList