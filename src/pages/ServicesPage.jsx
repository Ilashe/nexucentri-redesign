import React from 'react';
import { Cpu, TrendingUp, Shield, Cloud, Globe, Code, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Cpu,
      title: "Automations",
      slug: "automations",
      description: "Transform manual processes into streamlined, automated workflows that increase efficiency and reduce operational costs.",
      features: ["Process Automation", "RPA Solutions", "Workflow Optimization", "AI Integration"]
    },
    {
      icon: Briefcase,
      title: "Office 365 Administration",
      slug: "office365",
      description: "Expert management and optimization of your Microsoft 365 environment for maximum productivity.",
      features: ["User Management", "Security Configuration", "Migration Services", "24/7 Monitoring"]
    },
    {
      icon: TrendingUp,
      title: "CRM Management",
      slug: "crm",
      description: "Build stronger customer relationships with powerful CRM solutions tailored to your business needs.",
      features: ["Hubspot Implementation", "Salesforce Customization", "Sales Pipeline Optimization", "Marketing Automation"]
    },
    {
      icon: Shield,
      title: "IT Support & Cybersecurity",
      slug: "it-support",
      description: "Comprehensive IT support and enterprise-grade security to protect your digital assets.",
      features: ["24/7 Support", "Threat Detection", "Compliance Management", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      slug: "cloud-services",
      description: "Seamless cloud transformation with scalable infrastructure designed for growth.",
      features: ["AWS Solutions", "Azure Migration", "GCP Implementation", "Cloud Optimization"]
    },
    {
      icon: Globe,
      title: "Lead Generation",
      slug: "lead-generation",
      description: "Data-driven lead generation strategies that convert prospects into loyal customers.",
      features: ["Digital Marketing", "SEO Optimization", "Conversion Strategies", "Analytics & Insights"]
    },
    {
      icon: Code,
      title: "Websites Design and Development",
      slug: "web-design",
      description: "Modern, responsive websites that drive engagement and deliver exceptional user experiences.",
      features: ["Custom Design", "Responsive Development", "E-commerce Solutions", "CMS Integration"]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        {/* Horizontal Service Grid */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl overflow-hidden hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="bg-[#1A1D23]/50 rounded-2xl p-6 border border-[#00BFFF]/20">
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle className="text-[#00FFFF] flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
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
