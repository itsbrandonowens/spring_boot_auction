import '../styles/Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <ul className="navbar navbar-expand-lg navbar-dark bg-dark">
                <li><Link to='/page1'> Auctions </Link> </li>
                <li><Link to='/Login'> Admin </Link> </li>
               
            </ul>

        </div>


    )


}
export default Navbar