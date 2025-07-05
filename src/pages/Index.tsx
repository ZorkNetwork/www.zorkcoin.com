
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CommunityRoles from '../components/CommunityRoles';
import GettingStarted from '../components/GettingStarted';
import ContributionOpportunities from '../components/ContributionOpportunities';
import ZorkcoinUtility from '../components/ZorkcoinUtility';
import Pathfinders from '../components/Pathfinders';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <CommunityRoles />
      <GettingStarted />
      <ContributionOpportunities />
      <ZorkcoinUtility />
      <Pathfinders />
      <Footer />
    </div>
  );
};

export default Index;
