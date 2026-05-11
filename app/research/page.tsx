import { FileText, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { publications } from '@/data/research';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-(--bg)] text-(--text)] transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-24">

        <SectionHeader
          title="Research & Publications"
          subtitle="Peer-reviewed publications in top-tier AI/ML venues."
        />

        {/* PUBLICATIONS LIST */}
        <div className="max-w-[820px] mx-auto flex flex-col gap-4">

          {publications.map((pub) => (

            <div
              key={pub.id}
              className="
                flex gap-4 items-start
                p-6
                rounded-xl
                bg-(--card)]
                border border-(--border)]
                transition-all duration-200
                hover:border-[#e74c3c]
                cursor: pointer
                hover:border-var(--accent) hover:-translate-y-0.5
              "
            >

              {/* ICON */}
              <div className="flex-shrink-0 mt-0.5">
                <FileText size={20} className="text-[#c0392b]" />
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                {/* TITLE + LINK */}
                <div className="flex items-start justify-between gap-3 mb-1">

                  <h3 className="text-[15px] font-semibold leading-snug text-(--text)]">
                    {pub.title}
                  </h3>

                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-var(--muted)] hover:text-[#c0392b] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}

                </div>

                {/* AUTHORS */}
                <p className="text-sm text-var(--muted)] mb-2">
                  {pub.authors}
                </p>

                {/* VENUE + YEAR */}
                <div className="flex items-center gap-3 flex-wrap">

                  <span className="text-xs text-[#c0392b] font-medium">
                    {pub.venue}
                  </span>

                  <span className="text-xs text-var(--muted)]">
                    {pub.year}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}