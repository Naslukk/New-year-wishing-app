import React,{useEffect,useState} from 'react';

function Card({ to, from }) {
    const [randomIndex, setRandomIndex] = useState(0);
    const wishes = [
        "May the coming year bring you joy, success, and new opportunities. Happy New Year!",
        "Wishing you a year filled with laughter, love, and prosperity. Happy New Year!",
        "May the new year be a blank canvas for you to paint with vibrant colors of joy and success. Happy New Year!",
        "As the clock strikes midnight, may all your dreams and aspirations for the future come to life. Happy New Year!",
        "Cheers to a year of growth, happiness, and all the wonderful moments that life has to offer. Happy New Year!",
        "May the new year be a time of positive transformation and a journey towards your goals. Happy New Year!",
        "Sending you warm wishes for a year filled with health, wealth, and beautiful moments. Happy New Year!",
        "May the new year bring you closer to your dreams and fill your heart with love and gratitude. Happy New Year!",
        "Here's to a year of new beginnings, adventures, and unforgettable memories. Happy New Year!",
        "Wishing you peace, prosperity, and success in all your endeavors. Happy New Year!"
    ];
    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
    useEffect(() => {
        setRandomIndex(getRandomNumber());
    }, [])
    return (
        <div>
            <div className="birthdayCard">
                <div className="cardFront">
                    <h3 className="happy">HAPPY NEW YEAR 2024</h3>
                    <div className="balloons">
                        <div className="balloonOne"></div>
                        <div className="balloonTwo"></div>
                        <div className="balloonThree"></div>
                        <div className="balloonFour"></div>
                    </div>
                </div>
                <div className="cardInside">
                    <h3 className="back">HAPPY NEW YEAR 2024</h3>
                    <p>Dear {to ? to : "friend"}</p>
                    <p>
                        {wishes[randomIndex]}
                    </p>
                    <p className="name">{from ? from : "Your Hard"}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
