import React from 'react';
import statforwhy from '/statforwhy.png';
import bgbg2 from '/bgbg2.png';

const skillData = [
    {
        name: "In-Depth Reports",
        icon: statforwhy,
        description: "Our detailed reports cover various aspects of your business, from market trends and competitor analysis to financial performance and operational efficiency.",
    },
    {
        name: "In-Depth Reports",
        icon: statforwhy,
        description: "Our detailed reports cover various aspects of your business, from market trends and competitor analysis to financial performance and operational efficiency.",
    },
    {
        name: "In-Depth Reports",
        icon: statforwhy,
        description: "Our detailed reports cover various aspects of your business, from market trends and competitor analysis to financial performance and operational efficiency.",
    },
    {
        name: "In-Depth Reports",
        icon: statforwhy,
        description: "Our detailed reports cover various aspects of your business, from market trends and competitor analysis to financial performance and operational efficiency.",
    }
]

const Why = () => {
    return (
        <div 
            style={{ 
                backgroundImage: `url(${bgbg2})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
            }} 
            className='py-14 sm:min-h-[600px] sm:grid sm:place-items-center w-full'
        >
            <div className='container'>
                <div className='pb-12'>
                    <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl text-white'>
                        Why Choose Nomalytica?
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-12 justify-center'>
                    {skillData.map((skill) => (
                        <div
                            key={skill.name}
                            className='card space-y-3 sm:space-y-6 p-4 sm:py-16 bg-sky text-white rounded-lg w-[80%] lg:w-full mx-auto'
                        >
                            <div className='grid place-items-center'>
                                <img src={skill.icon} alt={`${skill.name} icon`} className='w-16 h-16 object-contain' />
                            </div>
                            <h1 className='text-xl text-center'>{skill.name}</h1>
                            <p className='text-sm text-center'>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Why;
