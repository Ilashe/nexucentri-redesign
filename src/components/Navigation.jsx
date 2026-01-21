import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'tools', label: 'Tools', hasDropdown: true },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    { id: 'automations', label: 'Automations' },
    { id: 'office365', label: 'Office 365 Administration' },
    { id: 'crm', label: 'CRM Management (Hubspot, Salesforce)' },
    { id: 'it-support', label: 'IT Support and Cybersecurity' },
    { id: 'cloud-services', label: 'Cloud Services (AWS, GCP, Azure)' },
    { id: 'lead-generation', label: 'Lead Generation' },
    { id: 'web-design', label: 'Websites Design and Development' }
  ];

  const tools = [
    { id: 'productivity', label: 'Productivity Calculator' },
    { id: 'cost-savings', label: 'Cost Savings Calculator' },
    { id: 'lead-roi', label: 'Lead Generation ROI Calculator' }
  ];

  const handleServiceClick = (serviceId) => {
    setCurrentPage(`service-${serviceId}`);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const handleToolClick = (toolId) => {
    setCurrentPage('tools');
    setToolsOpen(false);
    setMobileMenuOpen(false);
    // Scroll to specific calculator
    setTimeout(() => {
      const element = document.getElementById(toolId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#1A1D23]/95 backdrop-blur-lg shadow-lg shadow-[#00BFFF]/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img 
              src="/logo.svg"
              alt="Nexucentri Logo" 
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              item.hasDropdown ? (
                <div 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.id === 'services') setServicesOpen(true);
                    if (item.id === 'tools') setToolsOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.id === 'services') setServicesOpen(false);
                    if (item.id === 'tools') setToolsOpen(false);
                  }}
                >
                  <button
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#00BFFF] flex items-center gap-1 ${
                      (item.id === 'services' && currentPage.startsWith('service-')) || 
                      (item.id === 'tools' && currentPage === 'tools') ||
                      currentPage === item.id ? 'text-[#00BFFF]' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${
                      (item.id === 'services' && servicesOpen) || (item.id === 'tools' && toolsOpen) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* Services Dropdown */}
                  {item.id === 'services' && servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg shadow-xl dropdown-menu z-50">
                      {services.map(service => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all first:rounded-t-lg last:rounded-b-lg"
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Tools Dropdown */}
                  {item.id === 'tools' && toolsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg shadow-xl dropdown-menu z-50">
                      {tools.map(tool => (
                        <button
                          key={tool.id}
                          onClick={() => handleToolClick(tool.id)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all first:rounded-t-lg last:rounded-b-lg"
                        >
                          {tool.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#00BFFF] ${
                    currentPage === item.id ? 'text-[#00BFFF]' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1A1D23]/98 backdrop-blur-lg border-t border-[#00BFFF]/20 animate-slideDown">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => (
                item.hasDropdown ? (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.id === 'services') setServicesOpen(!servicesOpen);
                        if (item.id === 'tools') setToolsOpen(!toolsOpen);
                      }}
                      className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-300 hover:text-[#00BFFF] transition-all"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${
                        (item.id === 'services' && servicesOpen) || (item.id === 'tools' && toolsOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {item.id === 'services' && servicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map(service => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="block w-full text-left text-sm text-gray-400 hover:text-[#00BFFF] py-2"
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {item.id === 'tools' && toolsOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {tools.map(tool => (
                          <button
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="block w-full text-left text-sm text-gray-400 hover:text-[#00BFFF] py-2"
                          >
                            {tool.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left text-sm font-medium transition-all duration-300 hover:text-[#00BFFF] ${
                      currentPage === item.id ? 'text-[#00BFFF]' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button className="w-full bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;