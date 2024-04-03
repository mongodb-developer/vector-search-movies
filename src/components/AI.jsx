import React from 'react'
import Chatbot from "../images/Chat.png";

const AI = ({llmAnswer}) => {

    return (
      <div className='flex w-full text-white mx-auto items-center'>
       <div className='w-1/3 mb-10'>
        <img
            src={Chatbot}
            alt="chat"
            
            />
       </div>
      
  
          <div className='text-white text-2xl w-2/3'>{llmAnswer}</div>
      
      </div>
    );
  }

  export default AI