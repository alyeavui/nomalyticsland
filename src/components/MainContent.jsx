import React from 'react';
import logo from '/logo.png';
import screenforbg from '/screenforbg.png';

const MainContent = () => {
    return (
        <div 
            className='relative bg-white bg-no-repeat bg-right'
            style={{ 
                backgroundImage: `url(${screenforbg})`,
                backgroundPosition: 'right center',
                backgroundSize: 'contain', // Default size
                paddingRight: '20px', // Default padding
            }}
        >
            <div className='container py-24'>
                <div className='ml-8 mb-24'>
                    <img src={logo} className='w-[170px] h-[30px]' alt='Logo' />
                    <p className='pt-4 text-sm text-gray-400 leading-5'>
                        Your Gateway<br />to Superior<br />Business<br />Insights
                    </p>
                </div>
            </div>
            <div>
            <button className='ml-8 mt-48 mb-24 w-[120px] h-[30px] bg-sky text-white text-xs font-bold py-2 px-4 rounded'>
            Get Started
            </button>
            </div>
        </div>
    );
}

export default MainContent;
