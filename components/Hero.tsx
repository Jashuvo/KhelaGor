import React from 'react';
import Link from './Link';

const AnimatedToy: React.FC<{ src: string, alt: string, className: string }> = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`absolute w-24 h-24 sm:w-32 sm:h-32 object-contain ${className}`} />
);

const Hero: React.FC = () => {
  return (
    <section className="bg-yellow-300 border-b-2 border-black py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Animated Toys */}
        <div className="absolute inset-0 opacity-50">
            <AnimatedToy src="https://img.icons8.com/plasticine/100/000000/rocket.png" alt="Rocket" className="top-0 left-5 animate-bounce" />
            <AnimatedToy src="https://img.icons8.com/plasticine/100/000000/teddy-bear.png" alt="Teddy Bear" className="top-1/4 right-5 animate-pulse" />
            <AnimatedToy src="https://img.icons8.com/plasticine/100/000000/car-toy.png" alt="Toy Car" className="bottom-10 left-1/4 animate-spin-slow" />
            <AnimatedToy src="https://img.icons8.com/plasticine/100/000000/lego.png" alt="Lego Block" className="bottom-0 right-1/4 animate-ping" />
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tighter leading-tight">
            The Ultimate <span className="text-blue-600">Toy Store</span> for Curious Kids
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-800 font-semibold">
            Discover a world of imagination, creativity, and fun. Quality toys that inspire endless hours of play.
          </p>
          <div className="mt-10">
            <Link
              to="#/products"
              className="inline-block bg-red-500 text-white font-bold text-lg py-4 px-8 border-2 border-black rounded-lg shadow-[8px_8px_0px_#000] hover:bg-red-600 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#000] transition-all duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
