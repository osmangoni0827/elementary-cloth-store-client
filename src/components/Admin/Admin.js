import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import AddProduct from '../AddProducts/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Admin.css'
const Admin = () => {
    const [adminOperation,setAdminOperation]=useState({
        add:false,
        manage:false
    })
    const HandleAdminOperation=(state)=>{
        if(state=='add'){
            const Operation={...adminOperation};
            Operation.add=true;
            setAdminOperation(Operation);
        }
        else if(state=='manage'){
            const Operation={...adminOperation};
            Operation.manage=true;
            setAdminOperation(Operation);
        }
    }
    return (
        <div className='admin row'>
            <div className='asideNav col-md-4 col-12'>
                <Link to='' onClick={()=>HandleAdminOperation('add')}><h4>Add Product</h4></Link><br/>
                <Link to='' onClick={()=>HandleAdminOperation('manage')} ><h4>Manage Product</h4></Link><br/>
                <Link to='' onClick={()=>HandleAdminOperation('edit')}><h4>Edit</h4></Link>
            </div>
            <div className='asideDetail col-md-8 col-12'>
                {
                   adminOperation.add&&<div><AddProduct></AddProduct></div>
                }
                {
                   adminOperation.manage&& <div><ManageProducts></ManageProducts></div>  
                }
            </div>
        </div>
    );
};

export default Admin;