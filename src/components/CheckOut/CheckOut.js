import React from 'react';
import './CheckOut.css';
const CheckOut = () => {
    return (
        <div className='checkoutProduct'>
            <h1>CheckOut</h1>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>

            </table>
            <button className='btn btn-primary'>Checkout</button>
        </div>
    );
};

export default CheckOut;