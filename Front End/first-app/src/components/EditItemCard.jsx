import '../styles/ItemCard.css'
import { useNavigate } from 'react-router-dom'

const EditItemCard = (props) => {

    const navigate = useNavigate()
    const { id, url, name, description, price } = props.item
    var item_id = props.item.id

    const handleSubmit = (event) => {
        navigate('/EditAuction/' + item_id);
    }



    return (
        <div className="itemCard">
            <div className="itemDetails">
                <span className='details'> {<img class='image' src= {url} alt="image" />}</span> <br/>
                <span className="miniTitle"> Name:  </span>
                <span className='details'> {name}</span> <br />
                <span className="miniTitle"> Description:  </span>
                <span className='details'> {description}</span> <br />
                <span className="miniTitle"> Price: £  </span>
                <span className='details'> {price}</span> <br />
                <button onClick={handleSubmit} class="btn btn-dark">Edit</button>

            </div>

        </div>

    )
}

export default EditItemCard