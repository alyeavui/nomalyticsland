import React from 'react';
import logo from '/logo.png';
import screenforbg from '/screenforbg.png';
import bgforlarge from '/bgforlarge.png'; 

const MainContent = () => {
    return (
        <div className='relative bg-white'>
            <div className='container pt-24 pb-4'>
                <div className='ml-8'>
                    <img src={logo} className='w-[170px] h-[30px] lg:w-[300px] lg:h-[50px] xl:w-[450px] xl:h-[80px]' alt='Logo' />
                    <p className='pt-4 text-sm text-gray-400 leading-5 lg:text-xl md:text-2xl'>
                        Your Gateway<br />to Superior<br />Business<br />Insights
                    </p>
                </div>
            </div>
            <div className='relative z-10 mt-0 mb-12 flex justify-center'>
                <img 
                    src={screenforbg} 
                    alt='Screen Background' 
                    className='max-w-full object-contain md:hidden' 
                />
                <img 
                    src={bgforlarge} 
                    alt='Screen Background Large' 
                    className='hidden md:block max-h-[80vh] object-contain' 
                />
            </div>
            <div className='ml-8 sm:mb-32 relative z-20'>
                <button className='w-[120px] h-[30px] lg:w-[300px] lg:h-[50px] lg:text-xl bg-sky text-white text-xs font-bold py-2 px-4 rounded'>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default MainContent;
