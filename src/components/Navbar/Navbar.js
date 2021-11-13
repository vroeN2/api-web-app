import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Cat facts</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/newfact">New fact</Link>
                <Link to="/saved/:id">Saved facts</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;