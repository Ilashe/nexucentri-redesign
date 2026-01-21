import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About Nexucentri
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of enterprise technology with innovation, expertise, and unwavering commitment
          </p>
        </div>

        {/* Video Background Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <div className="aspect-video flex items-center justify-center">
            {/* 
              TO ADD YOUR VIDEO: 
              Replace this div with:
              <video controls className="w-full h-full">
                <source src="/path-to-your-about-video.mp4" type="video/mp4" />
              </video>
            */}
            <div className="text-center">
              <Play size={80} className="text-cyan-400 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">About Video Placeholder - Add your video here</p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Founded on the principle that technology should empower, not complicate, Nexucentri has grown from a visionary startup to a trusted global partner for enterprises seeking digital transformation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With decades of combined expertise, we've helped organizations across 25+ countries navigate the complexities of modern technology, delivering solutions that drive measurable results and sustainable growth.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To democratize enterprise technology by making sophisticated solutions accessible, affordable, and actionable for businesses of all sizes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe in building lasting partnerships, not just delivering projects. Every solution we create is designed with your long-term success in mind.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
              { title: "Integrity", description: "Transparent, honest, and ethical in every interaction" },
              { title: "Excellence", description: "Uncompromising quality in everything we deliver" }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
