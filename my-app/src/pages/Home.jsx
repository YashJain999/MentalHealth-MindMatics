import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import textimage from "../assets/images/textimageee.jpg"
import audioimage from "../assets/images/audioimageee.jpg"
import videoimage from "../assets/images/videoimage.jpg"
import diaryimage from "../assets/images/diaryimage.jpg"
import bgimage from "../assets/images/bgimg.jpg"


const Home = () => {
    const [clickedCardIndex, setClickedCardIndex] = useState(null); // To track the clicked card
    const navigate = useNavigate();

    const card = [
        {
            title: 'Learn about your mental health through Questionnaire',
            background: `url(${textimage})`, // Updated image path
            customStyle: { bottom: '70px', left: '-70px' },
            route: '/questionnaire',
        },
        {
            title: 'Explore your mental health with Audio testing',
            background: `url(${audioimage})`,
            customStyle: { bottom: '60px', left: '-70px' },
            route: '/audio-testing',
        },
        {
            title: 'Use VIDEO TESTING for better insights',
            background: `url(${videoimage})`,
            customStyle: { bottom: '30px', left: '-40px' },
            route: '/video-testing',
        },
        {
            title: 'Mindful Moments: Your Personal Diary',
            background: `url(${diaryimage})`,
            customStyle: { bottom: '10px', left: '-50px' },
            route: '/diary',
        },
    ];

    const handleClick = (index, route) => {
        setClickedCardIndex(index);
        setTimeout(() => {
            navigate(route); // Navigate to the route after the animation
        }, 1000); // Delay based on the animation duration (1 second)
    };

    return (
        <div
            className="min-h-screen bg-gray-100 flex flex-col items-center"
            style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >            {/* Header */}
            <header className="w-full p-4 bg-gray-500 bg-opacity-60 text-white fixed top-0 z-10">
                <div className="flex justify-center items-center max-w-10xl mx-auto">
                    <h1 className="text-3xl font-bold">Mind Matrics</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-24">
                {card.map((card, index) => (
                    <div
                        key={index}
                        className={`relative shadow-lg rounded-lg p-6 flex items-center justify-center h-[75vh] text-white overflow-hidden cursor-pointer transition-transform duration-300 transform ${clickedCardIndex === null ? 'hover:scale-105 hover:shadow-2xl' : ''}`}
                        style={{
                            backgroundImage: card.background,
                            backgroundSize: 'cover',
                            backgroundPosition: card.customStyle.backgroundPosition,
                            transition: 'background-position 1s ease-in-out, opacity 1s ease-in-out',
                            backgroundPosition: clickedCardIndex === index ? 'left' : 'center',
                            opacity: clickedCardIndex === index ? 0 : 1,
                        }}
                        onClick={() => handleClick(index, card.route)}
                    >
                        {/* Right Triangle Inside the Card */}
                        <div
                            className="absolute top-25 w-0 h-0 border-l-[300px] border-l-transparent border-r-[280px] border-r-transparent border-b-[40vh] border-b-[rgba(255, 255, 255, 0.5)] border-b-white"
                            style={{
                                transform: clickedCardIndex === index ? 'translateX(-100%) rotate(-90deg)' : 'rotate(-90deg)',
                                left: '180px',
                                transition: 'transform 1s ease-in-out',
                                opacity: 0.5,
                            }}
                        >
                            {/* Card Title */}
                            <h2
                                className="relative z-10 text-xs md:text-3xl lg:text-2xl font-semibold text-center leading-relaxed tracking-wide drop-shadow-lg"
                                style={{
                                    ...card.customStyle,
                                    color: 'black',
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
                                    transform: 'rotate(90deg)',
                                    transformOrigin: 'left bottom',
                                    whiteSpace: 'normal',
                                    width: '250px',
                                    textAlign: 'center',
                                }}
                            >
                                {card.title}
                            </h2>
                        </div>
                    </div>
                ))
                }
            </main >
        </div >
    );
};

export default Home;
