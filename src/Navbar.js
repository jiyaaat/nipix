import './Navbar.css'
import { Link } from 'react-router-dom';
import './Home.css';

function Navbar() {
    return( 
    <div>
        <nav id="navbar">
        <div class="content text-lg">
            <p text-4xl>NIPIX TECH</p>
        </div>
        <ul class="nav-sections text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Learn">Learn</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/login">Signup</Link></li>
        </ul>
        </nav>
        
    </div>
    )
}
export default Navbar;