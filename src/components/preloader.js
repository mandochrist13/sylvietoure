"use client";

import AnimatedLogo from "@/animation/animated-logo";

const Preloader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        {/* Cercle de chargement */}
        <div className="border-t-5 absolute top-0 hidden h-[200px] w-[200px] animate-spin rounded-full border border-teal-700 "></div>
        {/* Logo */}
        <div className="mt-[40px] flex flex-col items-center justify-center">
          <AnimatedLogo />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
