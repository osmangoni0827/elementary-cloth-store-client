import React, { useEffect, useState } from 'react';


const  ManageProducts= () => {

    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4100/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    const HandleDeleteProduct=(id)=>{
        fetch('http://localhost:4100/deleteProduct/'+id)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className='manageProduct'>
           <h1>Manage Product</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            products.map(pd=><tr>
                                <td style={{textAlign:'left'}}>{pd.name}</td>
                                <td>1</td>
                                <td>{pd.price}</td>
                                <td><button onClick={()=>HandleDeleteProduct(pd._id)}>Delete</button></td>
                            </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;