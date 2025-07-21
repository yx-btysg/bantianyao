import React from 'react';

const MembershipSection: React.FC = () => {
    return (
        <section className="py-20 bg-cyan-500 text-white" id="membership">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Become a Member</h2>
                <p className="mb-8 max-w-4xl mx-auto">
                    Join the Bantianyin family and enjoy exclusive benefits, special offers, and points on every purchase. Sign up today and get a special welcome gift!
                </p>
                <div className="flex justify-center items-center space-x-6 flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 md:space-x-6">
                    <div className="text-center">
                        <img
                            alt="QR code for membership"
                            className="bg-white p-2 rounded-lg w-40 h-40 mx-auto"
                            src="/imgs/qr.jpg"
                        />
                        <p className="mt-2 font-semibold">Scan to Join</p>
                    </div>
                    <div className="text-left space-y-4">
                        <div className="flex items-center">
                            <span className="material-icons bg-white text-cyan-500 rounded-full p-2 mr-4">card_giftcard</span>
                            <span>Exclusive Member-Only Discounts</span>
                        </div>
                        <div className="flex items-center">
                            <span className="material-icons bg-white text-cyan-500 rounded-full p-2 mr-4">star</span>
                            <span>Earn Points for Free Meals</span>
                        </div>
                        <div className="flex items-center">
                            <span className="material-icons bg-white text-cyan-500 rounded-full p-2 mr-4">cake</span>
                            <span>Special Birthday Surprises</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipSection; 