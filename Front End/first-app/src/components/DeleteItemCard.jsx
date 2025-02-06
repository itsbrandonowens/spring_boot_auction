import '../styles/ItemCard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const DeleteItems = (props) => { 

    const navigate = useNavigate()
    const{id,url,name,description,price} = props.item
    const [errorMessage, setErrorMessage] = useState("");
    
    const api = "http://localhost:8081/api/v1/item/"


    const handleSubmit = (event) => {
        axios.delete(api + id)
        .then((response) => navigate("/page1"))
        .catch((error) => setErrorMessage(error));;
        }
    
   return(
       <div className="itemCard">
            <div className="itemDetails">
                <span className='details'> {<img class='image' src= {url} alt="image" />}</span> <br/>
                <span className="miniTitle"> Name:  </span>
                <span className='details'> {name}</span> <br/>
                <span className="miniTitle"> Description:  </span>
                <span className='details'> {description}</span> <br/>
                <span className="miniTitle"> Price: £ </span>
                <span className='details'> {price}</span> <br/>
                <button onClick={handleSubmit}  class="btn btn-dark">Delete</button>
                <div>{errorMessage}</div>
            </div>


           
        </div>

    )
}

export default DeleteItems