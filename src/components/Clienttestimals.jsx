import React from "react";
import Slider from "react-slick";
import girl from '/girl.png';

const TestimonialData = [
    {
        id: 1,
        name: "Sarah M., CFO of Green Ventures",
        text: "Nomalytica’s analytics tools have been a game-changer for our financial planning.",
        img: girl,
    },
    {
        id: 2,
        name: "John D., CEO of Tech Solutions",
        text: "The insights we’ve gained are invaluable. Highly recommend!",
        img: girl,
    },
    {
        id: 3,
        name: "Emily R., Marketing Head at BrightIdeas",
        text: "A must-have tool for data-driven decision making.",
        img: girl,
    },
    {
        id: 4,
        name: "Mike L., Product Manager at InnovateX",
        text: "The best analytics platform we've ever used.",
        img: girl,
    },
    {
        id: 5,
        name: "Rachel G., COO of FutureTech",
        text: "Exceptional service and powerful tools. A great experience.",
        img: girl,
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 bg-white">
            <div className="container">
                <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl text-sky">
                    What Our Clients Say
                </h1>
                <Slider {...settings}>
                    {TestimonialData.map((data) => (
                        <div key={data.id} className="my-6">
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-blue-100 relative">
                                <div className="mb-4">
                                    <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs text-sky text-opacity-50">{data.text}</p>
                                        <h1 className="text-xl font-bold text-sky">{data.name}</h1>
                                    </div>
                                </div>
                                <p className="text-sky text-opacity-50 text-9xl font-serif absolute top-0 right-0">
                                    ,,
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
