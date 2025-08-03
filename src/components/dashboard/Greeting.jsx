import React from 'react';

const Greeting = ({name}) =>{
    const hour = new Date().getHours();
    const getGreeting = () => {
        if (hour < 12) return "Good Morning 🌞";
        if (hour < 18) return "Good Afternoon ☀️";
        return "Good Evening 🌙";
    };

    return <h1 className='text-3xl font-serif'>{getGreeting()}, {name}!</h1>
};

export default Greeting;