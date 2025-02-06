
import { Link } from 'react-router-dom'



const Page2 = () => {

    return (
        <div>
            <h1> Admin Priviliges </h1>
            <Link to="/AddAuction"> <button type="button" class="btn btn-dark">Add an Auction</button></Link>
            <Link to="/AllAuctionsToEdit"> <button type="button" class="btn btn-dark">Edit an Auction</button></Link>
            <Link to="/DeletePage"> <button type="button" class="btn btn-dark">Delete an Auction</button></Link>

        </div>
    )


}
export default Page2