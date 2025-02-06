import axios from 'axios'
import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'

const AddAuction = () => {

    const api = "http://localhost:8081/api/v1/item/"
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [url, setUrl] = useState("")
    const [InvalidName, setInvalidName] = useState(false)
    const [InvalidDescription, setInvalidDescription] = useState(false)
    const [InvalidPrice, setInvalidPrice] = useState(false)



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
            axios.post(api,
                {
                    url: url,
                    name: name,
                    description: description,
                    price: price,
                })
                .then(navigate('/page1'))

        }
    }

    return (
        <div className="bidForm">
            <br />
            <h2> Add a new Auction!</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div class="form-group" >
                    <label for="name">Image URL</label>
                    <input type="text" class="form-control" value={url} onChange={event => setUrl(event.target.value)} placeholder="Enter a URL for the Image" />
                </div>
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

    )
}

export default AddAuction