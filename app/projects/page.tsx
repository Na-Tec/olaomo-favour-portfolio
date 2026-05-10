'use client';
import { useState } from 'react';
import { GitFork } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';

type Filter = 'all' | 'featured' | 'other';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <SectionHeader title="Projects" subtitle="A selection of my strongest AI, data science, and machine learning projects." />

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '48px' }}>
          {(['all', 'featured', 'other'] as Filter[]).map((tab) => (
            <button key={tab} onClick={() => setFilter(tab)}
              style={{
                padding: '8px 22px', borderRadius: '999px', fontSize: '14px', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
                border: filter === tab ? 'none' : '1px solid #2e2e2e',
                background: filter === tab ? '#c0392b' : 'transparent',
                color: filter === tab ? '#fff' : '#888',
                transition: 'all 0.2s',
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* 3-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          className="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3"
        >
          {filtered.map((project) => (
            <div key={project.id}
              style={{ background: '#161616', border: '1px solid #222', borderRadius: '10px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '200px', transition: 'border-color 0.2s' }}
              className="hover:!border-[#333]"
            >
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700, color: '#e8e8e8', lineHeight: 1.35 }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#777', lineHeight: 1.65, flex: 1 }}>
                {project.description}
              </p>
              {project.tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '4px', padding: '3px 10px', fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: '#bbb' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: '4px' }}>
                <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#444', transition: 'color 0.2s' }} className="hover:!text-[#ccc]">
                  <GitFork size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
