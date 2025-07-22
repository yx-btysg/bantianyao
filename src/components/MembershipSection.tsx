import React from 'react';

const MembershipSection: React.FC = () => {
    return (
        <section className="py-20 bg-cyan-500 text-white" id="membership">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Become a Member</h2>
                <p className="mb-8 max-w-4xl mx-auto">
                    Join the Bantianyin family and enjoy exclusive benefits, special offers, and points on every purchase. Sign up today and get a special welcome gift!
                </p>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                  <div className="flex flex-wrap justify-center gap-6 md:gap-6 mb-8 md:mb-0 md:mt-8">
                    <div className="text-center">
                      <img
                        alt="Facebook QR code"
                        className="bg-white p-2 rounded-lg w-32 h-32 mx-auto"
                        src={`${process.env.PUBLIC_URL}/imgs/facebook.png`}
                      />
                      <p className="mt-2 font-semibold">Facebook</p>
                    </div>
                    <div className="text-center">
                      <img
                        alt="Instagram QR code"
                        className="bg-white p-2 rounded-lg w-32 h-32 mx-auto"
                        src={`${process.env.PUBLIC_URL}/imgs/ins.jpg`}
                      />
                      <p className="mt-2 font-semibold">Instagram</p>
                    </div>
                    <div className="text-center">
                      <img
                        alt="Rednote QR code"
                        className="bg-white p-2 rounded-lg w-32 h-32 mx-auto"
                        src={`${process.env.PUBLIC_URL}/imgs/rednote.png`}
                      />
                      <p className="mt-2 font-semibold">Rednote</p>
                    </div>
                    <div className="text-center">
                      <img
                        alt="TikTok QR code"
                        className="bg-white p-2 rounded-lg w-32 h-32 mx-auto"
                        src={`${process.env.PUBLIC_URL}/imgs/tiktok.jpg`}
                      />
                      <p className="mt-2 font-semibold">TikTok</p>
                    </div>
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