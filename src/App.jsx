// src/App.jsx
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralSteps from './components/ReferralSteps';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Header from './components/Header';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <HeroSection onReferClick={() => setModalOpen(true)} />
      <ReferralSteps onReferClick={() => setModalOpen(true)} />
      <ReferralBenefits />
      <FAQ />
      <Footer />
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
