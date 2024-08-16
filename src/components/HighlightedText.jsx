import React from 'react';

const HighlightedText = () => {
  return (
    <div
      className="relative w-[54vw] p-2  rounded-[38px] h-fit ml-8 mt-12"
      style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
    >
      <p className="text-black text-[14px] leading-snug font-bold ml-3">
        <span className="block text-start">Entering data in Excel </span>
        <span className="block text-start">but finding it</span>
        <span className="block text-start">inconvenient in the</span>
        <span className="block text-start">end?</span>
      </p>
      <div className="absolute top-2 right-3 flex items-center justify-center">
        <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>

    
    
  );
};

export default HighlightedText;
