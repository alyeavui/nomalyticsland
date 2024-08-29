import React from 'react';
import './Second.css';  // Import your CSS file

const skillsData = [
    {
        name: "Forget complicated spreadsheets!",
        icon: "/finance2.png",
        description: "With the Finance section, you can easily track your income, daily, weekly, and yearly. Analyze statistics, monitor your average bill, and stay on top of your annual earnings—all in one intuitive platform.",
    },
    {
        name: "Stay updated with real-time income updates",
        icon: "/wallet2.png",
        description: "Track your weekly and monthly sales, manage clients, monitor returns, and identify trends effortlessly. Simplify your sales management and drive growth with ease.",
    },
    {
        name: "Effortlessly manage your workforce with the Workers section",
        icon: "/file.png",
        description: "View a comprehensive list of all workers, assign and track tasks, and analyze individual performance statistics.",
    },
    {
        name: "Keep track of your inventory and finances with ease!",
        icon: "/box.png",
        description: "With the Warehouse section, you can monitor income updates, track your annual earnings, and maintain a comprehensive list of orders—all in one intuitive platform. Stay organized and efficient, ensuring your warehouse operations run smoothly and profitably.",
    }
];

const SecondPart = () => {
    return (
        <div className='py-24 sm:min-h-[400px] sm:grid sm:place-items-center w-full bg-custom'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-12 justify-center'>
                    {skillsData.map((skills) => (
                        <div
                            key={skills.name}
                            className='p-4 sm:py-16 bg-gray-100 text-sky rounded-lg w-[80%] xl:w-full mx-auto'
                        >
                            <h1 className='text-sm pl-4 pb-4'>{skills.name}</h1>
                            <div className='flex flex-row-reverse items-center space-x-4'>
                                <div className='flex-shrink-0'>
                                    <img src={skills.icon} alt={`${skills.name} icon`} className='w-32 h-32 object-contain' />
                                </div>
                                <div className='flex-grow'>
                                    <p className='text-xs pr-4'>{skills.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondPart;
