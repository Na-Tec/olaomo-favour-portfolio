import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { certifications } from '@/data/certifications';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <div className="px-6 md:px-8 py-14">

        <SectionHeader
          title="Certifications & Trainings"
          subtitle="Professional certifications and specialized training programs I've completed."
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[860px] mx-auto">

          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delayMs={index * 60} variant="right">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hover-lift
                  flex gap-4 items-start
                  p-5
                  rounded-xl
                  bg-[var(--card)]
                  border border-[var(--border)]
                  transition-all duration-200
                  hover:border-[#e74c3c]
                  cursor-pointer
                  hover:border-[var(--accent)]
                "
              >
                {/* IMAGE / ICON */}
                <div className="mt-0.5 flex-shrink-0">
                  {cert.image ? (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[var(--bg2)] border border-[var(--border)]">
                      <Image
                        src={cert.image}
                        alt={cert.organization}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-[var(--bg2)] border border-[var(--border)]">
                      <Award size={18} className="text-[#c0392b]" />
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  {/* TITLE + LINK */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--text)]">
                      {cert.title}
                    </h3>

                    {cert.url && (
                      <span className="text-[var(--muted)] group-hover:text-[#c0392b] transition-colors">
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>

                  {/* ORGANIZATION */}
                  <p className="text-sm text-[var(--muted)] mt-1 mb-3">
                    {cert.organization}
                  </p>

                  {/* DATE BADGE */}
                  <span
                    className="
                      inline-block
                      text-[11px]
                      px-2.5 py-1
                      rounded-md
                      border border-[var(--border)]
                      bg-[var(--bg2)]
                      text-[var(--text)]
                    "
                  >
                    {cert.date}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

        </div>

      </div>

    </div>
  );
}