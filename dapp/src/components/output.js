import React, { useEffect, useState } from 'react';
import Cof from "../abi/Coffee.json";
import { ethers } from "ethers";
import Web3 from 'web3';
import { getData } from '../ContractIntegration';
const COFFEE_CONTRACT = "0x09e6b4c35678A3ca634CC8Cd38f600132CAA1060";

 

const Output = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [hexvalue, setHexValue] = useState('');
    const [entries, setEntries] = useState([]);

    const gett = async () => {
        const res = await getData();
        console.log(res);
    }
    
    useEffect(() => {
     gett()
        
    
      }, []);

      
   
      
      
  return (
    
             <div className='mt-16'>

                <div className='grid grid-cols-5 text-xl gap-2  text-center font-semibold font-mono mb-5 '>
                    <div>Name</div>
                    <div>Message</div>
                    <div>Date</div>
                    <div className='col-span-2'>ID</div>
                </div>
                
                {entries.map((entry, index) => (
                <div className='grid grid-cols-5 text-md gap-2  text-center font-semibold font-mono m-3' key={index}>
                    <p>{entry.name}</p>
                    <p>{entry.message}</p>
                    <p>{entry.date}</p>
                    <p className='col-span-2'>{entry.hexvalue}</p>
                </div>
                ))}

            </div>
            
    
  )
}

export default Output