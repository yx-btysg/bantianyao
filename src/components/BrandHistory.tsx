import React from 'react';

const BrandHistory: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="history">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our History</h2>
                <p className="text-gray-600 mb-12 max-w-6xl mx-auto">
                    From a small shop to a nationwide chain, our journey has been fueled by a passion for authentic grilled fish.
                </p>
                <div className="mt-12 flex justify-center overflow-hidden">
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/brand-history.jpg`}
                        alt="Brand History"
                        className="rounded-lg shadow-xl w-full max-w-6xl scale-110"
                    />
                </div>
            </div>
        </section>
    );
};

export default BrandHistory;