import React from 'react';

const Signatures: React.FC = () => {
    return (
        <section className="py-20 bg-white" id="dishes">
            <div className="container max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Signature Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <img src="/imgs/sig_fish.jpeg" alt="Signature Grilled Fish" className="w-full h-80 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Signature Grilled Fish</h3>
                            <p className="text-gray-600">Our classic grilled fish, seasoned with our secret blend of spices and fresh green peppercorns for an unforgettable taste.</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <img src="/imgs/sig_roasted.jpg" alt="Roasted Lamb Skewers" className="w-full h-80 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Roasted Lamb Skewers</h3>
                            <p className="text-gray-600">Tender lamb marinated and roasted to perfection. A smoky and savory delight that perfectly complements our main dishes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signatures;