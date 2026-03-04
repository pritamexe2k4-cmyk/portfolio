import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/mock';
import { ExternalLink, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Dumbbell, Activity, ArrowUp } from 'lucide-react';

export const StravaContent = () => (
  <div className="h-full flex flex-col" style={{ background: '#FFFFFF' }}>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#FC4C02' }}>
          <svg viewBox="0 0 40 40" width="22" height="22">
            <path d="M14 30L20 10L26 30M26 30L29 20L32 30" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-[15px] font-bold" style={{ color: '#FC4C02' }}>Strava</div>
          <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{personalInfo.name}</div>
        </div>
      </div>

      <div className="rounded-lg p-4 mb-3" style={{ background: 'rgba(252,76,2,0.05)', border: '1px solid rgba(252,76,2,0.15)' }}>
        <div className="text-[12px] font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>This Week</div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5" style={{ color: '#FC4C02' }} />
            <div>
              <div className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>Running</div>
              <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>0 km</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FC4C02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M12 18V6l7 12"/>
            </svg>
            <div>
              <div className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>Cycling</div>
              <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>0 km</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[13px] italic mb-4" style={{ color: 'var(--text-secondary)' }}>"The suffer is real."</p>

      <a
        href={personalInfo.strava}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[13px] font-medium no-underline"
        style={{ color: '#FC4C02' }}
      >
        View on Strava <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

export const HevyContent = () => (
  <div className="h-full flex flex-col" style={{ background: '#1a1a1a' }}>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#2a2a2a' }}>
          <Dumbbell className="w-5 h-5" style={{ color: '#FF3B30' }} />
        </div>
        <div>
          <div className="text-[15px] font-bold" style={{ color: '#FF3B30' }}>Hevy</div>
          <div className="text-[12px]" style={{ color: '#888' }}>Recent Workouts</div>
        </div>
      </div>

      <div className="space-y-2.5 mb-4">
        {[
          { icon: ArrowUp, name: 'Push Day', time: '45 min', iconColor: '#FF6B6B' },
          { icon: Activity, name: 'Leg Day', time: '60 min', iconColor: '#4ECDC4' },
          { icon: Dumbbell, name: 'Pull Day', time: '50 min', iconColor: '#FFE66D' },
        ].map((workout, i) => {
          const WIcon = workout.icon;
          return (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ background: '#2a2a2a' }}>
              <div className="flex items-center gap-2.5">
                <WIcon className="w-4 h-4" style={{ color: workout.iconColor }} />
                <span className="text-[13px] font-medium" style={{ color: '#fff' }}>{workout.name}</span>
              </div>
              <span className="text-[12px]" style={{ color: '#888' }}>{workout.time}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between p-3 rounded-lg mb-3" style={{ background: '#2a2a2a' }}>
        <span className="text-[12px]" style={{ color: '#888' }}>Current Split</span>
        <span className="text-[13px] font-medium" style={{ color: '#FF3B30' }}>PPL</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-lg" style={{ background: '#2a2a2a' }}>
        <span className="text-[12px]" style={{ color: '#888' }}>Consistency</span>
        <span className="text-[13px] font-bold" style={{ color: '#FFD700' }}>100%</span>
      </div>

      <a
        href={personalInfo.hevy}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[13px] font-medium no-underline mt-4"
        style={{ color: '#FF3B30' }}
      >
        View on Hevy <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

export const SpotifyContent = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.3));
    }, 100);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="h-full flex flex-col" style={{ background: '#121212' }}>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#1DB954' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <span className="text-[14px] font-bold" style={{ color: '#1DB954' }}>Spotify</span>
        </div>

        <motion.div
          className="w-48 h-48 mx-auto rounded-lg mb-5 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #1DB954 0%, #191414 100%)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}
          animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 60 60" width="60" height="60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <circle cx="30" cy="30" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="30" cy="30" r="8" fill="rgba(255,255,255,0.2)" />
            </svg>
          </div>
        </motion.div>

        <div className="text-center mb-4">
          <div className="text-[15px] font-semibold" style={{ color: '#fff' }}>Focus Mode Playlist</div>
          <div className="text-[12px]" style={{ color: '#b3b3b3' }}>Various Artists</div>
        </div>

        <div className="mb-4">
          <div className="w-full h-1 rounded-full" style={{ background: '#4d4d4d' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: '#1DB954', width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px]" style={{ color: '#b3b3b3' }}>1:23</span>
            <span className="text-[10px]" style={{ color: '#b3b3b3' }}>3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Shuffle className="w-4 h-4 cursor-pointer" style={{ color: '#b3b3b3' }} />
          <SkipBack className="w-5 h-5 cursor-pointer" style={{ color: '#fff' }} />
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer"
            style={{ background: '#fff' }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-5 h-5" style={{ color: '#000' }} /> : <Play className="w-5 h-5 ml-0.5" style={{ color: '#000' }} />}
          </button>
          <SkipForward className="w-5 h-5 cursor-pointer" style={{ color: '#fff' }} />
          <Repeat className="w-4 h-4 cursor-pointer" style={{ color: '#b3b3b3' }} />
        </div>

        <a
          href={personalInfo.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[12px] font-medium no-underline mt-auto pt-3"
          style={{ color: '#1DB954' }}
        >
          Open Spotify <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
