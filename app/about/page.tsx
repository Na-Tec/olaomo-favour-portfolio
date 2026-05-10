import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutPage() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24">

        <SectionHeader
          title="About Me"
          subtitle="A passionate AI/ML Engineer dedicated to advancing AI research and building impactful solutions."
        />

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[340px_1fr]
            gap-12
            md:gap-[60px]
            items-start
            mt-5
          "
        >

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              max-w-[340px]
              h-[420px]
              rounded-[10px]
              overflow-hidden
              mx-auto
              md:mx-0
            "
          >
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

              <p
                className="
                  text-[15px]
                  leading-[1.85]
                  text-[#aaa]
                "
              >
                I am Olaomo Favour, an innovative Computer Engineering
                student at the Federal University of Technology Akure
                with expertise in Data Science, Machine Learning,
                Natural Language Processing, and Artificial Intelligence
                Development.
              </p>

              <p
                className="
                  text-[15px]
                  leading-[1.85]
                  text-[#aaa]
                "
              >
                I&apos;m skilled in Python programming, with a proven
                ability to develop efficient algorithms, design robust
                applications, and analyze complex datasets. I have
                strong collaborative and problem-solving skills,
                committed to leveraging technology to drive innovation
                and deliver impactful solutions.
              </p>

              <p
                className="
                  text-[15px]
                  leading-[1.85]
                  text-[#aaa]
                "
              >
                When I&apos;m not training models or writing code,
                you&apos;ll find me leading my DSN FUTA chapter,
                mentoring aspiring data scientists, or competing
                in hackathons.
              </p>

            </div>

            {/* META GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-y-5
                gap-x-10
              "
            >

              {[
                {
                  label: 'LOCATION',
                  value: 'Akure, Ondo State, Nigeria',
                },
                {
                  label: 'EDUCATION',
                  value: 'B.Eng. Computer Engineering',
                },
                {
                  label: 'FOCUS',
                  value: 'NLP, Computer Vision, AI/ML',
                },
                {
                  label: 'CONTACT',
                  value: 'olaomofavour@gmail.com',
                },
              ].map(({ label, value }) => (

                <div key={label}>

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      tracking-[1.5px]
                      text-[#c0392b]
                      uppercase
                      mb-1
                    "
                  >
                    {label}
                  </p>

                  <p className="text-[14px] text-[#ccc]">
                    {value}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}