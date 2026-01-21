import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ToolsPage from './pages/ToolsPage';

// Service Pages
import AutomationsPage from './pages/services/AutomationsPage';

import './App.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'case-studies': return <CaseStudiesPage />;
      case 'blog': return <BlogPage />;
      case 'tools': return <ToolsPage />;
      
      // Service Pages
      case 'service-automations': return <AutomationsPage />;
      // Add other service pages as you create them
      
      // Placeholder for pages you'll copy from old project
      case 'about': return <div className="min-h-screen pt-28 pb-20 text-center"><h1 className="text-4xl text-white">About Page - Copy from old project and update colors</h1></div>;
      case 'contact': return <div className="min-h-screen pt-28 pb-20 text-center"><h1 className="text-4xl text-white">Contact Page - Copy from old project and update colors</h1></div>;
      
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1D23] text-white font-sans">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} scrolled={scrolled} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}