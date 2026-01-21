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
          src="/logo.svg"
          alt="Nexucentri"
          className="max-w-md w-full px-8"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
