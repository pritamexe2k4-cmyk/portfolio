import React, { useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { windowConfigs } from '../data/mock';

const TrafficLights = ({ onClose, onMinimize, onMaximize }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center border-none cursor-pointer"
        style={{ background: 'var(--macos-red)' }}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        {hovered && (
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center border-none cursor-pointer"
        style={{ background: 'var(--macos-yellow)' }}
        onClick={(e) => { e.stopPropagation(); onMinimize(); }}
      >
        {hovered && (
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M1.5 4H6.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center border-none cursor-pointer"
        style={{ background: 'var(--macos-green)' }}
        onClick={(e) => { e.stopPropagation(); if (onMaximize) onMaximize(); }}
      >
        {hovered && (
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M1.5 5.5L4 2.5L6.5 5.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
};

const Window = ({ windowData, onClose, onFocus, onMinimize, children }) => {
  const dragControls = useDragControls();
  const config = windowConfigs[windowData.type] || { title: 'Window', width: 500, height: 400 };

  const offsetIndex = (windowData.zIndex - 100) % 5;
  const centerX = Math.max(20, (window.innerWidth - config.width) / 2 + offsetIndex * 25);
  const centerY = Math.max(40, (window.innerHeight - config.height) / 2 - 20 + offsetIndex * 20);

  return (
    <motion.div
      className="fixed overflow-hidden flex flex-col"
      style={{
        width: config.width,
        height: config.height,
        left: centerX,
        top: centerY,
        zIndex: windowData.zIndex,
        borderRadius: '12px',
        background: 'var(--macos-window-bg)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 0 0 0.5px rgba(0,0,0,0.1)',
        minWidth: 400,
        minHeight: 300,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
      transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.8 }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      onPointerDown={() => onFocus(windowData.id)}
    >
      {/* Title Bar */}
      <div
        className="flex items-center h-10 px-4 flex-shrink-0 cursor-grab active:cursor-grabbing"
        style={{
          background: 'rgba(246,246,246,0.95)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}
        onPointerDown={(e) => {
          e.preventDefault();
          dragControls.start(e);
        }}
      >
        <TrafficLights
          onClose={() => onClose(windowData.id)}
          onMinimize={() => onMinimize(windowData.id)}
        />
        <div className="flex-1 text-center">
          <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
            {config.title}
          </span>
        </div>
        <div className="w-[52px]" />
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto" style={{ background: 'rgba(255,255,255,0.96)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
