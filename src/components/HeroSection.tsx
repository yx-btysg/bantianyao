import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex justify-center items-center bg-white" id="home">
            <img
                src={`${process.env.PUBLIC_URL}/imgs/background.jpg`}
                alt="Background"
                className="w-[80vw] max-w-full h-auto"
                style={{ display: 'block' }}
            />
        </section>

    );
};

export default HeroSection;