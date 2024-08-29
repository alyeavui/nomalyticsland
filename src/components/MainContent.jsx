import React from 'react';
import logo from '/logo.png';
import screenforbg from '/screenforbg.png';
import bgforlarge from '/bgforlarge.png';

const MainContent = () => {
    return (
        <div className='relative bg-white'>
            <div className='container pt-24 lg:pt-32 xxl:pt-64'>
                <div className='ml-8 md:ml-12 lg:ml-20 xxl:ml-40'>
                    <img src={logo} className='w-[220px] h-[40px] lg:w-[350px] lg:h-[65px] xxl:w-[450px] xxl:h-[85px]' alt='Logo' />
                    <p className='pt-4 text-md text-gray-400 leading-5 lg:text-3xl md:text-2xl xxl:text-5xl'>
                        Your Gateway<br />to Superior<br />Business<br />Insights
                    </p>
                </div>
            </div>
            <div className='relative z-10 mt-0 mb-12 flex justify-center lg:justify-end lg:items-start lg:pr-8'>
                <img 
                    src={screenforbg} 
                    alt='Screen Background' 
                    className='max-w-full object-contain md:hidden mt-[-15%]' 
                />
                <img 
                    src={bgforlarge} 
                    alt='Screen Background Large' 
                    className='hidden md:block max-h-[80vh] object-contain mt-[-15%] xxl:mt-[-18%] w-[80%] h-[80%]' 
                />
            </div>
            <div className='ml-8 md:ml-12 lg:ml-20 xxl:ml-40 sm:mb-32 relative z-20 lg:mt-[-10%]'>
                <button className='w-[120px] h-[40px] lg:w-[200px] lg:h-[50px] lg:text-xl xxl:w-[400px] xxl:h-[80px] xxl:text-3xl bg-sky text-white text-sm font-bold py-2 px-4 rounded'>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default MainContent;
