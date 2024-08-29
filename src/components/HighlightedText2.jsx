import React from 'react';

const HighlightedText2 = () => {
  return (
    <div className="relative flex justify-center items-center mt-20 mb-32 md:mx-16">
      
      <img
        src="/analphot.jpg" 
        className="rounded-[56px] p-1 md:w-[50vw]  lg:w-[45vw]"
      />
      <div
        className="absolute w-[48vw] p-2 rounded-[38px] bg-white top-[-20%] right-[2%] md:w-[25vw] xl:w-[15vw]  lg:top-[-5%] lg:right-[4%]"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="text-black text-[14px] leading-snug font-extrabold ml-3 xl:text-lg md:text-md ">
          <span className="block text-start">You have the data, </span>
          <span className="block text-start">but lack the time </span>
          <span className="block text-start">and skills for</span>
          <span className="block text-start">analysis.</span>
        </p>
        <div className="absolute top-2 right-3 flex items-center justify-center">
          <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div
        className="absolute w-[50vw] p-2 rounded-[28px] bg-white bottom-[-18%] left-[2%] xl:w-[15vw] md:w-[25vw] lg:bottom-[-6%] lg:left-[9%]"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="text-black text-[14px] leading-snug font-extrabold ml-3 xl:text-lg md:text-md ">
          <span className="block text-start">Facing team issues </span>
          <span className="block text-start">but don't have time </span>
          <span className="block text-start">to resolve them?</span>
        </p>
        <div className="absolute top-2 right-3 flex items-center justify-center">
          <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedText2;