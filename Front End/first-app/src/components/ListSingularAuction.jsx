import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const ListSingularAuction = () => {

    const api = "http://localhost:8081/api/v1/item"
    const [itemList, setItemList] = useState([])

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [price, setPrice] = useState("")
    const [message, setMessage] = useState("");


    const params = useParams();

    useEffect(() => {
        loadItems()
        console.log("THE ID USING PARAMS IS: " + params.item_id)
    }, [])

    const loadItems = () => {
        console.log("THE ID USING PARAMS IS: " + params.item_id)
        axios.get(api + '/' + params.item_id)
            .then(response => { setItemList(response.data) })
            .catch(error => console.log('unable to load data'))
    }

  


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted");
        if (username === "default" && password === "default1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        if (username === "robbie1" && password === "rm1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        if (username === "parjal1" && password === "pr1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        if (username === "brandon1" && password === "ba1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        if (username === "abdul1" && password === "ar1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        if (username === "rory1" && password === "rm1") {
            axios.put(api + '/' + params.item_id,
                {
                    username: username,
                    password: password,
                    url: itemList.url,
                    id: itemList.id,
                    name: itemList.name,
                    description: itemList.description,
                    price: price,
                })
                .then(navigate('/page1'))
        }
        else {
            setMessage("Login failed, check your username and password");
        }


    }

    return (
        <div>
            <div className="itemCard">
                <div className="itemDetails">
                    <span className='details'> {<img class='image' src={itemList.url} alt="image" />}</span> <br />
                    <span>Name: {itemList.name}</span><br />
                    <span>Description: {itemList.description}</span><br />
                    <span>Price: £{itemList.price}</span><br />
                </div>
            </div>
            <br />
            <div className="bidForm">
                <br />
                <h2> Bid on this item!</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div class="form-group" >
                        <label for="username">Username</label>
                        <input type="text" class="form-control" value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="bidAmount">Bid Amount</label>
                        <input type="number" class="form-control" placeholder="Amount" name="Amount" value={price} onChange={(event) => {setPrice(event.target.value) }} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <b>{message}</b>
            </div>

        </div>
    )
}

export default ListSingularAuction