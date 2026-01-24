import React from 'react';
import { Calculator, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const ToolsPage = ({ setCurrentPage }) => {
  const tools = [
    {
      icon: Calculator,
      title: "Productivity Calculator",
      description: "Calculate how much time and money you can save by automating repetitive tasks in your business.",
      toolId: "productivity"
    },
    {
      icon: DollarSign,
      title: "Cost Savings Calculator",
      description: "Compare Nexucentri's pricing with competitors and see how much you can save annually.",
      toolId: "cost-savings"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation ROI Calculator",
      description: "Estimate your potential revenue and ROI from implementing our lead generation strategies.",
      toolId: "lead-roi"
    }
  ];

  const handleToolClick = (toolId) => {
    // Scroll to specific tool section
    const element = document.getElementById(toolId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Business Tools & Calculators
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Select the calculator that fits your needs. Each tool provides instant insights to help you make informed business decisions.
          </p>
        </div>

        {/* Tools Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              onClick={() => handleToolClick(tool.toolId)}
              className="group bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl p-8 hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <tool.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#00BFFF] font-semibold group-hover:gap-3 transition-all">
                    Use Calculator
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actual Calculators Below */}
        <div className="space-y-12">
          {/* Productivity Calculator */}
          <div id="productivity" className="bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-2xl flex items-center justify-center">
                <Calculator className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white">Productivity Calculator</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Weekly work hours per employee</label>
                  <input 
                    type="number" 
                    defaultValue={40}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Repetitive tasks per week</label>
                  <input 
                    type="number" 
                    defaultValue={20}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Automation potential (%)</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue={50}
                    className="w-full h-2 bg-[#1A1D23] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-[#00BFFF] text-lg font-semibold mt-2">50%</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFFF]/10 rounded-2xl p-8 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Your Results</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Hours Saved Weekly</div>
                    <div className="text-4xl font-bold text-white">100 hrs</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Productivity Gain</div>
                    <div className="text-4xl font-bold text-[#00FFFF]">40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add cost-savings and lead-roi calculators here with same structure */}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;