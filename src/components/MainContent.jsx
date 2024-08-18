import React from 'react';
import logo from '/logo.png';
import screenforbg from '/screenforbg.png';
import bgforlarge from '/bgforlarge.png'; 

const MainContent = () => {
    return (
        <div className='relative bg-white'>
            <div className='container py-24'>
                <div className='ml-8 mb-24'>
                    <img src={logo} className='w-[170px] h-[30px] lg:w-[300px] lg:h-[50px] xl:w-[450px] xl:h-[80px]' alt='Logo' />
                    <p className='pt-4 text-sm text-gray-400 leading-5 lg:text-xl md:text-2xl'>
                        Your Gateway<br />to Superior<br />Business<br />Insights
                    </p>
                </div>
            </div>
            <img 
                src={screenforbg} 
                alt='Screen Background' 
                className='absolute right-0 top-32 md:hidden max-w-full object-contain' 
            />
            <img 
                src={bgforlarge} 
                alt='Screen Background Large' 
                className='absolute right-0 top-32 hidden md:block max-h-[80vh] object-contain md:top-20' 
            />

            <div className='ml-8 mt-12 md:mt-48 mb-32 relative z-10 pt-64 lg:pt-80'>
                <button className='w-[120px] h-[30px] lg:w-[300px] lg:h-[50px] lg:text-xl bg-sky text-white text-xs font-bold py-2 px-4 rounded'>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default MainContent;
