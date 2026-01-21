import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: "The Future of Business Automation: AI-Powered Solutions for 2026",
    excerpt: "Discover how artificial intelligence is revolutionizing business automation and what it means for your organization's digital transformation journey.",
    author: "Nexucentri Team",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Automation",
    image: "/images/blog/featured.jpg"
  };

  const blogPosts = [
    {
      title: "5 Signs Your Business Needs CRM Management",
      excerpt: "Learn the key indicators that show it's time to implement a professional CRM system in your organization.",
      author: "Sarah Johnson",
      date: "January 12, 2026",
      readTime: "5 min read",
      category: "CRM",
      image: "/images/blog/crm.jpg"
    },
    {
      title: "Cloud Migration: A Complete Guide for Nigerian Businesses",
      excerpt: "Everything you need to know about moving your business to the cloud, including costs, benefits, and best practices.",
      author: "Michael Chen",
      date: "January 10, 2026",
      readTime: "10 min read",
      category: "Cloud Services",
      image: "/images/blog/cloud.jpg"
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Protect your business from cyber threats with these essential security measures for distributed workforces.",
      author: "David Williams",
      date: "January 8, 2026",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/images/blog/security.jpg"
    },
    {
      title: "Lead Generation Strategies That Actually Work in 2026",
      excerpt: "Proven tactics to generate high-quality leads and convert them into loyal customers.",
      author: "Emma Roberts",
      date: "January 5, 2026",
      readTime: "6 min read",
      category: "Lead Generation",
      image: "/images/blog/leads.jpg"
    },
    {
      title: "Office 365 vs Google Workspace: Which is Right for You?",
      excerpt: "A comprehensive comparison of the two leading productivity suites for businesses.",
      author: "James Anderson",
      date: "January 3, 2026",
      readTime: "9 min read",
      category: "Office 365",
      image: "/images/blog/office365.jpg"
    },
    {
      title: "Website Design Trends Dominating 2026",
      excerpt: "Stay ahead of the curve with these cutting-edge web design trends and techniques.",
      author: "Lisa Martinez",
      date: "January 1, 2026",
      readTime: "5 min read",
      category: "Web Design",
      image: "/images/blog/webdesign.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00BFFF] bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert insights, industry trends, and practical guides to help you succeed
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-3xl overflow-hidden hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFFF]/20 h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <Calendar size={80} className="text-[#00BFFF] mx-auto mb-4" />
                <p className="text-white text-lg">Featured Article Image</p>
                <p className="text-gray-400 text-sm mt-2">Add image at: /public/images/blog/featured.jpg</p>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 self-start">
                {featuredPost.category}
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 hover:text-[#00BFFF] transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 self-start">
                Read Article
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-[#1A1D23]/50 to-[#0a0d12]/50 backdrop-blur-sm border border-[#00BFFF]/30 rounded-2xl overflow-hidden hover:border-[#00FFFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/10 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#00FFFF]/20 h-48 flex items-center justify-center">
                <Calendar size={60} className="text-[#00BFFF] opacity-50" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-[#00BFFF]/20">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#00BFFF]/10 to-[#00FFFF]/10 backdrop-blur-sm border border-[#00BFFF]/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Want to Stay Updated?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-[#1A1D23] border border-[#00BFFF]/30 rounded-full px-6 py-3 text-white focus:border-[#00BFFF] focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 transform hover:scale-105 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
