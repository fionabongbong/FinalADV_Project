import React from 'react';

const About = () => {
    return (
    <div>
        <div className="bg-fuchsia-950 py-6 w-full">
                <p className="text-center text-white font-bold text-3xl">
                    Beat Rate
                </p>
                </div>
       <div className="bg-zinc-200 container mx-auto text-center">
        <h2 className="text-2xl font-bold p-8">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to our company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 mt-4 pb-10">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="container mx-auto text-center p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">Contact Us!</h2>
        <p className="text-gray-700 mt-4 mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> 
    </div>
      
    
    );
};

export default About;
