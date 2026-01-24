import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const services = [
    { id: 'automations', label: 'Automations' },
    { id: 'office365', label: 'Office 365 Administration' },
    { id: 'crm', label: 'CRM Management' },
    { id: 'it-support', label: 'IT Support & CyberSecurity' },
    { id: 'cloud-services', label: 'Cloud Services' },
    { id: 'lead-generation', label: 'Lead Generation' },
    { id: 'web-design', label: 'Web Design & Development' }
  ];

  const handleServiceClick = (serviceId) => {
    setCurrentPage(`service-${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D23]/50 backdrop-blur-sm border-t border-[#00BFFF]/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png"
                alt="Nexucentri" 
                className="h-22 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering enterprises with innovative technology solutions for the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              {services.map(service => (
                <div 
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="hover:text-[#00BFFF] cursor-pointer transition-colors"
                >
                  {service.label}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div 
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#00BFFF] cursor-pointer transition-colors"
              >
                About Us
              </div>
              <div 
                onClick={() => {
                  setCurrentPage('case-studies');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#00BFFF] cursor-pointer transition-colors"
              >
                Case Studies
              </div>
              <div 
                onClick={() => {
                  setCurrentPage('blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#00BFFF] cursor-pointer transition-colors"
              >
                Blog
              </div>
              <div className="hover:text-[#00BFFF] cursor-pointer transition-colors">Careers</div>
              <div 
                onClick={() => {
                  setCurrentPage('tools');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#00BFFF] cursor-pointer transition-colors"
              >
                Tools
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="hover:text-[#00BFFF] cursor-pointer transition-colors">Privacy Policy</div>
              <div className="hover:text-[#00BFFF] cursor-pointer transition-colors">Terms of Service</div>
              <div className="hover:text-[#00BFFF] cursor-pointer transition-colors">Cookie Policy</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#00BFFF]/20 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Nexucentri. All rights reserved. Built with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;