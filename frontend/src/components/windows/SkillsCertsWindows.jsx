import React from 'react';
import { skills, currentlyLearning, certifications, educationList } from '../../data/mock';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { GraduationCap, BookOpen, School, Award } from 'lucide-react';

export const SkillsContent = () => (
  <div className="p-6">
    <h3 className="text-[14px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Technical Skills</h3>

    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="mb-4">
        <h4 className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>{category}</h4>
        <div className="flex flex-wrap gap-1.5">
          {items.map((skill) => (
            <span
              key={skill}
              className="text-[12px] px-2.5 py-1 rounded-md cursor-default"
              style={{
                background: 'rgba(10,132,255,0.08)',
                border: '1px solid rgba(10,132,255,0.3)',
                color: 'var(--text-primary)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(10,132,255,0.2)'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(10,132,255,0.08)'; }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}

    <Separator className="my-4" />

    <h4 className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Currently Learning</h4>
    <div className="flex flex-wrap gap-1.5">
      {currentlyLearning.map((skill) => (
        <span
          key={skill}
          className="text-[12px] px-2.5 py-1 rounded-md"
          style={{
            background: 'rgba(255,149,0,0.1)',
            border: '1px solid rgba(255,149,0,0.3)',
            color: 'var(--text-primary)',
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const educationIcons = {
  grad: GraduationCap,
  book: BookOpen,
  school: School,
};

export const CertificationsContent = () => (
  <div className="p-6">
    <h3 className="text-[14px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Certifications</h3>
    <div className="space-y-3">
      {certifications.map((cert, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 rounded-lg"
          style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FFB800' }} />
          <div>
            <div className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{cert.title}</div>
            <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{cert.subtitle}</div>
            {cert.detail && <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{cert.detail}</div>}
          </div>
        </div>
      ))}
    </div>

    <Separator className="my-5" />

    <h3 className="text-[14px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Education</h3>
    <div className="space-y-3">
      {educationList.map((edu, i) => {
        const Icon = educationIcons[edu.iconType] || GraduationCap;
        return (
          <div key={i} className="flex items-center gap-3">
            <Icon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
            <div className="flex-1">
              <div className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                {edu.title} — {edu.institution}
              </div>
              <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{edu.period}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
