import React from 'react';
import { Briefcase, CheckCircle, ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';

const Office365Page = ({ setCurrentPage }) => {
  const benefits = [
    { icon: Clock, title: "99.9% Uptime", description: "Reliable cloud-based productivity with minimal downtime" },
    { icon: Shield, title: "Enterprise Security", description: "Advanced threat protection and data encryption" },
    { icon: TrendingUp, title: "60% Productivity Boost", description: "Enhanced collaboration and seamless integration" }
  ];

  const features = [
    "Microsoft 365 Migration & Setup",
    "User & License Management",
    "SharePoint & OneDrive Configuration",
    "Teams Deployment & Optimization",
    "Email & Exchange Administration",
    "Security & Compliance Setup",
    "Backup & Disaster Recovery",
    "24/7 Support & Monitoring"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] rounded-2xl mb-6">
            <Briefcase className="text-white" size={40} />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Office 365 Administration
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert management and optimization of your Microsoft 365 environment for maximum productivity and security
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-8 hover:border-[#00FFFF]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">What We Offer</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your workplace with comprehensive Microsoft 365 management services. We handle everything from initial migration to ongoing administration, ensuring your team has seamless access to powerful productivity tools.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our certified administrators optimize your Microsoft 365 environment for performance, security, and compliance. We manage user accounts, configure advanced security features, and provide continuous support to keep your business running smoothly.
            </p>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="bg-[#1A1D23]/50 rounded-2xl p-8 border border-[#00BFFF]/20">
            <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Key Features</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-[#00FFFF] flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Microsoft 365?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can enhance your productivity and security with expert Office 365 management
          </p>
          <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Office365Page;