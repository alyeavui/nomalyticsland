import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import TextComponent from './components/TextComponent';
import HighlightedText from './components/HighlightedText';
import HighlightedText2 from './components/HighlightedText2';
import GradientTextComponent from './components/GradientTextComponent';
import PricingCard from './components/PricingCard';
import PricingCard2 from './components/PricingCard2';
import Clienttestimals from './components/Clienttestimals';
import Why from './components/Why'
import SecondPart from './components/SecondPart'

function App() {
  return (
    <div className="min-h-screen w-screen bg-white">
      <MainContent />
      <SecondPart />
      <TextComponent />
      <HighlightedText />
      <HighlightedText2 />
      <Why />
      <GradientTextComponent />
      <PricingCard/>
      <PricingCard2/>
      <Clienttestimals/>
    </div>
  );
}

export default App;
