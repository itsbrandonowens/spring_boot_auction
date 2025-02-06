import { useState, useEffect } from 'react'
import EditItemCard from './EditItemCard'
import axios from 'axios'
import '../styles/ListItem.css'



const AllAuctionsToEdit = () => {

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
        <div>
            <h2>Edit an Auction!</h2>
            <div class="allCards">
                {
                    itemList.map(
                        item => <EditItemCard key={item.id} item={item} />
                    )
                }
                <br />
            </div>
        </div>
    )
}

export default AllAuctionsToEdit