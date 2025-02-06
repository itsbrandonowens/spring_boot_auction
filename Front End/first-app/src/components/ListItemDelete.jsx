import { useState, useEffect } from 'react'
import DeleteItems from './DeleteItemCard'
import axios from 'axios'
import '../styles/ListItem.css'



const ListItemDelete = () => {

    const api = "http://localhost:8081/api/v1/item"
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = () => {
        axios.get(api)
            .then(response => { setItemList(response.data) })
            .catch(error => console.log('unable to load data'))
    }

    return (
        <div class="allCards">
            
                {
                    itemList.map(
                        item => <DeleteItems key={item.id} item={item} />
                    )
                }
                <br />
            
        </div>
    )
}

export default ListItemDelete