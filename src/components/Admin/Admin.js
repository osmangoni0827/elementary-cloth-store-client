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
            Operation.manage=false;
            setAdminOperation(Operation);
        }
        else if(state=='manage'){
            const Operation={...adminOperation};
            Operation.manage=true;
            Operation.add=false;
            setAdminOperation(Operation);
        }
    }
    return (
        <div className='admin row'>
            <div className='asideNav col-md-3 col-12'>
                <div style={{height:'600px'}}>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>HandleAdminOperation('add')}><h4>Add Product</h4></button><br/>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>HandleAdminOperation('manage')} ><h4>Manage Product</h4></button><br/>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>HandleAdminOperation('edit')}><h4>Edit</h4></button>
                </div>
               
            </div>
            <div className='asideDetail col-md-9 col-12'>
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