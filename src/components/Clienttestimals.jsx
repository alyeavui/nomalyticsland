import React from "react";

const ClientTestimonials = () => {
  return (
    <div className="relative mt-20 flex flex-col items-center justify-center h-auto mb-12">
     
      <h1 className="font-regular text-[24px] text-center leading-tight text-black text-shadow-sm mb-12">   
        <span className="block">Client Testimonials</span>
      </h1>

     
      <div className="relative w-full flex justify-center">
        <img
          src="/clienttest.png" 
          alt="Client Testimonials Background"
          className="w-[96vw] h-auto rounded-lg"
        />

        

        
      </div>
    </div>
  );
};

export default ClientTestimonials;
