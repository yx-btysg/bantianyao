// Developed by HappyExplorer, 2025

import React, { useState } from 'react';
const translations = {
    en: {
        home: 'Home',
        signatures: 'Signatures',
        locations: 'Locations',
        history: 'History',
        membership: 'Membership',
    },
    zh: {
        home: '首页',
        signatures: '招牌',
        locations: '店址',
        history: '品牌故事',
        membership: '会员',
    }
};

const Header: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'zh'>('en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value as 'en' | 'zh';
        setLanguage(newLanguage);
        console.log('Language changed to:', newLanguage);
        // In a real app, you would now trigger the language change globally
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 w-full">
            <nav className="container max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        alt="Bantianyin Logo"
                        className="h-12 mr-3"
                        src={`${process.env.PUBLIC_URL}/imgs/logo.jpg`}
                    />
                </div>
                <div className="hidden md:flex items-center space-x-8 text-gray-700">
                    <a className="hover:text-cyan-500" href="#home">{translations[language].home}</a>
                    <a className="hover:text-cyan-500" href="#dishes">{translations[language].signatures}</a>
                    <a className="hover:text-cyan-500" href="#stores">{translations[language].locations}</a>
                    <a className="hover:text-cyan-500" href="#history">{translations[language].history}</a>
                    <a className="hover:text-cyan-500" href="#membership">{translations[language].membership}</a>
                    <div className="hidden md:flex items-center space-x-4">
                        <select
                            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="en">English</option>
                            <option value="zh">中文</option>
                        </select>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                        <span className="material-icons">menu</span>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white px-6 pb-4">
                    <a onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-cyan-500" href="#home">{translations[language].home}</a>
                    <a onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-cyan-500" href="#dishes">{translations[language].signatures}</a>
                    <a onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-cyan-500" href="#stores">{translations[language].locations}</a>
                    <a onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-cyan-500" href="#history">{translations[language].history}</a>
                    <a onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-cyan-500" href="#membership">{translations[language].membership}</a>
                    <div className="mt-4">
                        <select
                            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 w-full"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="en">English</option>
                            <option value="zh">中文</option>
                        </select>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 