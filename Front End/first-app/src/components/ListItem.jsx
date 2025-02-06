import {useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import axios from 'axios'
import '../styles/ListItem.css'



const ListItem = () => {

    const api = "http://localhost:8081/api/v1/item"
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = () => {
        axios.get(api)
                .then(response => {setItemList(response.data)})
                .catch(error => console.log('unable to load data'))
    }

    return(
        <div class="allCards">
            {
                itemList.map(
                    item => <ItemCard key={item.id} item={item}/>
                )
            }
           <br/>
        </div>
    )
}

export default ListItem