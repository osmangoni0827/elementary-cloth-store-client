import React from 'react';

const 
 ManageProducts= () => {
    return (
        <div className='manageProduct'>
           <h1>Manage Product</h1>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>

            </table>
        </div>
    );
};

export default ManageProducts;