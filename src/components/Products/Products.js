import React from 'react';
import './Products.css';
import {  useHistory } from 'react-router-dom';

const Products = (profs) => {
    const {name,imgUrl,price,_id}=profs.data;
    const history=useHistory()
    const HandleBuyButton=(id)=>{
        history.push(`/checkout/${id}`);
    }
    return (
            <div className='col-md-3 col-12 Cards'>
                <img src={imgUrl} alt=''></img>
                <h5>{name}</h5>
                <div className='d-flex align-items-center justify-content-between '>
                <h6>${price}</h6>
                <button className='btn btn-primary' onClick={()=>HandleBuyButton(_id)}>Buy Now</button>
                </div>
                
            </div>
        
    );
};
export default Products