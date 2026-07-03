'use client';

import { useEffect, useState } from 'react';
import { Vscode } from './Icons';

type WakaTimeData = {
  active: boolean;
  todayText: string;
  yesterdayText: string;
  isMock: boolean;
};

export function WakaTimeStatus() {
  const [data, setData] = useState<WakaTimeData | null>(null);

  useEffect(() => {
    async function fetchWakaTime() {
      try {
        const res = await fetch('/api/wakatime');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error('Failed to fetch WakaTime status', err);
      }
    }

    fetchWakaTime();
    // Refresh every 5 minutes
    const interval = setInterval(fetchWakaTime, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return null; // Return nothing until loaded
  }

  // Determine styles depending on active state
  const isOnline = data.active;
  const statusColor = isOnline ? 'bg-slate-500 group-hover:bg-green-500 group-focus:bg-green-500 transition-colors duration-300' : 'bg-slate-500';
  const glowColor = isOnline ? 'bg-green-500/10' : 'bg-slate-500/10';
  const dotPulse = isOnline ? 'animate-pulse bg-green-500' : 'bg-slate-500';

  const formatTime = (timeStr?: string) => {
    if (!timeStr) return '';
    return timeStr.replace(/^0 hrs? /, '');
  };

  return (
    <>
      {/* Visual Dot on Avatar */}
      <div className={`absolute bottom-0 right-0 sm:bottom-1 sm:right-1 w-5 h-5 sm:w-6 sm:h-6 ${statusColor} rounded-full border-4 theme-profile-bg z-20 cursor-default`} title={isOnline ? "Online & Working" : "Offline"}>
        {/* Ping animation (only if online) */}
        {isOnline && <div className="absolute inset-0 rounded-full group-hover:bg-green-500 group-focus:bg-green-500 bg-slate-500 animate-ping opacity-40 transition-colors duration-300"></div>}
      </div>

      {/* Floating Status Card (visible on hover/tap) */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 pointer-events-none z-30 translate-x-2 group-hover:translate-x-0 group-focus:translate-x-0 w-max">
        <div className="bg-[#111118]/95 backdrop-blur-md border border-white/10 rounded-lg p-2.5 px-3.5 shadow-2xl flex items-center gap-3 relative overflow-hidden">
          {/* Subtle glow behind card */}
          <div className={`absolute top-0 right-0 w-24 h-24 ${glowColor} blur-2xl rounded-full opacity-50`}></div>

          <div className="bg-black/40 p-1.5 rounded-md border border-white/5 relative z-10 shrink-0">
            <Vscode size={20} />
          </div>

          <div className="text-left flex flex-col justify-center relative z-10 whitespace-nowrap">
            <p className="text-xs font-bold theme-text leading-tight flex items-center gap-1.5">
              {isOnline ? 'Online in VS Code' : 'Offline in VS Code'}
            </p>

            <p className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dotPulse}`}></span>
              {isOnline ? `Today I worked ${formatTime(data.todayText)}` : `Yesterday I worked ${formatTime(data.yesterdayText)}`}
            </p>

            {data.isMock && (
              <p className="text-[9px] text-yellow-500/80 mt-1 uppercase tracking-wide font-bold">
                ⚠️ Need API Key
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
