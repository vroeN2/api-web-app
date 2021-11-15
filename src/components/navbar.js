import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Countries info</h1>
            <div className="links">
                <Link to="/">Countries list</Link>
                <Link to="/saved">Saved</Link>
            </div>
        </nav>
    );
}
 
export default Navbar