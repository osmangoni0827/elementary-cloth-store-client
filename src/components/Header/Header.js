import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogedInContext } from '../../App';
import './Header.css';
const Header = () => {
    const [LogedInUser, setLogedInuser] = useContext(LogedInContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand" >Elementary Cloth Shop</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/order' className="nav-link active" aria-current="page" >Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/checkout' className="nav-link active" aria-current="page" >Checkout</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin' className="nav-link active" aria-current="page" >Admin Panel</Link>
                            </li>
                            <li className='nav-item'>
                                {LogedInUser.email?
                                        <button style={{ display: 'inline' }} className="btn btn-success" onClick={() => setLogedInuser({})} type="submit">Log Out</button>
                                    :
                                    <Link to='/login'>
                                        <button className="btn btn-success" type="submit">Log In</button>
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;