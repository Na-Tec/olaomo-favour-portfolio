import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 md:py-24">

        <SectionHeader
          title="About Me"
          subtitle="A passionate AI/ML Engineer dedicated to advancing AI research and building impactful solutions."
        />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-[60px] items-start mt-5">

          {/* IMAGE */}
          <div className="relative w-full max-w-[340px] h-[420px] rounded-[10px] overflow-hidden mx-auto md:mx-0">

            <Image
              src="/pic1.jpeg"
              alt="Olaomo Favour"
              fill
              priority
              className="object-cover object-top"
            />

          </div>

          {/* CONTENT */}
          <div>

            {/* BIO */}
            <div className="flex flex-col gap-[18px] mb-10">

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                I am Olaomo Favour, an innovative Computer Engineering student
                at the Federal University of Technology Akure with expertise in
                Data Science, Machine Learning, Natural Language Processing,
                and Artificial Intelligence Development.
              </p>

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                I&apos;m skilled in Python programming, with a proven ability to
                develop efficient algorithms, design robust applications, and
                analyze complex datasets. I have strong collaborative and
                problem-solving skills, committed to leveraging technology to
                drive innovation and deliver impactful solutions.
              </p>

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                When I&apos;m not training models or writing code, you&apos;ll
                find me leading my DSN FUTA chapter, mentoring aspiring data
                scientists, or competing in hackathons.
              </p>

            </div>

            {/* META GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">

              {[
                { label: 'LOCATION', value: 'Akure, Ondo State, Nigeria' },
                { label: 'EDUCATION', value: 'B.Eng. Computer Engineering' },
                { label: 'FOCUS', value: 'NLP, Computer Vision, AI/ML' },
                { label: 'CONTACT', value: 'olaomofavour@gmail.com' },
              ].map(({ label, value }) => (

                <div key={label}>

                  <p className="text-[11px] font-semibold tracking-[1.5px] text-[#c0392b] uppercase mb-1">
                    {label}
                  </p>

                  <p className="text-[14px] text-[var(--text)] opacity-80">
                    {value}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ─── EXPERIENCE SECTION ─── */}
        <div className="mt-24">

          <SectionHeader
            title="Experience"
            subtitle="My professional journey across industry and academia."
          />

          <div className="mx-auto max-w-3xl mt-12">

            {[
              {
                role: 'AI Intern',
                company: 'Babelos Ltd (Remote)',
                date: 'February 2026 — Present',
                desc: 'Built AI prototypes and evaluation pipelines for internal product demos, including Moniger. Worked on ML evaluation, error analysis, and API-ready AI systems.',
              },
              {
                role: 'AI Engineering Intern',
                company: 'Rectlabs',
                date: 'July — December 2025',
                desc: 'Worked on Computer Vision, Reinforcement Learning, NLP, and developed a voice-cloning TTS model.',
              },
              {
                role: 'Data Science Intern',
                company: 'NIGCOMSAT',
                date: 'October — November 2024',
                desc: 'Analyzed satellite telemetry datasets using Python and SQL for system optimization.',
              },
              {
                role: 'AI/ML Research Intern',
                company: 'Smart Systems Research Lab',
                date: '2022 — Present',
                desc: 'Worked on ML models for health and EdTech systems including RAG pipelines.',
              },
              {
                role: 'B.Eng. Computer Engineering',
                company: 'FUTA',
                date: '2021 — Present',
                desc: 'Studying core computing, AI, systems engineering, and applied data science.',
              },
            ].map(({ role, company, date, desc }, index, arr) => (

              <div key={role} className="relative pl-8 pb-8 last:pb-0 group">

                {/* LINE */}
                {index < arr.length - 1 && (
                  <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[var(--border)]" />
                )}

                {/* DOT */}
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#c0392b] ring-4 ring-[var(--bg)] transition-all duration-300 group-hover:ring-[#c0392b]" />

                {/* CARD */}
                <div className="rounded-xl bg-[var(--card)] p-5 border border-[var(--border)]/50 transition-all duration-300 group-hover:border-[#c0392b]">

                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                    <h3 className="font-semibold text-[var(--text)]">
                      {role}
                    </h3>

                    <span className="text-xs text-[var(--muted)]">
                      {date}
                    </span>

                  </div>

                  <p className="mb-2 text-sm font-medium text-[#c0392b]">
                    {company}
                  </p>

                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}