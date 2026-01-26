import React, { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800); // 800ms = 0.8 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1A1D23] via-[#00BFFF] to-[#00FFFF] animate-fadeIn">
      <div className="animate-scaleIn">
        <img 
          src="/logo.png"
          alt="Nexucentri"
          className="h-24 w-auto animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;