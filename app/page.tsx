import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <section className="relative overflow-hidden min-h-screen">

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row min-h-screen">

          {/* LEFT CONTENT */}
          <div className="flex-1 flex items-center px-6 md:px-16 py-20 md:py-0">
            <div className="max-w-[560px]">

              {/* BADGES */}
              <Reveal delayMs={50} variant="fade">
                <div className="flex gap-3 flex-wrap mb-8">

                <div className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(192,57,43,0.28)] bg-[rgba(192,57,43,0.12)] px-[14px] py-[5px]">
                  <Sparkles size={12} color="#e8a09a" />
                  <span className="text-[13px] text-[#e8a09a] font-medium tracking-wide">
                    DATA ANALYST
                  </span>
                </div>

                <div className="pulse-soft inline-flex items-center gap-[7px] rounded-full border border-[rgba(192,57,43,0.28)] bg-[rgba(192,57,43,0.12)] px-[14px] py-[5px]">
                  <Sparkles size={12} color="#e8a09a" />
                  <span className="text-[13px] text-[#e8a09a] font-medium tracking-wide">
                    ANALYTICS ENGINEER
                  </span>
                </div>

                <div className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(192,57,43,0.28)] bg-[rgba(192,57,43,0.12)] px-[14px] py-[5px]">
                  <Sparkles size={12} color="#e8a09a" />
                  <span className="text-[13px] text-[#e8a09a] font-medium tracking-wide">
                    AI AUTOMATION ENGINEER
                  </span>
                </div>

                </div>
              </Reveal>

              {/* TITLE */}
              <Reveal delayMs={120} variant="left">
                <h1 className="text-[42px] md:text-[68px] font-extrabold leading-[1.05] tracking-[-2px] mb-6">
                  Hi, I&apos;m Olaomo
                  <br />
                  Favour<span className="text-[#c0392b]">.</span>
                </h1>
              </Reveal>

              {/* BIO */}
              <Reveal delayMs={180} variant="up">
                <p className="text-[16px] leading-[1.8] text-[var(--muted)] mb-10">
                  A Computer Science professional specializing in Data Analytics, Analytics Engineering, 
                  and Workflow Automation. I bridge the gap between raw data and business decisions by 
                  building robust data models, actionable BI dashboards, and automated pipelines that drive operational efficiency.
                </p>
              </Reveal>

              {/* BUTTONS */}
              <Reveal delayMs={240} variant="scale">
                <div className="flex gap-4 flex-wrap">

                <Link
                  href="/projects"
                  className="shine inline-flex items-center gap-2 rounded-[8px] bg-[#c0392b] hover:bg-[#e74c3c] transition-colors px-[26px] py-[13px] text-[14px] font-medium text-white"
                >
                  View Projects
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://hello.cv/olaomofavour"
                  className="hover-lift inline-flex items-center gap-2 rounded-[8px] border border-[var(--border)] hover:border-[#666] transition-colors px-[26px] py-[13px] text-[14px] font-medium text-[var(--text)]"
                >
                  <Download size={14} />
                  View CV
                </a>

                </div>
              </Reveal>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[420px] flex items-center justify-center px-6 md:px-0 py-12 md:py-0">

            <Reveal delayMs={140} variant="right" className="w-full">
              <div className="float-slow relative w-full max-w-[380px] h-[420px] md:h-[520px] rounded-[16px] overflow-hidden">

              <Image
                src="/pic1.jpeg"
                alt="Olaomo Favour"
                fill
                priority
                className="object-cover object-top"
              />

              </div>
            </Reveal>

          </div>

        </div>

      </section>

    </div>
  );
}
