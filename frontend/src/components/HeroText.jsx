import React from 'react';
import { motion } from 'framer-motion';

const HeroText = () => {
  const word = 'portfolio.';

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-55%, -55%)',
      }}
    >
      <motion.p
        className="mb-1"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '18px',
          letterSpacing: '0.05em',
          color: '#555',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      >
        welcome to my
      </motion.p>
      <div className="flex">
        {word.split('').map((letter, i) => (
          <motion.span
            key={i}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(72px, 10vw, 140px)',
              lineHeight: 1,
              color: '#1a1a1a',
              fontWeight: i === 0 ? 800 : 400,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + i * 0.05,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
