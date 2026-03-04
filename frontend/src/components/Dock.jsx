import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { Phone, Settings, Trash2, Music, Camera, Github, Linkedin } from 'lucide-react';
import { dockApps } from '../data/mock';

const ICON_SIZE = 52;
const MAGNIFIED_SIZE = 80;
const SPREAD = 150;

const AppIconContent = ({ appId, size }) => {
  const iconSize = Math.max(20, size * 0.45);

  switch (appId) {
    case 'finder':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: 'linear-gradient(145deg, #5EB0FF, #1A73E8)' }}>
          <svg viewBox="0 0 40 40" width="65%" height="65%">
            <rect x="6" y="8" width="28" height="24" rx="4" fill="rgba(255,255,255,0.92)" />
            <circle cx="15" cy="18" r="2.5" fill="#1A73E8" />
            <circle cx="25" cy="18" r="2.5" fill="#1A73E8" />
            <path d="M14 25 Q20 29 26 25" stroke="#1A73E8" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'strava':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: '#FC4C02' }}>
          <svg viewBox="0 0 40 40" width="55%" height="55%">
            <path d="M14 30L20 10L26 30M26 30L29 20L32 30" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'hevy':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: '#1a1a1a' }}>
          <svg viewBox="0 0 40 40" width="55%" height="55%">
            <rect x="8" y="16" width="5" height="8" rx="1" fill="#FF3B30" />
            <rect x="27" y="16" width="5" height="8" rx="1" fill="#FF3B30" />
            <rect x="13" y="18" width="14" height="4" rx="1" fill="#FF3B30" />
            <rect x="5" y="18" width="3" height="4" rx="0.5" fill="#FF3B30" />
            <rect x="32" y="18" width="3" height="4" rx="0.5" fill="#FF3B30" />
          </svg>
        </div>
      );
    case 'spotify':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '50%', background: '#1DB954' }}>
          <Music size={iconSize} color="white" strokeWidth={2.5} />
        </div>
      );
    case 'twitter':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: '#000' }}>
          <span style={{ color: 'white', fontWeight: 800, fontSize: iconSize * 0.9, fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>X</span>
        </div>
      );
    case 'instagram':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)' }}>
          <Camera size={iconSize} color="white" strokeWidth={2} />
        </div>
      );
    case 'linkedin':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: '#0A66C2' }}>
          <Linkedin size={iconSize} color="white" strokeWidth={2} />
        </div>
      );
    case 'github':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '50%', background: '#24292e' }}>
          <Github size={iconSize} color="white" strokeWidth={2} />
        </div>
      );
    case 'phone':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: 'linear-gradient(145deg, #65D36E, #28C840)' }}>
          <Phone size={iconSize} color="white" strokeWidth={2.5} />
        </div>
      );
    case 'settings':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: 'linear-gradient(145deg, #8E8E93, #636366)' }}>
          <Settings size={iconSize} color="white" strokeWidth={2} />
        </div>
      );
    case 'trash':
      return (
        <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '22%', background: 'linear-gradient(145deg, #A8A8AD, #8E8E93)' }}>
          <Trash2 size={iconSize} color="white" strokeWidth={2} />
        </div>
      );
    default:
      return null;
  }
};

const DockIcon = ({ app, mouseX, onClick, isRunning }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(
    distance,
    [-SPREAD, -SPREAD / 2, 0, SPREAD / 2, SPREAD],
    [ICON_SIZE, ICON_SIZE + 10, MAGNIFIED_SIZE, ICON_SIZE + 10, ICON_SIZE]
  );

  const size = useSpring(sizeSync, {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });

  const handleClick = async () => {
    await controls.start({
      y: [0, -20, 0, -12, 0, -5, 0],
      transition: { duration: 0.6, times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] },
    });
    onClick(app);
  };

  return (
    <div className="flex flex-col items-center relative group">
      <div
        className="absolute -top-9 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ transition: 'opacity 0.15s ease' }}
      >
        <div
          className="text-white text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap"
          style={{ background: 'rgba(40,40,40,0.85)', backdropFilter: 'blur(10px)' }}
        >
          {app.name}
        </div>
      </div>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        animate={controls}
        className="cursor-pointer relative"
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
      >
        <AppIconContent appId={app.id} size={ICON_SIZE} />
      </motion.div>
      {isRunning && (
        <motion.div
          className="w-1 h-1 rounded-full mt-0.5"
          style={{ background: 'rgba(255,255,255,0.85)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};

const Dock = ({ onAppClick, isAppRunning }) => {
  const mouseX = useMotionValue(Infinity);

  const handleAppClick = (app) => {
    if (app.action === 'link') {
      window.open(app.url, '_blank');
    } else if (app.action === 'window') {
      onAppClick(app.windowType);
    }
  };

  return (
    <motion.div
      className="fixed bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-1.5 px-3 py-1.5"
      style={{
        backdropFilter: 'blur(30px) saturate(200%)',
        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
        background: 'var(--macos-dock)',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)',
        zIndex: 9998,
      }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 1.2 }}
    >
      {dockApps.map((app) => {
        if (app.action === 'divider') {
          return (
            <div
              key={app.id}
              className="mx-1 self-center"
              style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.15)' }}
            />
          );
        }
        return (
          <DockIcon
            key={app.id}
            app={app}
            mouseX={mouseX}
            onClick={handleAppClick}
            isRunning={app.windowType ? isAppRunning(app.windowType) : false}
          />
        );
      })}
    </motion.div>
  );
};

export default Dock;
