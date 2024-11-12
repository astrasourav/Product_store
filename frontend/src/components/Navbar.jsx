import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Product Store</Link>
                    <Link to="/create">
                        <button type="button" className="btn btn-lg btn-outline-dark">
                            <FaRegPlusSquare />
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
