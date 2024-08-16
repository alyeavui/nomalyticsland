import React from 'react';

const TextComponent = () => {
  return (
    <div className="mt-12 flex items-center justify-center h-auto">
      <h1 className="font-extrabold text-3xl text-center leading-tight text-black"
          style={{
            
            WebkitTextStroke: '0.5px #000',
          }}>
        <span className="block text-center">Have you</span>
        <span className="block">encountered this</span>
        <span className="block text-center">yourself?</span>
      </h1>
    </div>
  );
};

export default TextComponent;
