import React, { useState, useEffect } from 'react';


const Baseurl = import.meta.env.VITE_BASE_URL;

const HeroSection = ({ onReferClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    `/earn1.jpg`,
    `/earn2.jpg`,
    `/earn3.jpg`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Auto-scroll interval in milliseconds (e.g., 5000 = 5 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={ image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10 py-20">
        <h1 className="text-5xl font-bold text-white mb-4">Unlock Your Learning Potential</h1>
        <p className="text-lg text-white mb-6 max-w-lg">Join thousands of learners and earn rewards for referring friends!</p>
        <button
          className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={onReferClick}
        >
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
