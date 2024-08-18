import React from 'react';

const GradientTextComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#14305B] p-4 w-screen ">
      
      <div className="w-full flex justify-start mb-6 pt-4 pl-4">
        <img
          src="/logoo.png" 
          className="ml-2"
          style={{
            mixBlendMode: 'lighten', 
          }}
        />
      </div>

      <h1
  className="text-3xl md:text-5xl font-bold text-center mb-6 pt-20"
  style={{
    background: 'linear-gradient(90deg, #FEFCFD 0%, #447FCF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  <span className="block md:inline">Simple and </span>
  <span className="block md:inline">Convenient </span>
  <span className="block md:inline">Analytics Tool</span>
</h1>


      <p
        className="text-center text-[#AAB3C1] text-sm md:text-xl mb-6 pt-14"
        style={{
          background: 'linear-gradient(90deg, #FEFCFD 0%, #447FCF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <span className="block md:inline">With Nomalytics, easily</span>
        <span className="block md:inline">manage finances,</span>
        <span className="block md:inline">warehouses, employees, and </span>
        <span className="block md:inline">much more...</span>
      </p>
        <div className='pt-10 pb-8'> 
            <button className="bg-[#C7E5FF] text-black py-2 px-6 rounded-full  hover:bg-[#3a6cb2] transition ">
                 Contact Us Now
            </button>
        </div>
    </div>
  );
};

export default GradientTextComponent;
