import React, { useState } from 'react';
import { personalInfo } from '../../data/mock';
import { Phone, Mail, Github, Linkedin, ExternalLink, Copy, Check, MapPin, Trash2 } from 'lucide-react';
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';

export const ContactContent = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    { icon: Phone, label: personalInfo.phone, action: `tel:${personalInfo.phone}`, copyText: personalInfo.phone, field: 'phone', color: '#28C840' },
    { icon: Mail, label: personalInfo.email, action: `mailto:${personalInfo.email}`, copyText: personalInfo.email, field: 'email', color: '#0a84ff' },
  ];

  const socials = [
    { icon: Github, label: `github.com/${personalInfo.githubHandle}`, url: personalInfo.github },
    { icon: Linkedin, label: `linkedin.com/in/${personalInfo.linkedinHandle}`, url: personalInfo.linkedin },
    { label: 'Instagram', url: personalInfo.instagram },
    { label: 'X / Twitter', url: personalInfo.twitter },
  ];

  return (
    <div className="p-6" style={{ background: 'linear-gradient(180deg, rgba(40,200,64,0.04), transparent)' }}>
      <h3 className="text-[15px] font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>Contact</h3>

      <div className="space-y-3 mb-5">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.field} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" style={{ color: c.color }} />
                <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{c.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={c.action}
                  className="text-[12px] px-2.5 py-1 rounded-md no-underline"
                  style={{ background: 'rgba(10,132,255,0.1)', color: '#0a84ff' }}
                >
                  {c.field === 'phone' ? 'Call' : 'Email'}
                </a>
                <button
                  className="text-[12px] px-2.5 py-1 rounded-md flex items-center gap-1 border-none cursor-pointer"
                  style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-primary)' }}
                  onClick={() => copyToClipboard(c.copyText, c.field)}
                >
                  {copied === c.field ? (
                    <><Check className="w-3 h-3" style={{ color: '#28C840' }} /> Copied!</>
                  ) : (
                    <><Copy className="w-3 h-3" /> Copy</>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2.5">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] no-underline hover:opacity-70"
              style={{ color: 'var(--text-primary)', transition: 'opacity 0.15s' }}
            >
              {Icon ? <Icon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} /> : <ExternalLink className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />}
              <span>{s.label}</span>
              <ExternalLink className="w-3 h-3 ml-auto" style={{ color: 'var(--text-secondary)' }} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export const SystemPrefsContent = () => {
  const specs = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Model', value: 'AI/ML Engineer, 2024' },
    { label: 'Chip', value: 'Python · PyTorch Brain' },
    { label: 'Memory', value: 'RAG + Vector DB' },
    { label: 'Storage', value: 'GitHub (\u221e commits)' },
    { label: 'OS', value: 'Hyderabad, India' },
    { label: 'Version', value: 'B.Tech CSE 3rd Year' },
  ];

  const bars = [
    { label: 'Skills Loaded', value: 100, color: '#0a84ff' },
    { label: 'Coffee Level', value: 80, color: '#FF9500' },
    { label: 'Bugs Fixed', value: 100, color: '#28C840' },
  ];

  return (
    <div className="h-full flex">
      <div className="w-[160px] flex-shrink-0 p-4" style={{ background: 'rgba(0,0,0,0.03)', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>System</div>
        <div className="space-y-1">
          {['General', 'About', 'Network'].map((item, i) => (
            <div
              key={item}
              className="text-[13px] px-2.5 py-1.5 rounded-md"
              style={{
                background: i === 1 ? 'rgba(10,132,255,0.15)' : 'transparent',
                color: i === 1 ? '#0a84ff' : 'var(--text-primary)',
                fontWeight: i === 1 ? 500 : 400,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-5 overflow-auto">
        <h3 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>About This Developer</h3>
        <p className="text-[11px] mb-4" style={{ color: 'var(--text-secondary)' }}>Preetam Edition</p>

        <div className="space-y-2.5 mb-5">
          {specs.map((spec) => (
            <div key={spec.label} className="flex">
              <span className="text-[12px] w-20 flex-shrink-0 font-medium" style={{ color: 'var(--text-secondary)' }}>{spec.label}</span>
              <span className="text-[12px]" style={{ color: 'var(--text-primary)' }}>{spec.value}</span>
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-3">
          {bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px]" style={{ color: 'var(--text-primary)' }}>{bar.label}</span>
                <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{bar.value}%</span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: bar.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.value}%` }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TrashContent = () => (
  <div className="h-full flex flex-col items-center justify-center p-6">
    <Trash2 className="w-12 h-12 mb-3" style={{ color: 'var(--text-secondary)' }} />
    <p className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>No regrets here</p>
    <p className="text-[13px] mt-1" style={{ color: 'var(--text-secondary)' }}>Trash is empty. Life is good.</p>
  </div>
);
