import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgurl,setimgurl]=useState('');
    const onSubmit = data => {
      const{name,price}=data
      const NewProduct={
        imgUrl:imgurl,name:name,price:price
      }
      //Add Product using fetch by post
      fetch('/addProduct',{
            method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(NewProduct)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result){
          alert('Product Successfully save in Database')
        }
      })
      console.log(NewProduct);
    };
    // console.log(watch("example")); // watch input value by passing the name of it
  
  //Picture Upload in database
    const HandleAddPicture=(event)=>{
    const form = new FormData();
    form.set('key','20eb4f4a88d3505364e15416b41a0df2');
    form.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',
    form)
    .then(data=>setimgurl(data.data.data.display_url))
    .catch(err=>console.log(err))
  }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
         
                <h5>Name</h5>
                <input type='text' name='name' {...register("name",{ required: true })} />
                <p>{errors.name && <span>This field is required</span>}</p>
               <h5>Add Price: </h5>
                <input type='number' name='price' {...register("price",{ required: true } )} />
                <p>{errors.price && <span>This field is required</span>}</p>
                <h5>Add Picture:</h5>
                <input type='file' onChange={HandleAddPicture}></input><br/><br/>
                 <input type="submit" value='Submit' />
      </form>
    );
};

export default AddProduct;