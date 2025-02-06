import '../styles/ItemCard.css'
import { useNavigate } from 'react-router-dom'

const ItemCard = (props) => {

    const navigate = useNavigate()
    const { id, url, name, description, price } = props.item
    var item_id = props.item.id

    const handleSubmit = (event) => {
        navigate('/ListSingularAuction/' + item_id);
    }

    return (
        <div className="itemCard">
            <div className="itemDetails">
                <span className='details_image'> {<img class='image' src= {url} alt="image" />}</span> <br/>
                <span className='details_name'> {name}</span> <br />
                <span className='details_description'> {description}</span> <br />
                <span className='details_price'> £{price}</span> <br />
                <button onClick={handleSubmit} class="bid_button">Bid</button>
            </div>


        </div>

    )
}

export default ItemCard