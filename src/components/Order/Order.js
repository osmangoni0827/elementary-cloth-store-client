import React, { useContext, useEffect, useState } from 'react';
import { LogedInContext } from '../../App';
import './Order.css';
const Order = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(LogedInContext);
    useEffect(() => {
        fetch(`https://arcane-depths-74989.herokuapp.com/orders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    },[loggedInUser])
    // console.log(Booking)
    return (
        <div className='order'>
            <h1>Order By {loggedInUser.name}</h1>
            <h1>Your have {order.length} Order </h1>

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Total Stock </th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            order.map((pd)=><tr>
                                <td><img src={pd.ProductData.imgUrl}></img></td>
                                <td style={{textAlign:'left'}}>{pd.ProductData.name}</td>
                                <td>{pd.ProductData.price}</td>
                                <td>1</td>
                                <td>{pd.OrderDate}</td>
                            </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );

};

export default Order;