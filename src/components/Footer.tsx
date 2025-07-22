import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 text-center">
                <img
                    alt="Bantianyin White Logo"
                    className="h-12 mx-auto mb-4"
                    src={`${process.env.PUBLIC_URL}/imgs/logo.jpg`}
                />
                <div className="flex justify-center space-x-6 mb-4">
                    <a className="hover:text-cyan-400" href="#">Facebook</a>
                    <a className="hover:text-cyan-400" href="#">Instagram</a>
                    <a className="hover:text-cyan-400" href="#">WeChat</a>
                </div>
                <p className="text-gray-400 text-sm">© 2025 Bantianyao. Website developed by <a href="https://happyexplorer.sg" target="_blank" className="underline hover:text-cyan-500">HappyExplorer.</a></p>
            </div>
        </footer>
    );
};

export default Footer; 