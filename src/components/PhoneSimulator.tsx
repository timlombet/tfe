import React, { useEffect, useState } from "react";

interface PhoneSimulatorProps {
  children: React.ReactNode;
}

export default function PhoneSimulator({ children }: PhoneSimulatorProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 sm:p-8 font-sans transition-all duration-300">
      {/* Phone container wrapper for DESKTOP, fully responsive to scale nicely */}
      <div className="relative w-full max-w-[400px] h-[820px] bg-neutral-950 rounded-[48px] shadow-2xl border-[12px] border-neutral-900 sm:flex flex-col overflow-hidden select-none">
        
        {/* Dynamic Screen contents */}
        <div id="phone-screen" className="relative w-full h-full bg-white flex flex-col overflow-hidden rounded-[36px]">
          
          {/* Simulated Status Bar (iOS / Android style) */}
          <div className="h-10 px-6 flex justify-between items-center bg-white border-b border-neutral-100/50 text-neutral-800 text-[11px] font-semibold tracking-tight shrink-0 z-50">
            {/* Clock */}
            <span className="font-medium select-none">{time || "09:00"}</span>
            
            {/* Speaker Camera Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-full flex items-center justify-center space-x-2 z-50">
              <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full"></div>
              <div className="w-10 h-0.5 bg-neutral-800 rounded-full"></div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-1.5 font-mono select-none">
              <span>LTE</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 fill-current text-neutral-700" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 2c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"/>
                </svg>
              </span>
              <span>100%</span>
            </div>
          </div>

          {/* Core Content Area */}
          <div className="relative w-full flex-grow overflow-hidden flex flex-col bg-white">
            {children}
          </div>

          {/* Bottom virtual home bar button for iOS style */}
          <div className="h-6 w-full flex justify-center items-center bg-white shrink-0 z-40">
            <div className="w-32 h-1 bg-neutral-300 rounded-full mb-1"></div>
          </div>
        </div>

        {/* Outer details / reflection */}
        <div className="pointer-events-none absolute -inset-px rounded-[48px] border border-white/10"></div>
      </div>
    </div>
  );
}
