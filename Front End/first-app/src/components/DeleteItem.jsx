import {useState, useEffect} from 'react'
import DeleteItemCard from './DeleteItemCard'
import axios from 'axios'



const ListItem = () => {

    const api = "http://localhost:8081/api/v1/item/"
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
        <div>
            {
                itemList.map(
                    item => <DeleteItemCard key={item.id} item={item}/>
                )
            }
           <br/>
        </div>
    )
}

export default ListItem