import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Progress from '../Progress/Progress';
import './Home.css';
const Home = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('https://arcane-depths-74989.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div className='row home'>
            {
            products.length?products.map(pd=><Products data={pd}></Products>):<Progress></Progress>
            }
        </div>
    );
};

export default Home;