import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandHistory from './components/BrandHistory';
import Signatures from './components/Signatures';
import StoreDistribution from './components/StoreDistribution';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';
import './styles/index.ts';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Signatures />
            <StoreDistribution />
            <BrandHistory />
            <MembershipSection />
            <Footer />
        </div>
    );
};

export default App;