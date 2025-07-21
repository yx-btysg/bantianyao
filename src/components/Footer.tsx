import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 text-center">
                <img
                    alt="Bantianyin White Logo"
                    className="h-12 mx-auto mb-4"
                    src="/imgs/logo.jpg"
                />
                <div className="flex justify-center space-x-6 mb-4">
                    <a className="hover:text-cyan-400" href="#">Facebook</a>
                    <a className="hover:text-cyan-400" href="#">Instagram</a>
                    <a className="hover:text-cyan-400" href="#">WeChat</a>
                </div>
                <p className="text-gray-400 text-sm">© 2025 HappyExplorer. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 