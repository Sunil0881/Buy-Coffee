import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Output from '../components/output';

function Home() {
 
  return (
    <div className='bg-blue-500 '>
      <Navbar />
      
       <Form /> 
       <Output />
    
    </div>
  );
}

export default Home;
