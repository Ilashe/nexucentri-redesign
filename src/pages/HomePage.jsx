import React, { useState } from 'react';
import { ChevronRight, Users, CheckCircle, Globe, Zap, Cpu, TrendingUp, Shield, Cloud, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import NewsTicker from '../components/NewsTicker';

const HomePage = ({ setCurrentPage }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const stats = [
    { icon: Users, number: "500+", label: "Clients Worldwide" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Zap, number: "99.9%", label: "Client Satisfaction" }
  ];

  const services = [
    {
      icon: Cpu,
      title: "Automations",
      shortDesc: "Streamline operations with intelligent automation",
      fullDesc: "Transform your business processes with cutting-edge automation solutions. We implement RPA, workflow automation, and AI-powered systems that reduce manual work by up to 80%, allowing your team to focus on strategic initiatives.",
      pageId: "service-automations"
    },
    {
      icon: TrendingUp,
      title: "CRM Management",
      shortDesc: "Transform customer relationships into lasting partnerships",
      fullDesc: "Expert implementation and management of Hubspot and Salesforce CRM systems. We customize, integrate, and optimize your CRM to boost sales productivity, improve customer retention, and provide actionable insights for growth.",
      pageId: "service-crm"
    },
    {
      icon: Shield,
      title: "IT Support & Security",
      shortDesc: "24/7 enterprise-grade support and protection",
      fullDesc: "Comprehensive IT support with proactive monitoring, rapid response times, and robust cybersecurity measures. Our team ensures 99.9% uptime while protecting your digital assets from evolving threats.",
      pageId: "service-it-support"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      shortDesc: "Scalable cloud infrastructure for modern business",
      fullDesc: "Seamless migration and management across AWS, GCP, and Azure. We design cloud architectures that reduce costs by 40%, improve scalability, and ensure business continuity with disaster recovery solutions.",
      pageId: "service-cloud-services"
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "Over 1000+ successful projects delivered across 25+ countries with 99.9% client satisfaction rate."
    },
    {
      title: "Expert Team",
      description: "Certified professionals with deep expertise in the latest technologies and industry best practices."
    },
    {
      title: "Tailored Solutions",
      description: "No cookie-cutter approaches. Every solution is customized to your unique business needs and goals."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your systems run smoothly without interruption."
    },
    {
      title: "Cost-Effective",
      description: "Maximize ROI with efficient solutions that reduce operational costs while boosting productivity."
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - 2 Column Layout */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D23] via-[#0a0d12] to-[#1A1D23]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Text Column - 33.33% */}
            <div className="md:col-span-1 animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BFFF] to-[#00FFFF] bg-clip-text text-transparent leading-tight">
                Transform Your Digital Future
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Empowering enterprises with cutting-edge technology solutions, intelligent automation, and strategic innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Solutions
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#00BFFF] text-[#00BFFF] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00BFFF] hover:text-[#1A1D23] transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Video Column - 66.67% */}
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00BFFF]/20 border border-[#00BFFF]/20 h-[500px]">
                {/* 
                  ADD YOUR VIDEO HERE:
                  Place your video at: public/videos/hero-video.mp4
                  Then uncomment the video tag below
                */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto"
                  poster="/images/video-poster.jpg"
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Placeholder - Remove when you add real video */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFFF]/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Add your video to public/videos/hero-video.mp4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00BFFF] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#00BFFF] rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <NewsTicker />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A1D23]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] rounded-2xl mb-4 shadow-lg shadow-[#00BFFF]/50">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise - Expandable Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className={`group bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-6 hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20 cursor-pointer ${
                  expandedCard === idx ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onMouseEnter={() => toggleCard(idx)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={28} />
                  </div>
                  {expandedCard === idx ? (
                    <ChevronUp className="text-[#00BFFF]" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-[#00BFFF]" size={24} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3">
                  {service.shortDesc}
                </p>
                {expandedCard === idx && (
                  <div className="mt-4 pt-4 border-t border-[#00BFFF]/20 animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.fullDesc}
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage(service.pageId);
                      }}
                      className="text-[#00BFFF] hover:text-[#00FFFF] font-semibold flex items-center gap-2 group/btn"
                    >
                      Learn More
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Nexucentri */}
      <section className="py-20 bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Work With Nexucentri?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another IT consulting firm. Here's what sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-[#1A1D23]/80 to-[#0a0d12]/80 backdrop-blur-sm border border-[#00BFFF]/20 rounded-2xl p-8 hover:border-[#00FFFF]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BFFF]/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our solutions can drive your success
          </p>
          <button className="group bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Book a Consultation
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;