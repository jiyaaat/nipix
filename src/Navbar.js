import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return( 
    <div>
        <nav id="navbar">
        <div class="content text-lg">
            <p>NIPIX TECH</p>
        </div>
        <ul class="nav-sections text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Learn">Learn</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
        </ul>
        </nav>
        
    </div>
    )
}
export default Navbar;