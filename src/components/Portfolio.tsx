import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;