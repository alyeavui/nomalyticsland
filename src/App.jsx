import React from 'react';

import MainContent from './components/MainContent';
import TextComponent from './components/TextComponent';
import HighlightedText from './components/HighlightedText';
import HighlightedText2 from './components/HighlightedText2';
import GradientTextComponent from './components/GradientTextComponent';
import PricingCard from './components/PricingCard';
import Clienttestimals from './components/Clienttestimals';
import Why from './components/Why';
import SecondPart from './components/SecondPart';
import BarNav from './components/BarNav';

function App() {
  return (
    <div className="min-h-screen w-screen bg-white">
<section >
      <BarNav />
      </section>
      <section id="main-content">
        <MainContent />
      </section>
      <section id="second-part">
        <SecondPart />
      </section>
      <section id="text-component">
        <TextComponent />
      </section>
      <section id="highlighted-text">
        <HighlightedText />
      </section>
      <section id="highlighted-text2">
        <HighlightedText2 />
      </section>
      <section id="why">
        <Why />
      </section>
      <section id="gradient-text">
        <GradientTextComponent />
      </section>
      <section id="pricing-card">
        <PricingCard />
      </section>
      <section id="client-testimonials">
        <Clienttestimals />
      </section>
    </div>
  );
}

export default App;