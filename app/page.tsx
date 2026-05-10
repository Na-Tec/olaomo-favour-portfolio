import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <section className="relative overflow-hidden min-h-screen">

        {/* Main Layout */}
        <div className="hero-layout">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <div className="max-w-[560px]">

              {/* Badges */}
              <div className="hero-badges mb-8">

                <div
                  className="
                    inline-flex items-center gap-[7px]
                    rounded-full
                    border border-[rgba(192,57,43,0.28)]
                    bg-[rgba(192,57,43,0.12)]
                    px-[14px] py-[5px]
                  "
                >
                  <Sparkles size={12} color="#e8a09a" />

                  <span
                    className="
                      text-[13px]
                      text-[#e8a09a]
                      font-medium
                      tracking-wide
                    "
                  >
                    DATA ANALYST
                  </span>
                </div>

                <div
                  className="
                    inline-flex items-center gap-[7px]
                    rounded-full
                    border border-[rgba(192,57,43,0.28)]
                    bg-[rgba(192,57,43,0.12)]
                    px-[14px] py-[5px]
                  "
                >
                  <Sparkles size={12} color="#e8a09a" />

                  <span
                    className="
                      text-[13px]
                      text-[#e8a09a]
                      font-medium
                      tracking-wide
                    "
                  >
                    DATA ENGINEER
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-[42px]
                  md:text-[68px]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-2px]
                  text-[#e8e8e8]
                  mb-6
                "
              >
                Hi, I&apos;m Olaomo
                <br />
                Favour
                <span className="text-[#c0392b]">.</span>
              </h1>

              {/* Bio */}
              <p
                className="
                  text-[16px]
                  leading-[1.8]
                  text-[#999]
                  mb-10
                "
              >
                An innovative Computer Engineering student with expertise
                in Data Science, Machine Learning, NLP and AI Development.
                Passionate about leveraging technology to drive innovation
                and deliver impactful solutions.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">

                <Link
                  href="/projects"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-[8px]
                    bg-[#c0392b]
                    hover:bg-[#e74c3c]
                    transition-colors
                    px-[26px] py-[13px]
                    text-[14px]
                    font-medium
                    text-white
                  "
                >
                  View Projects
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="/cv.pdf"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-[8px]
                    border border-[#333]
                    hover:border-[#666]
                    transition-colors
                    px-[26px] py-[13px]
                    text-[14px]
                    font-medium
                    text-[#e8e8e8]
                  "
                >
                  <Download size={14} />
                  View CV
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">

            <div className="hero-image">

              <Image
                src="/pic1.jpeg"
                alt="Olaomo Favour"
                fill
                priority
                className="object-cover object-top"
              />

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}