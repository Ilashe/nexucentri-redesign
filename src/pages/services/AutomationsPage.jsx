import React from 'react';
import { Cpu, CheckCircle, ArrowRight, TrendingUp, Clock, DollarSign, Building2, Calculator } from 'lucide-react';

const AutomationsPage = ({ setCurrentPage }) => {
  const benefits = [
    { icon: Clock, title: "80% Time Savings", description: "Reduce manual work and free up your team for strategic tasks" },
    { icon: DollarSign, title: "50% Cost Reduction", description: "Lower operational costs through efficient automation" },
    { icon: TrendingUp, title: "3x Productivity", description: "Boost team productivity with streamlined workflows" }
  ];

  const features = [
    "Robotic Process Automation (RPA)",
    "Workflow Automation",
    "AI-Powered Decision Making",
    "Custom Integration Solutions",
    "Process Mining & Optimization",
    "Automated Reporting & Analytics"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] rounded-2xl mb-6">
            <Cpu className="text-white" size={40} />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Automations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your business processes with intelligent automation solutions that drive efficiency and innovation
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
              Our automation solutions are designed to eliminate repetitive tasks, reduce errors, and accelerate your business processes. We implement cutting-edge RPA technology combined with AI to create intelligent workflows that adapt to your business needs.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From simple task automation to complex enterprise-wide process orchestration, we deliver solutions that provide immediate ROI and long-term scalability.
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

        {/* Case Study Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#1A1D23]/80 to-[#0a0d12]/80 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-12 h-12 rounded-xl flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Case Study: Global Manufacturing Corp</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1A1D23]/50 rounded-xl p-6 border border-[#00BFFF]/20">
                <div className="text-[#00BFFF] text-sm font-semibold mb-2">INDUSTRY</div>
                <div className="text-white text-lg">Manufacturing</div>
              </div>
              <div className="bg-[#1A1D23]/50 rounded-xl p-6 border border-[#00BFFF]/20">
                <div className="text-[#00BFFF] text-sm font-semibold mb-2">CHALLENGE</div>
                <div className="text-white text-lg">Manual Order Processing</div>
              </div>
              <div className="bg-[#1A1D23]/50 rounded-xl p-6 border border-[#00BFFF]/20">
                <div className="text-[#00BFFF] text-sm font-semibold mb-2">RESULT</div>
                <div className="text-white text-lg">85% Time Reduction</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#00BFFF] mb-3">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed">
                  Global Manufacturing Corp was struggling with manual order processing that took 4-5 days per order, leading to delayed shipments and customer dissatisfaction. They had 50+ employees manually entering data across 5 different systems, resulting in frequent errors and bottlenecks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#00BFFF] mb-3">Our Solution</h3>
                <p className="text-gray-400 leading-relaxed">
                  We implemented an end-to-end RPA solution that automated data entry, order validation, inventory checks, and shipment scheduling. The system integrated all 5 platforms into a unified workflow with intelligent decision-making capabilities powered by AI.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#00BFFF] mb-3">Results Achieved</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-[#1A1D23]/50 rounded-lg p-4 border border-[#00BFFF]/10">
                    <CheckCircle className="text-[#00FFFF] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">85% reduction in processing time (from 5 days to 18 hours)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#1A1D23]/50 rounded-lg p-4 border border-[#00BFFF]/10">
                    <CheckCircle className="text-[#00FFFF] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">$2.1M annual cost savings</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#1A1D23]/50 rounded-lg p-4 border border-[#00BFFF]/10">
                    <CheckCircle className="text-[#00FFFF] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Zero data entry errors</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#1A1D23]/50 rounded-lg p-4 border border-[#00BFFF]/10">
                    <CheckCircle className="text-[#00FFFF] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Customer satisfaction increased from 72% to 96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Tool Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] rounded-2xl mb-4">
                <Calculator className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Free Automation ROI Calculator</h2>
              <p className="text-gray-400">Calculate how much time and money you can save with automation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Number of employees doing manual tasks</label>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Hours spent on repetitive tasks per week</label>
                  <input
                    type="number"
                    defaultValue={20}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Average hourly cost per employee ($)</label>
                  <input
                    type="number"
                    defaultValue={25}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Potential automation rate (%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={70}
                    className="w-full h-2 bg-[#1A1D23] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-[#00BFFF] text-sm font-semibold mt-2">70%</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFFF]/10 rounded-2xl p-6 border border-[#00BFFF]/20 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Potential Savings</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Hours Saved Per Week</div>
                    <div className="text-4xl font-bold text-white">140 hrs</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Annual Cost Savings</div>
                    <div className="text-4xl font-bold text-[#00FFFF]">$182,000</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">ROI Timeline</div>
                    <div className="text-2xl font-bold text-[#00BFFF]">3-6 months</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => {
                  // Navigate to full tools page
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#00BFFF] hover:text-[#00FFFF] font-semibold inline-flex items-center gap-2"
              >
                Access Full Calculator on Tools Page
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how automation can transform your operations and drive growth
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

export default AutomationsPage;
