import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ToolsPage from './pages/ToolsPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import AutomationsPage from './pages/services/AutomationsPage';
import Office365Page from './pages/services/Office365Page';
import CRMPage from './pages/services/CRMPage';
import ITSupportPage from './pages/services/ITSupportPage';
import CloudServicesPage from './pages/services/CloudServicesPage';
import LeadGenerationPage from './pages/services/LeadGenerationPage';
import WebDesignPage from './pages/services/WebDesignPage';

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
    switch (currentPage) {
      case 'home': return <HomePage />;

      case 'why-nexucentri':
        // Scroll to Why Nexucentri section on homepage
        setTimeout(() => {
          const element = document.getElementById('why-nexucentri-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        return <HomePage setCurrentPage={setCurrentPage} />;

      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'case-studies': return <CaseStudiesPage />;
      case 'blog': return <BlogPage />;
      case 'tools': return <ToolsPage />;
      case 'contact': return <ContactPage />;

      // Service Pages
      case 'service-automations': return <AutomationsPage />;
      case 'service-office365': return <Office365Page />;
      case 'service-crm': return <CRMPage />;
      case 'service-it-support': return <ITSupportPage />;
      case 'service-cloud-services': return <CloudServicesPage />;
      case 'service-lead-generation': return <LeadGenerationPage />;
      case 'service-web-design': return <WebDesignPage />;

      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1D23] text-white font-sans">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} scrolled={scrolled} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}