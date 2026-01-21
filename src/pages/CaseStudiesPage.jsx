import React from 'react';
import { Building2, TrendingUp, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      service: "Automations",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "The client was struggling with manual order processing that took 4-5 days per order, leading to delayed shipments and customer dissatisfaction. They had 50+ employees manually entering data across 5 different systems.",
      solution: "We implemented an end-to-end RPA solution that automated data entry, order validation, inventory checks, and shipment scheduling. The system integrated all 5 platforms into a unified workflow with intelligent decision-making capabilities.",
      results: [
        "85% reduction in processing time (from 5 days to 18 hours)",
        "$2.1M annual cost savings",
        "Zero data entry errors",
        "30 employees redeployed to strategic roles",
        "Customer satisfaction increased from 72% to 96%"
      ],
      impact: "85% faster processing, $2.1M saved annually",
      icon: Building2
    },
    {
      service: "CRM Management (Salesforce)",
      client: "Premium Healthcare Network",
      industry: "Healthcare",
      challenge: "A network of 75 clinics was losing patient data across disconnected systems. Sales teams had no visibility into the patient journey, leading to poor follow-up and lost revenue opportunities. Patient retention rate was only 45%.",
      solution: "We deployed a customized Salesforce Health Cloud solution with automated patient engagement workflows, integrated EMR systems, and built custom dashboards for patient lifecycle management. Implemented AI-powered lead scoring and automated follow-up sequences.",
      results: [
        "Patient retention increased from 45% to 89%",
        "35% increase in appointment bookings",
        "$5.3M additional revenue in first year",
        "92% reduction in manual data entry",
        "Real-time visibility across all 75 locations"
      ],
      impact: "89% patient retention, $5.3M revenue increase",
      icon: Building2
    },
    {
      service: "IT Support & Cybersecurity",
      client: "Financial Services Firm",
      industry: "Financial Services",
      challenge: "The client experienced a ransomware attack that encrypted critical data and caused 72 hours of downtime. They had no incident response plan, outdated security protocols, and limited IT support capacity.",
      solution: "We implemented a comprehensive cybersecurity framework including 24/7 SOC monitoring, advanced threat detection, employee training programs, and disaster recovery protocols. Deployed zero-trust architecture and multi-factor authentication across all systems.",
      results: [
        "Zero security incidents in 18 months",
        "99.98% uptime achieved",
        "Compliance with ISO 27001 and SOC 2",
        "70% faster incident response time",
        "Insurance premiums reduced by 40%"
      ],
      impact: "Zero breaches, 99.98% uptime achieved",
      icon: Building2
    },
    {
      service: "Cloud Services (AWS)",
      client: "E-commerce Platform",
      industry: "Retail/E-commerce",
      challenge: "Growing e-commerce platform was experiencing frequent downtime during peak sales periods. On-premise infrastructure couldn't scale to handle traffic spikes, resulting in lost sales and poor customer experience.",
      solution: "Architected and migrated their entire infrastructure to AWS with auto-scaling capabilities, implemented CloudFront CDN for global content delivery, and deployed serverless architecture for critical services. Set up multi-region disaster recovery.",
      results: [
        "99.99% uptime (from 94%)",
        "45% reduction in infrastructure costs",
        "10x improvement in page load speed",
        "Handled 500% traffic spike during Black Friday with zero downtime",
        "Infrastructure scales automatically with demand"
      ],
      impact: "99.99% uptime, 45% cost reduction",
      icon: Building2
    },
    {
      service: "Lead Generation",
      client: "B2B SaaS Company",
      industry: "Technology/SaaS",
      challenge: "New SaaS startup had a great product but struggled to generate qualified leads. Monthly lead generation was only 50 leads with 2% conversion rate. High customer acquisition cost made growth unsustainable.",
      solution: "Implemented comprehensive lead generation strategy including SEO optimization, targeted LinkedIn campaigns, content marketing, and marketing automation. Built lead scoring system and automated nurture sequences.",
      results: [
        "Monthly leads increased from 50 to 850",
        "Conversion rate improved from 2% to 12%",
        "Customer acquisition cost reduced by 65%",
        "Generated $2.8M in pipeline value in 6 months",
        "ROI of 420% on marketing spend"
      ],
      impact: "17x more leads, 12% conversion rate",
      icon: Building2
    },
    {
      service: "Office 365 Administration",
      client: "Professional Services Firm",
      industry: "Consulting",
      challenge: "200-employee consulting firm was using outdated email systems and struggling with collaboration. Teams couldn't work efficiently on shared documents, and data was scattered across personal devices and local servers.",
      solution: "Migrated entire organization to Microsoft 365, implemented SharePoint for document management, deployed Teams for collaboration, and configured advanced security features. Provided comprehensive training to all employees.",
      results: [
        "100% successful migration with zero data loss",
        "Collaboration efficiency increased by 60%",
        "Email-related issues reduced by 85%",
        "Enabled secure remote work for all employees",
        "$180K annual savings on IT infrastructure"
      ],
      impact: "60% collaboration boost, $180K saved",
      icon: Building2
    },
    {
      service: "Website Design and Development",
      client: "Luxury Real Estate Agency",
      industry: "Real Estate",
      challenge: "High-end real estate agency had an outdated website with poor mobile experience. Property listings were difficult to navigate, virtual tours were not supported, and lead capture was minimal. Site bounced rate was 78%.",
      solution: "Designed and developed a modern, responsive website with advanced property search, integrated virtual tours, CRM integration for lead management, and SEO optimization. Implemented automated lead nurturing system.",
      results: [
        "Bounce rate reduced from 78% to 32%",
        "Mobile traffic increased by 240%",
        "Lead generation increased by 450%",
        "Average session duration increased from 1.2 to 5.8 minutes",
        "Closed $12M in sales attributed to new website in first 6 months"
      ],
      impact: "450% more leads, $12M in sales",
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real success stories from clients who transformed their businesses with Nexucentri
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl p-8 md:p-12 hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-[#00BFFF]/20">
                <div>
                  <div className="inline-block bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {study.service}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{study.client}</h2>
                  <p className="text-gray-400">{study.industry}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFFF]/20 rounded-2xl p-4 border border-[#00BFFF]/30">
                    <div className="text-sm text-gray-400 mb-1">Impact</div>
                    <div className="text-lg font-bold text-[#00BFFF]">{study.impact}</div>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-[#00BFFF]" size={24} />
                  <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-[#00FFFF]" size={24} />
                  <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-[#00BFFF]" size={24} />
                  <h3 className="text-2xl font-bold text-white">Results Achieved</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.results.map((result, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 bg-[#1A1D23]/50 rounded-lg p-4 border border-[#00BFFF]/10">
                      <CheckCircle className="text-[#00FFFF] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results
          </p>
          <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Start Your Transformation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
