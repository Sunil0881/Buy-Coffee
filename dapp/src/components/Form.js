import React, { useState } from 'react';
import Web3 from "web3";
import Cof from "../abi/Coffee.json";
import { ethers } from "ethers";


const COFFEE_CONTRACT = "0x09e6b4c35678A3ca634CC8Cd38f600132CAA1060";


  

 



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
      try {
        
        const provider = new ethers.providers.JsonRpcProvider(
          "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
        );
        const signer = provider.getSigner();
        console.log();
        const contract = new ethers.Contract(COFFEE_CONTRACT, Cof, signer);
        const transaction = await contract.buyCoffee(name, message, { value: ethers.utils.parseEther('0.1') });
        await transaction.wait();
        alert('Coffee bought successfully!');
      } catch (error) {
        console.error('Error buying coffee:', error);
        alert('Error buying coffee. Please check the console for details.');
      }
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