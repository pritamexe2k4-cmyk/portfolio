import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, projects, experience } from '../../data/mock';
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

export const AboutContent = () => (
  <div className="p-6">
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold"
          style={{ background: 'linear-gradient(145deg, #667eea, #764ba2)', color: 'white', fontFamily: "'Playfair Display', serif" }}
        >
          PP
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{personalInfo.name}</h2>
        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          {personalInfo.title} · {personalInfo.subtitle}
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          {personalInfo.education}
        </p>
      </div>
    </div>

    <Separator className="my-4" />

    <p className="text-[13px] leading-relaxed italic" style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      "{personalInfo.bio}"
    </p>

    <Separator className="my-4" />

    <div className="space-y-2.5">
      <div className="flex items-center gap-2.5 text-[13px]" style={{ color: 'var(--text-primary)' }}>
        <Mail className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
        <a href={`mailto:${personalInfo.email}`} className="hover:underline" style={{ color: '#0a84ff' }}>{personalInfo.email}</a>
      </div>
      <div className="flex items-center gap-2.5 text-[13px]" style={{ color: 'var(--text-primary)' }}>
        <Phone className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
        <span>{personalInfo.phone}</span>
      </div>
      <div className="flex items-center gap-2.5 text-[13px]" style={{ color: 'var(--text-primary)' }}>
        <Github className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#0a84ff' }}>
          github.com/{personalInfo.githubHandle}
        </a>
      </div>
      <div className="flex items-center gap-2.5 text-[13px]" style={{ color: 'var(--text-primary)' }}>
        <Linkedin className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#0a84ff' }}>
          linkedin.com/in/{personalInfo.linkedinHandle}
        </a>
      </div>
    </div>

    <Separator className="my-4" />

    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>Interests:</span>
      {personalInfo.interests.map((interest) => (
        <Badge key={interest} variant="secondary" className="text-[11px] font-normal">
          {interest}
        </Badge>
      ))}
    </div>
  </div>
);

export const ProjectsContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject !== null) {
    const project = projects[selectedProject];
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: 'rgba(0,0,0,0.08)', background: 'rgba(246,246,246,0.6)' }}>
          <button
            className="flex items-center gap-1 text-[13px] bg-transparent border-none cursor-pointer"
            style={{ color: '#0a84ff' }}
            onClick={() => setSelectedProject(null)}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
            <Badge variant="outline" className="text-[11px]">{project.date}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-secondary)' }}>What it does</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>{project.whatItDoes}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-secondary)' }}>How it works</h4>
            <div className="space-y-1">
              {project.howItWorks.map((step, i) => (
                <p key={i} className="text-[13px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>{step}</p>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-secondary)' }}>Tech stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[11px] font-normal">{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-secondary)' }}>Key achievements</h4>
            <div className="space-y-1">
              {project.achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--text-primary)' }}>
                  <span style={{ color: '#0a84ff' }}>\u2726</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h3 className="text-[14px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Projects</h3>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-transparent border-none cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.02)' }}
            whileHover={{ scale: 1.04, background: 'rgba(10, 132, 255, 0.08)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(i)}
          >
            <svg width="56" height="56" viewBox="0 0 60 60">
              <defs>
                <linearGradient id={`pgrad${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#72B4FF" />
                  <stop offset="60%" stopColor="#1A6FE0" />
                  <stop offset="100%" stopColor="#0F4BB5" />
                </linearGradient>
              </defs>
              <path d="M6 18C6 15 8 13 11 13H22L26 9H44C47 9 49 11 49 14V18H6Z" fill="#4A9EF5" />
              <rect x="6" y="17" width="48" height="32" rx="4" fill={`url(#pgrad${i})`} />
              <rect x="6" y="17" width="48" height="8" rx="3" fill="rgba(255,255,255,0.15)" />
            </svg>
            <span className="text-[11px] text-center leading-tight" style={{ color: 'var(--text-primary)' }}>
              {project.title.length > 20 ? project.title.substring(0, 20) + '...' : project.title}
            </span>
            <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{project.date}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export const ExperienceContent = () => (
  <div className="p-6">
    <h3 className="text-[14px] font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>Professional Experience</h3>
    <div className="relative pl-6">
      <div className="absolute left-2 top-2 bottom-2 w-px" style={{ background: 'rgba(0,0,0,0.1)' }} />
      {experience.map((exp, i) => (
        <div key={exp.id} className="relative mb-6 last:mb-0">
          <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: '#0a84ff', background: 'white' }} />
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[12px] font-bold" style={{ color: '#0a84ff' }}>{exp.year}</span>
            <span className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.role}</span>
          </div>
          <div className="text-[12px] mb-1.5" style={{ color: 'var(--text-secondary)' }}>
            {exp.company} · {exp.period}
          </div>
          {exp.description && (
            <p className="text-[12px] mb-2 italic" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
          )}
          <ul className="space-y-1">
            {exp.bullets.map((bullet, j) => (
              <li key={j} className="text-[12px] leading-relaxed flex items-start gap-1.5" style={{ color: 'var(--text-primary)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
