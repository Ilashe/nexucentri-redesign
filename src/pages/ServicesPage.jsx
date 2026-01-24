import React from 'react';
import { Cpu, Briefcase, TrendingUp, Shield, Cloud, Globe, Code, ArrowRight } from 'lucide-react';

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      icon: Cpu,
      title: "Automations",
      description: "Streamline operations with intelligent automation solutions that reduce manual work by up to 80%.",
      pageId: "service-automations"
    },
    {
      icon: Briefcase,
      title: "Office 365 Administration",
      description: "Expert management of your Microsoft 365 environment for maximum productivity and security.",
      pageId: "service-office365"
    },
    {
      icon: TrendingUp,
      title: "CRM Management",
      description: "Transform customer relationships with expert Hubspot and Salesforce implementation.",
      pageId: "service-crm"
    },
    {
      icon: Shield,
      title: "IT Support & Cybersecurity",
      description: "24/7 enterprise-grade support and comprehensive cybersecurity protection.",
      pageId: "service-it-support"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Seamless cloud migration and management across AWS, GCP, and Azure.",
      pageId: "service-cloud-services"
    },
    {
      icon: Globe,
      title: "Lead Generation",
      description: "Data-driven strategies that convert prospects into loyal customers.",
      pageId: "service-lead-generation"
    },
    {
      icon: Code,
      title: "Website Design & Development",
      description: "Modern, responsive websites that drive engagement and deliver results.",
      pageId: "service-web-design"
    }
  ];

  const handleServiceClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Choose the service that aligns with your current needs. Each solution is backed by our unwavering commitment to your success.
          </p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => handleServiceClick(service.pageId)}
              className="group bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-8 hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#00BFFF] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;