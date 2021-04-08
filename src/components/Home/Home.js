import React from 'react';
import Products from '../Products/Products';
import './Home.css';
const Home = () => {
    return (
        <div className='row home'>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
        </div>
    );
};

export default Home;