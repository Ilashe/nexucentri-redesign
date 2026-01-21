import React from 'react';

const NewsTicker = () => {
  const news = [
    "🚀 Nexucentri launches AI-powered CRM solution",
    "🏆 Recognized as Top IT Consulting Firm 2026",
    "💡 New Cloud Infrastructure Services Now Available",
    "📊 Successfully deployed automation for 50+ enterprises",
    "🔒 Enhanced security protocols protecting 1M+ users"
  ];

  return (
    <div className="bg-gradient-to-r from-[#00BFFF]/20 to-[#00FFFF]/20 backdrop-blur-sm border-y border-[#00BFFF]/20 py-3 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...news, ...news].map((item, idx) => (
            <span key={idx} className="ticker-item text-[#00FFFF] font-medium px-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
