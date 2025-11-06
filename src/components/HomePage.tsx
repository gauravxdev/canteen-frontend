import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex flex-col items-center pt-20 px-4 text-center relative"
            style={{
                backgroundImage: 'url("https://i.ibb.co/6c0YPqw1/Chat-GPT-Image-Nov-4-2025-10-04-20-PM.png")'
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/90 to-white/0 z-10" />
            
            <div className="relative z-20 max-w-4xl">
                <h1 className="text-black text-5xl font-bold mb-4">
                    Transform How You Manage Your School Canteen
                </h1>
                <p className="text-black text-xl opacity-90 mb-8">
                    Simplify ordering, streamline operations, and track spending
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/snacks"
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
                    >
                        View Snacks
                    </Link>
                    <Link 
                        to="/students"
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
                    >
                        View Students
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;