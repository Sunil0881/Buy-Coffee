import React, { useState } from 'react';
import { BUYCOFFEE } from '../ContractIntegration';
import { ethers } from 'ethers';

const Form = () => {
    
  
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleBuyClick = async () => {
      alert("button clicked");
      const cost = ethers.utils.parseEther('0.01').toString(); // Ensure cost is in wei
      console.log("Cost:", cost);
      const tokenId = await BUYCOFFEE({ name, message, cost }); // Pass parameters as an object
      console.log("name", name);
      console.log("msg", message);
      console.log("tokenID:", tokenId);
    };
    
      
  
    

  return (
    <div className='flex justify-center  mt-10 pt-5'>
        <div>
       <label className='font-semibold text-lg'>
        Name: 
      </label>
        <input className='border-2 border-black mb-7 ml-10' type="text" value={name} onChange={handleNameChange} />
      <br />
      <label className='font-semibold text-lg'>
        Message:
      </label>
        <input className='border-2 border-black  ml-5 mb-10' type="text" value={message} onChange={handleMessageChange} />
      <br /> 
      <div className='flex justify-center'>
      <button className='px-6 py-2 bg-red-500 rounded-xl font-bold ' onClick={handleBuyClick}>Buy</button>
      </div>
      </div>
    </div>
  )
}

export default Form