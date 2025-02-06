import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const EditAuction = () => {

    const api = "http://localhost:8081/api/v1/item"
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [InvalidName, setInvalidName] = useState(false)
    const [InvalidDescription, setInvalidDescription] = useState(false)
    const [InvalidPrice, setInvalidPrice] = useState(false)
    const [itemList, setItemList] = useState([])


    const params = useParams()

    useEffect(() => {
        loadItems()
    }, [])


    const loadItems = () => {
        console.log("THE ID USING PARAMS IS: " + params.item_id)
        axios.get(api + '/' + params.item_id)
            .then(response => { setItemList(response.data) })
            .catch(error => console.log('unable to load data'))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (name === "" && description === "") {
            setInvalidName(true)
            setInvalidDescription(true)
            setInvalidPrice(true)
        } else if (name == "") {
            setInvalidName(true)
        } else if (description == "") {
            setInvalidDescription(true)
        } else if (price == "") {
            setInvalidPrice(true)
        }

        else {
            axios.put(api + '/' + params.item_id,
                {
                    url: itemList.url,
                    name: name,
                    description: description,
                    price: price,
                })
                .then(navigate('/page1'))

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
            <div className="bidForm">
                <br />
                <h2> Edit This Auction</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div class="form-group" >
                        <label for="name">Name</label>
                        <input type="text" class="form-control" value={name} onChange={event => setName(event.target.value)} placeholder="Enter name" />
                        {InvalidName && <span className="error">Name cannot be blank</span>}<br />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="description" class="form-control" placeholder="Description" name="description" value={description} onChange={event => setDescription(event.target.value)} />
                        {InvalidDescription && <span className="error">Description cannot be blank</span>}<br />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" placeholder="Price" name="price" value={price} onChange={event => setPrice(event.target.value)} />
                        {InvalidPrice && <span className="error">Price cannot be blank</span>}<br />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

export default EditAuction