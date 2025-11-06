import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("https://i.ibb.co/6c0YPqw1/Chat-GPT-Image-Nov-4-2025-10-04-20-PM.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '5rem',
                textAlign: 'center',
                padding: '5rem 1rem 0'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '25%',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)',
                    zIndex: 1
                }}
            />
            <div className="text-center">
                <h1 className="text-black text-5xl font-bold mb-4">Transform How You Manage Your School Canteen</h1>
                <p className="text-black text-xl opacity-90 mb-8">Simplify ordering, streamline operations, and track spending</p>
                <div className="flex gap-4 justify-center">
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
    )
}

export default HomePage