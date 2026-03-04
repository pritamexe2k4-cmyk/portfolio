import React from 'react';
import { motion } from 'framer-motion';
import { FolderPlus, Info, Image, ArrowUpDown, User } from 'lucide-react';
import { Separator } from './ui/separator';

const ContextMenu = ({ x, y, onClose, onAction }) => {
  const items = [
    { label: 'New Folder', icon: FolderPlus, action: null },
    { label: 'Get Info', icon: Info, action: null },
    { type: 'separator' },
    { label: 'Change Wallpaper', icon: Image, action: null },
    { label: 'Sort By', icon: ArrowUpDown, action: null, hasSubmenu: true },
    { type: 'separator' },
    { label: 'About Preetam...', icon: User, action: 'about' },
  ];

  return (
    <>
      <div className="fixed inset-0" style={{ zIndex: 9997 }} onClick={onClose} />
      <motion.div
        className="fixed rounded-lg overflow-hidden py-1"
        style={{
          left: x,
          top: y,
          zIndex: 9998,
          width: '220px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2), 0 0 0 0.5px rgba(0,0,0,0.1)',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        {items.map((item, i) => {
          if (item.type === 'separator') {
            return <Separator key={i} className="my-1" style={{ background: 'rgba(0,0,0,0.08)' }} />;
          }
          const Icon = item.icon;
          return (
            <button
              key={i}
              className="w-full flex items-center gap-2.5 px-3 py-1.5 text-left text-[13px] hover:bg-[#0a84ff] hover:text-white bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
              onClick={() => {
                if (item.action) onAction(item.action);
                onClose();
              }}
            >
              <Icon className="w-4 h-4 opacity-70" />
              <span className="flex-1">{item.label}</span>
              {item.hasSubmenu && <span className="opacity-50">{"\u25B6"}</span>}
            </button>
          );
        })}
      </motion.div>
    </>
  );
};

export default ContextMenu;
