import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to your backend API
    console.log('Form submitted:', formData);
    alert('Form submission functionality - Connect to your backend here');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Background Image - Full opacity, no blur */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/contact.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      />

      {/* Subtle overlay for text readability - much lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business? Let's start the conversation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Acme Corporation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office Address</h3>
                      <p className="text-gray-400">
                        123 Innovation Drive<br />
                        Tech District, Lagos<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-400">
                        +234 (0) 800 000 0000<br />
                        Mon-Fri, 9:00 AM - 6:00 PM WAT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-400">
                        info@nexucentri.com<br />
                        support@nexucentri.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="aspect-video flex items-center justify-center">
              {/* 
                TO ADD GOOGLE MAPS: 
                Replace this div with:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              */}
              <div className="text-center">
                <MapPin size={80} className="text-cyan-400 mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Map Placeholder - Add your Google Maps embed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;