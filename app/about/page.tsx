import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 md:py-24">

        <SectionHeader
          title="About Me"
          subtitle="A passionate Data & Analytics Engineer dedicated to building scalable data systems, cloud architectures, and automated business intelligence solutions that drive real-world impact."
        />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-[60px] items-start mt-5">

          {/* IMAGE */}
          <Reveal delayMs={80} variant="scale">
            <div className="relative w-full max-w-[340px] h-[420px] rounded-[10px] overflow-hidden mx-auto md:mx-0">

            <Image
              src="/pic1.jpeg"
              alt="Olaomo Favour"
              fill
              priority
              className="object-cover object-top"
            />

            </div>
          </Reveal>

          {/* CONTENT */}
          <div>

            {/* BIO */}
            <Reveal delayMs={140} variant="right">
              <div className="flex flex-col gap-[18px] mb-10">

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                I am Olaomo Favour, a Computer Science graduate from Anchor University passionate about turning raw data into strategic business leverage.
              </p>

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                My core technical stack centers on Power BI, SQL, Python, Excel, Azure, and Microsoft Fabric. 
                With a solid foundation in data analytics and pipeline automation, I specialize in building reliable 
                data models, optimizing analytical queries, and creating intuitive visualizations that empower teams to make fast, 
                data-driven decisions.
              </p>

              <p className="text-[15px] leading-[1.85] text-[var(--muted)]">
                Beyond the IDE and cloud consoles, I enjoy sharing data knowledge through community mentoring, 
                keeping up with emerging tech trends, and finding creative ways to automate everyday tasks.
              </p>

              </div>
            </Reveal>

            {/* META GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">

              {[
                { label: 'LOCATION', value: 'Ogba, Lagos State, Nigeria' },
                { label: 'EDUCATION', value: 'B.Sc. Computer Science, Anchor University' },
                { label: 'FOCUS', value: 'Data Analytics, Data Engineering, Automation' },
                { label: 'CONTACT', value: 'olaomofavour@gmail.com' },
              ].map(({ label, value }, index) => (
                <Reveal key={label} delayMs={200 + index * 60} variant="up">
                  <div>

                  <p className="text-[11px] font-semibold tracking-[1.5px] text-[#c0392b] uppercase mb-1">
                    {label}
                  </p>

                  <p className="text-[14px] text-[var(--text)] opacity-80">
                    {value}
                  </p>

                  </div>
                </Reveal>
              ))}

            </div>

                        {/* SKILLS */}
            <Reveal delayMs={380} variant="up">
              <div className="mt-10">

                <p className="text-[11px] font-semibold tracking-[1.5px] text-[#c0392b] uppercase mb-3">
                  SKILLS
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Excel',
                    'Python',
                    'SQL',
                    'PySpark',
                    'Power BI',
                    'Azure',
                    'Microsoft Fabric',
                    'N8N',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-[13px] font-mono text-[var(--text)] bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[#c0392b] hover:text-[#c0392b]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>

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
                role: 'Data Analytics/ Engineer',
                company: 'BEMSOFT GROUP',
                date: 'Apr 2025— Jun 2026',
                desc: 'Led data analytics and engineering initiatives and managed terminal department operations, optimizing data pipelines and driving revenue growth through advanced analytics and strategic leadership.',
              },
              {
                role: 'Data Analytics Tutor',
                company: 'GIIT Africa',
                date: 'Feb 2023 — Nov 2023',
                desc: 'Designed and delivered comprehensive data analysis training modules, mentoring aspiring professionals in advanced Excel and data reporting techniques.',
              },
              {
                role: 'B.Sc. Computer Science',
                company: 'Anchor University',
                date: '2019 — 2024',
                desc: 'Studying core computing, AI, systems engineering, and applied data science and analytics.',
              },
            ].map(({ role, company, date, desc }, index, arr) => (
              <Reveal key={role} delayMs={index * 70} variant="left">
                <div className="relative pl-8 pb-12 last:pb-6 group">

                {/* LINE */}
                {index < arr.length - 1 && (
                  <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[var(--border)]" />
                )}

                {/* DOT */}
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#c0392b] ring-4 ring-[var(--bg)] transition-all duration-300 group-hover:ring-[#c0392b]" />

                {/* CARD */}
                <div className="rounded-xl bg-[var(--card)] p-6 border border-[var(--border)]/50 transition-all duration-300 group-hover:border-[#c0392b]">

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
              </Reveal>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
