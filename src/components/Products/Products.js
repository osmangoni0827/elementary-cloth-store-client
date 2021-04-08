import React from 'react';
import './Products.css';
import {  useHistory } from 'react-router-dom';

const Products = (profs) => {
    // const {}=profs.data;
    const history=useHistory()
    const HandleClick=(name)=>{
        history.push(`/checkout/${0}`);
    }
    return (
            <div onClick={()=>HandleClick()} className='col-md-3 col-12 Cards'>
                <img src='' alt=''></img>
                <h2>Osman</h2>
                <div className='d-flex justify-content-between align-items-center'>
                <p>$500</p>
                <button className='btn btn-primary'>Buy Now</button>
                </div>
                
            </div>
        
    );
};
export default Products