import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuBar from './MenuBar';
import Dock from './Dock';
import DesktopIcons from './DesktopIcons';
import StickyNote from './StickyNote';
import HeroText from './HeroText';
import Window from './Window';
import ContextMenu from './ContextMenu';
import { AboutContent, ProjectsContent, ExperienceContent } from './windows/ResumeWindows';
import { SkillsContent, CertificationsContent } from './windows/SkillsCertsWindows';
import { StravaContent, HevyContent, SpotifyContent } from './windows/AppWindows';
import { ContactContent, SystemPrefsContent, TrashContent } from './windows/UtilityWindows';

const WINDOW_CONTENT_MAP = {
  about: AboutContent,
  projects: ProjectsContent,
  experience: ExperienceContent,
  skills: SkillsContent,
  certifications: CertificationsContent,
  strava: StravaContent,
  hevy: HevyContent,
  spotify: SpotifyContent,
  contact: ContactContent,
  systemprefs: SystemPrefsContent,
  trash: TrashContent,
};

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(100);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);

  const openWindow = useCallback(
    (windowType) => {
      const existing = openWindows.find((w) => w.type === windowType);
      if (existing) {
        setOpenWindows((prev) =>
          prev.map((w) =>
            w.id === existing.id ? { ...w, zIndex: nextZIndex, minimized: false } : w
          )
        );
        setNextZIndex((prev) => prev + 1);
        return;
      }

      const newWindow = {
        id: `${windowType}-${Date.now()}`,
        type: windowType,
        zIndex: nextZIndex,
        minimized: false,
      };

      setOpenWindows((prev) => [...prev, newWindow]);
      setNextZIndex((prev) => prev + 1);
    },
    [openWindows, nextZIndex]
  );

  const closeWindow = useCallback((windowId) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== windowId));
  }, []);

  const focusWindow = useCallback(
    (windowId) => {
      setOpenWindows((prev) =>
        prev.map((w) => (w.id === windowId ? { ...w, zIndex: nextZIndex } : w))
      );
      setNextZIndex((prev) => prev + 1);
    },
    [nextZIndex]
  );

  const minimizeWindow = useCallback((windowId) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, minimized: true } : w))
    );
  }, []);

  const isAppRunning = useCallback(
    (windowType) => {
      return openWindows.some((w) => w.type === windowType && !w.minimized);
    },
    [openWindows]
  );

  // Escape key closes top window
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openWindows.length > 0) {
        const topWindow = [...openWindows]
          .filter((w) => !w.minimized)
          .sort((a, b) => b.zIndex - a.zIndex)[0];
        if (topWindow) closeWindow(topWindow.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openWindows, closeWindow]);

  const handleDesktopClick = () => {
    setSelectedIcon(null);
    setContextMenu(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
    >
      {/* Grid Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#f0f0f0' }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="desktopGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <line x1="24" y1="0" x2="24" y2="24" stroke="#d4d4d4" strokeWidth="0.5" />
              <line x1="0" y1="24" x2="24" y2="24" stroke="#d4d4d4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#desktopGrid)" />
        </svg>
      </div>

      {/* Menu Bar */}
      <MenuBar onNavClick={openWindow} />

      {/* Desktop Area (click target) */}
      <div className="absolute inset-0 pt-7 pb-20">
        <HeroText />
        <StickyNote />
        <DesktopIcons
          selectedIcon={selectedIcon}
          onSelect={setSelectedIcon}
          onDoubleClick={openWindow}
        />
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows
          .filter((w) => !w.minimized)
          .map((win) => {
            const ContentComponent = WINDOW_CONTENT_MAP[win.type];
            return (
              <Window
                key={win.id}
                windowData={win}
                onClose={closeWindow}
                onFocus={focusWindow}
                onMinimize={minimizeWindow}
              >
                {ContentComponent ? <ContentComponent /> : null}
              </Window>
            );
          })}
      </AnimatePresence>

      {/* Dock */}
      <Dock onAppClick={openWindow} isAppRunning={isAppRunning} />

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={() => setContextMenu(null)}
            onAction={(action) => {
              if (action === 'about') openWindow('about');
              setContextMenu(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Desktop;
