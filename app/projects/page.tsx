'use client';

import { useState } from 'react';
import { GitFork } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';

type Filter = 'all' | 'featured' | 'data analysis' | 'cloud';

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
          subtitle="A selection of my strongest AI, data science, and machine learning projects."
        />

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {(['all', 'featured', 'data analysis', 'cloud'] as Filter[]).map(
            (tab) => {
              const active = filter === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`
                    px-5 py-1.5 rounded-lg text-sm font-medium transition-all
                    border
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
            }
          )}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filtered.map((project) => (

            <div
              key={project.id}
              className="
                bg-[var(--card)]
                border border-[var(--border)]
                rounded-xl
                p-6
                flex flex-col
                gap-3
                min-h-[200px]
                transition-all duration-200
                hover:border-[#444]
              "
            >

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
                        text-[var(--muted)]
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              )}

              {/* GITHUB LINK */}
              <div className="mt-2">

                <a
                  href={project.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[var(--muted)]
                    hover:text-[#c0392b]
                    transition-colors
                  "
                >
                  <GitFork size={18} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}