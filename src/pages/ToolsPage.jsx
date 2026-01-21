import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react';

const ToolsPage = () => {
  // Productivity Calculator State
  const [hours, setHours] = useState(40);
  const [tasks, setTasks] = useState(20);
  const [automation, setAutomation] = useState(50);

  // Cost Comparison Calculator State
  const [employees, setEmployees] = useState(10);
  const [currentCost, setCurrentCost] = useState(5000);

  // Lead Generation Calculator State
  const [leads, setLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(5);
  const [dealValue, setDealValue] = useState(1000);

  // Calculations
  const savedHours = (hours * tasks * (automation / 100)) / 4;
  const productivityGain = ((savedHours / hours) * 100).toFixed(1);

  const nexucentriCost = currentCost * 0.6; // 40% savings
  const monthlySavings = currentCost - nexucentriCost;
  const annualSavings = monthlySavings * 12;

  const conversions = (leads * (conversionRate / 100));
  const revenue = conversions * dealValue;
  const roi = ((revenue / (leads * 10)) * 100).toFixed(0); // Assuming $10 cost per lead

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Business Tools & Calculators
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Nexucentri can transform your business with our interactive calculators
          </p>
        </div>

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
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Repetitive tasks per week</label>
                  <input 
                    type="number" 
                    value={tasks}
                    onChange={(e) => setTasks(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Automation potential (%)</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={automation}
                    onChange={(e) => setAutomation(Number(e.target.value))}
                    className="w-full h-2 bg-[#1A1D23] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-[#00BFFF] text-lg font-semibold mt-2">{automation}%</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFFF]/10 rounded-2xl p-8 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Your Results</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Hours Saved Weekly</div>
                    <div className="text-4xl font-bold text-white">{savedHours.toFixed(1)} hrs</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Productivity Gain</div>
                    <div className="text-4xl font-bold text-[#00FFFF]">{productivityGain}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Calculator */}
          <div id="cost-savings" className="bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-2xl flex items-center justify-center">
                <DollarSign className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white">Cost Savings Calculator</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Number of employees</label>
                  <input 
                    type="number" 
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Current monthly IT costs ($)</label>
                  <input 
                    type="number" 
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFFF]/10 rounded-2xl p-8 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Nexucentri vs Competition</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[#00BFFF]/20">
                    <span className="text-gray-400">Current Cost</span>
                    <span className="text-white font-semibold">${currentCost.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#00BFFF]/20">
                    <span className="text-gray-400">Nexucentri Cost</span>
                    <span className="text-[#00FFFF] font-semibold">${nexucentriCost.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#00BFFF]/20">
                    <span className="text-gray-400">Monthly Savings</span>
                    <span className="text-[#00BFFF] font-bold">${monthlySavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Annual Savings</span>
                    <span className="text-white text-2xl font-bold">${annualSavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Generation ROI Calculator */}
          <div id="lead-roi" className="bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#00BFFF] to-[#00FFFF] w-16 h-16 rounded-2xl flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white">Lead Generation ROI Calculator</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Monthly leads</label>
                  <input 
                    type="number" 
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Conversion rate (%)</label>
                  <input 
                    type="number" 
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Average deal value ($)</label>
                  <input 
                    type="number" 
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full bg-[#1A1D23] border border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#00FFFF]/10 rounded-2xl p-8 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-6">Projected Results</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Monthly Conversions</div>
                    <div className="text-4xl font-bold text-white">{conversions.toFixed(0)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Monthly Revenue</div>
                    <div className="text-4xl font-bold text-[#00FFFF]">${revenue.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">ROI</div>
                    <div className="text-4xl font-bold text-[#00BFFF]">{roi}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Maximize Your ROI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can deliver these results for your business
          </p>
          <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Schedule Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;