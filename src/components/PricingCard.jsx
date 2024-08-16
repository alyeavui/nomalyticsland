import React from 'react';

const PricingCard = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#14305B] p-4 w-screen">
      <div className="bg-white rounded-[30px] p-6 w-[96vw] ">
       
        <div className="flex justify-start mb-6">
          <span className="px-4 py-1 border border-[#14305B] rounded-full text-[#14305B] font-medium">
            Basic
          </span>
        </div>
        
        
        <ul className="mb-6 space-y-12 text-xl text-[#1E1E1E] ml-1 font-extrabold">
          <li>✔</li>
          <li>✔</li>
          <li>✔</li>
        </ul>
        
        
        <div className="flex items-baseline justify-start mb-6 pt-6">
          <span className="text-4xl font-bold text-[#1E1E1E] pr-2">49,000</span>
          <span className=" pl-2 text-lg text-[#1E1E1E]">kzt / month</span>
        </div>
        
       
        <button className="bg-[#D9D9D9] text-[#1E1E1E] py-4 px-6 rounded-full flex items-center justify-center w-fit font-extrabold">
          <span className="mr-2">➜</span>
          Choose a plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
