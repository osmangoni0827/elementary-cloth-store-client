import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { LogedInContext } from '../../App';
import './CheckOut.css';
const CheckOut = () => {
    const history=useHistory();
    const[LogedInUser,setLogedInuser]=useContext(LogedInContext);
    const {id}=useParams();
    const[products,setproducts]=useState({});
    useEffect(()=>{
        fetch('http://localhost:4100/productbykey/'+id)
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    const{name,price,imgUrl}=products;
    const HandleCheckOut=()=>{
        const NewOrderdata={name,price,imgUrl}
        const NewOrder={...LogedInUser,ProductData:NewOrderdata,OrderDate:new Date().toDateString('dd/MM/yyyy')}
        fetch('http://localhost:4100/addOrder',{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify(NewOrder)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Your Order successfully accepted')
                history.push('/order')
            }
        })
    }
    
    return (
        <div className='checkoutProduct'>
            <h1>CheckOut</h1>
            <table>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
               <tbody>
                   <tr>
                       <td style={{textAlign:'left'}}>{name}</td>
                       <td>1</td>
                       <td>{price}</td>
                   </tr>
               </tbody>

            </table>
            <button className='btn btn-primary' onClick={HandleCheckOut}>Checkout</button>
        </div>
    );
};

export default CheckOut;