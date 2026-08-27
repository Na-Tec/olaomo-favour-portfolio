'use client';

import { useState } from 'react';
import { GitBranch, BookOpen } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

type Filter = 'all' | 'featured' | 'Data analysis' | 'Cloud Engineering' | ' AI Automation' | 'Data Engineering';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14">

        <SectionHeader
          title="Projects"
          subtitle="A selection of my strongest Cloud, Data & Analytics projects."
        />

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'featured', 'Data analysis', 'Cloud Engineering', 'AI Automation', 'Data Engineering'] as Filter[]).map((tab) => {
            const active = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`
                  px-5 py-1.5 rounded-lg text-sm font-medium transition-all border
                  ${
                    active
                      ? 'bg-[#c0392b] text-white border-transparent'
                      : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-[#444] hover:text-[var(--text)]'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delayMs={(index % 9) * 55} variant="scale">
              <div
                className="
                  hover-lift
                  bg-[var(--card)]
                  border border-[var(--border)]
                  rounded-xl
                  overflow-hidden
                  flex flex-col
                  min-h-[200px]
                  transition-all duration-200
                  hover:border-[#e74c3c]
                "
              >
                {/* IMAGE */}
                {project.image && (
                  <div className="relative w-full h-40 bg-[var(--bg2)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col gap-3 flex-1">
                  {/* TITLE */}
                  <h3 className="text-[16px] font-semibold leading-snug text-[var(--text)]">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            text-[11px]
                            px-2.5 py-1
                            rounded-md
                            border border-[var(--border)]
                            bg-[var(--bg2)]
                            text-[var(--text)]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4 mt-2 pt-3 border-t border-[var(--border)]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[#c0392b] transition-colors"
                      >
                        <GitBranch size={16} />
                        GitHub
                      </a>
                    )}
                    {project.mediumUrl && (
                      <a
                        href={project.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[#c0392b] transition-colors"
                      >
                        <BookOpen size={16} />
                        Medium
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}