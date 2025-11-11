import React from 'react';

const StoreDistribution: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="stores">
            <div className="container mx-auto text-center">
                <div className="px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Find a Store Near You</h2>
                    <p className="text-gray-600 mb-12 max-w-6xl mx-auto">
                        With over 1000 locations, a delicious Bantianyao experience is always within reach. Explore our stores across Singapore.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/stores.jpg`}
                        alt="Store Locations"
                        className="w-full md:w-[80vw] max-w-full h-auto"
                        style={{ display: 'block' }}
                    />
                </div>

                <div className="px-6">
                    <div className="w-full md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-cyan-500 mb-2">IMM Flagship</h3>
                            <p className="text-gray-600">2 Jurong East Street 21, #01 - 22 IMM Building, Singapore 609601
                                <br /><span className="font-bold">Tel: </span> +65 6896 2616
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-cyan-500 mb-2">AMK Store</h3>
                            <p className="text-gray-600">61 Ang Mo Kio Avenue 8, #01-07/08/09/10 Jubilee Square, Singapore 569814
                            <br /><span className="font-bold">Tel: </span> +65 9687 5229
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-cyan-500 mb-2">Bedok Store</h3>
                            <p className="text-gray-600">215 Bedok North Street 1, #01-83, Singapore 460215
                            <br /><span className="font-bold">Tel: </span> +65 9687 5229
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreDistribution;