import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { desktopIconsConfig } from '../data/mock';

const FolderIcon = ({ isFile }) => {
  if (isFile) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60">
        <rect x="12" y="5" width="36" height="46" rx="3" fill="#e8e8e8" stroke="#ccc" strokeWidth="1" />
        <rect x="14" y="7" width="32" height="42" rx="2" fill="white" />
        <path d="M36 5L48 17" fill="none" />
        <path d="M36 5V17H48" fill="#e0e0e0" />
        <rect x="20" y="22" width="20" height="2" rx="1" fill="#d0d0d0" />
        <rect x="20" y="28" width="16" height="2" rx="1" fill="#d0d0d0" />
        <rect x="20" y="34" width="18" height="2" rx="1" fill="#d0d0d0" />
        <rect x="20" y="40" width="12" height="2" rx="1" fill="#d0d0d0" />
      </svg>
    );
  }
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <defs>
        <linearGradient id="folderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#72B4FF" />
          <stop offset="60%" stopColor="#1A6FE0" />
          <stop offset="100%" stopColor="#0F4BB5" />
        </linearGradient>
      </defs>
      <path d="M6 18C6 15 8 13 11 13H22L26 9H44C47 9 49 11 49 14V18H6Z" fill="#4A9EF5" />
      <rect x="6" y="17" width="48" height="32" rx="4" fill="url(#folderGrad)" />
      <rect x="6" y="17" width="48" height="8" rx="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
};

const DesktopIcons = ({ selectedIcon, onSelect, onDoubleClick }) => {
  const [positions, setPositions] = useState({});
  const clickTimerRef = useRef(null);
  const lastClickRef = useRef({ id: null, time: 0 });

  const getInitialPos = useCallback((icon) => {
    const MARGIN_X = 40;
    const RIGHT_OFFSET = 80;
    const SPACING_Y = 110;
    const TOP_START = 56;
    const LEFT_TOP_START = 320;

    if (icon.col === 'right') {
      return {
        x: window.innerWidth - RIGHT_OFFSET - 60,
        y: TOP_START + icon.row * SPACING_Y,
      };
    }
    return {
      x: MARGIN_X,
      y: LEFT_TOP_START + icon.row * SPACING_Y,
    };
  }, []);

  const handleClick = (icon, e) => {
    e.stopPropagation();
    const now = Date.now();
    if (lastClickRef.current.id === icon.id && now - lastClickRef.current.time < 400) {
      clearTimeout(clickTimerRef.current);
      onDoubleClick(icon.windowType);
      lastClickRef.current = { id: null, time: 0 };
    } else {
      lastClickRef.current = { id: icon.id, time: now };
      clickTimerRef.current = setTimeout(() => {
        onSelect(icon.id);
      }, 200);
    }
  };

  return (
    <>
      {desktopIconsConfig.map((icon, index) => {
        const pos = positions[icon.id] || getInitialPos(icon);
        const isSelected = selectedIcon === icon.id;

        return (
          <motion.div
            key={icon.id}
            className="absolute flex flex-col items-center w-[76px] cursor-default"
            style={{ left: pos.x, top: pos.y }}
            drag
            dragMomentum={false}
            dragElastic={0}
            onDragEnd={(e, info) => {
              setPositions((prev) => ({
                ...prev,
                [icon.id]: { x: pos.x + info.offset.x, y: pos.y + info.offset.y },
              }));
            }}
            onClick={(e) => handleClick(icon, e)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05, filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}
          >
            <div
              className="rounded-lg p-1"
              style={{
                background: isSelected ? 'rgba(10, 132, 255, 0.25)' : 'transparent',
                border: isSelected ? '1px solid rgba(10,132,255,0.5)' : '1px solid transparent',
              }}
            >
              <FolderIcon isFile={icon.isFile} />
            </div>
            <span
              className="text-[11px] mt-0.5 text-center leading-tight px-1 rounded"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                background: isSelected ? 'rgba(10, 132, 255, 0.3)' : 'transparent',
              }}
            >
              {icon.name}
            </span>
          </motion.div>
        );
      })}
    </>
  );
};

export default DesktopIcons;
