import React from 'react';
import { motion } from 'framer-motion';
import { stickyNoteItems } from '../data/mock';

const StickyNote = () => {
  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: '40px',
        top: '56px',
        width: '230px',
        background: 'var(--sticky-yellow)',
        borderRadius: '2px',
        padding: '16px 18px',
        transform: 'rotate(-1.5deg)',
        boxShadow: '3px 3px 12px rgba(0,0,0,0.15)',
        fontFamily: "'Caveat', cursive",
        fontSize: '14px',
        color: '#1a1a1a',
        zIndex: 50,
      }}
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ boxShadow: '4px 4px 16px rgba(0,0,0,0.2)' }}
    >
      <div className="font-semibold text-[16px] mb-2">To do:</div>
      {stickyNoteItems.map((item, i) => (
        <div key={i} className="flex items-start gap-1.5 mb-0.5">
          <span className="flex-shrink-0 mt-0.5">{item.done ? '\u2611' : '\u2610'}</span>
          <span
            style={{
              textDecoration: item.done ? 'line-through' : 'none',
              color: item.done ? '#888' : '#1a1a1a',
            }}
          >
            {item.text}
          </span>
        </div>
      ))}
      {/* Paper fold effect */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: '20px',
          height: '20px',
          background: 'linear-gradient(135deg, var(--sticky-yellow) 50%, #e6d85c 50%)',
          borderRadius: '0 0 2px 0',
        }}
      />
    </motion.div>
  );
};

export default StickyNote;
