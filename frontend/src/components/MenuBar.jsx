import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Search } from 'lucide-react';

const MenuBar = ({ onNavClick }) => {
  const [time, setTime] = useState(new Date());
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${dateNum}, ${hours}:${minutes} ${ampm}`;
  };

  const navItems = [
    { label: 'About', type: 'about' },
    { label: 'Projects', type: 'projects' },
    { label: 'Experience', type: 'experience' },
    { label: 'Contact', type: 'contact' },
    { label: 'Resume', type: 'about' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 flex items-center px-4"
        style={{
          height: '28px',
          background: 'var(--macos-bar)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          zIndex: 9999,
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
        initial={{ y: -28 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center gap-4 flex-shrink-0" style={{ width: '250px' }}>
          <span className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>
            <svg className="inline-block w-[14px] h-[14px] mr-1.5 -mt-0.5" viewBox="0 0 24 24" fill="#1d1d1f">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Pujari Preetam's Portfolio
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="text-[13px] hover:opacity-60 transition-opacity duration-150 bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => onNavClick(item.type)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0" style={{ width: '250px', justifyContent: 'flex-end' }}>
          <Battery className="w-[16px] h-[16px]" style={{ color: 'var(--text-primary)' }} />
          <Wifi className="w-[14px] h-[14px]" style={{ color: 'var(--text-primary)' }} />
          <button className="bg-transparent border-none cursor-pointer p-0" onClick={() => setSpotlightOpen(true)}>
            <Search className="w-[14px] h-[14px]" style={{ color: 'var(--text-primary)' }} />
          </button>
          <span className="text-[12px] font-medium tabular-nums" style={{ color: 'var(--text-primary)' }}>
            {formatTime(time)}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {spotlightOpen && (
          <motion.div
            className="fixed inset-0 flex items-start justify-center pt-[20vh]"
            style={{ zIndex: 10000 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSpotlightOpen(false)}
          >
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
              className="relative w-[560px] rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              }}
              initial={{ scale: 0.9, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center px-4 py-3 gap-3">
                <Search className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  autoFocus
                  className="flex-1 bg-transparent outline-none text-[16px] placeholder:text-[#6e6e73]"
                  style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
                  placeholder="Spotlight Search"
                  onKeyDown={(e) => e.key === 'Escape' && setSpotlightOpen(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBar;
