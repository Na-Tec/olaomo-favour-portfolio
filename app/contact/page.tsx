'use client';

import { useState } from 'react';
import { Briefcase, Mic2, Users, MessageCircle, Send, Coffee, Heart, Link as LinkIcon } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { FormInput, FormTextarea, FormSelect, SubmitButton } from '@/components/ui/FormFields';

type ModalType = 'role' | 'speak' | 'collaborate' | 'hello' | null;

const connectCards = [
  { id: 'role' as ModalType, icon: <Briefcase size={20} />, title: 'Explore a Role', description: "Interested in me joining your team? Let's talk about Data, AI, or Healthcare positions.", link: 'Discuss a Role →' },
  { id: 'speak' as ModalType, icon: <Mic2 size={20} />, title: 'Invite Me to Speak', description: 'Request a talk, workshop, or panel on Data, AI, or career building.', link: 'Send an Invite →' },
  { id: 'collaborate' as ModalType, icon: <Users size={20} />, title: 'Collaborate on a Project', description: 'Propose a data, research, or community project.', link: 'Propose a Project →' },
  { id: 'hello' as ModalType, icon: <MessageCircle size={20} />, title: 'Something Else', description: "Have another idea? Let's talk anyway.", link: 'Just Say Hello →' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Medium', href: 'https://medium.com' },
  { label: 'X (Twitter)', href: 'https://twitter.com' },
  { label: 'Peerlist', href: 'https://peerlist.io' },
  { label: 'Selar', href: 'https://selar.co' },
];

// Teal card background matching screenshots 6-10
const cardBg = '#161616';
const cardBorder = '#0d0d0d';

export default function ContactPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#231311', border: '1px solid rgba(94,207,191,0.22)', borderRadius: '999px', padding: '6px 18px', fontSize: '13px', color: '#ffffff', marginBottom: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
            🤝 Let&apos;s Work Together
          </div>
          <h1 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#f1f5f9', marginBottom: '18px', letterSpacing: '-0.5px' }}>
            Choose How You&apos;d Like to{' '}
            <span style={{ color: '#c0392b' }}>Connect</span>
          </h1>
          <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '15px', color: '#94a3b8', maxWidth: '580px', margin: '0 auto 10px', lineHeight: 1.7 }}>
            I&apos;m open to roles in Data, AI, and Healthcare, and I love speaking and collaborative projects, but I&apos;m not limited to just these!
          </p>
          <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '14px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            I&apos;m particularly interested in opportunities involving healthcare data analysis, research collaboration, and projects with social impact. Always open to connecting around data, technology, or career development conversations.
          </p>
        </div>

        {/* 4 Connect Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '20px' }}
          className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4"
        >
          {connectCards.map((card) => (
            <div key={card.id} onClick={() => setActiveModal(card.id)}
              style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: '12px', padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: '10px', cursor: 'pointer', transition: 'border-color 0.2s, transform 0.15s' }}
              className="hover:!border-[#c0392b] hover:!-translate-y-0.5"
            >
              <div style={{ width: '42px', height: '42px', background: '#231311', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c0392b', marginBottom: '4px' }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '15px', fontWeight: 700, color: '#f1f5f9' }}>{card.title}</h3>
              <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, flex: 1 }}>{card.description}</p>
              <span style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#c0392b', fontWeight: 500 }}>{card.link}</span>
            </div>
          ))}
        </div>

        {/* Lower 2-col: Follow & Connect | Support My Work + Recommendation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '14px' }}
          className="!grid-cols-1 md:!grid-cols-2"
        >
          {/* Follow & Connect */}
          <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: '12px', padding: '28px 30px' }}>
            <h3 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '17px', fontWeight: 700, color: '#f1f5f9', marginBottom: '8px' }}>Follow &amp; Connect</h3>
            <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#94a3b8', marginBottom: '20px', lineHeight: 1.6 }}>
              Stay updated with my latest work, insights, and content across platforms.
            </p>
            {/* 2-col social grid — 6 items like screenshot */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ background: '#c0392b', border: '1px solid #243040', borderRadius: '8px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontFamily: 'Segoe UI, sans-serif', color: '#ffffff', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  className="hover:!border-[#231311]"
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right column: Support My Work + Write a Recommendation stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Support */}
            <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: '12px', padding: '24px 28px' }}>
              <h3 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '17px', fontWeight: 700, color: '#f1f5f9', marginBottom: '6px' }}>Support My Work</h3>
              <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                If you find my work valuable, consider supporting me!
              </p>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#c0392b', border: '1px solid #243040', borderRadius: '8px', padding: '13px 16px', marginBottom: '10px', textDecoration: 'none', transition: 'border-color 0.2s' }} className="hover:!border-[#3a5068]">
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Segoe UI, sans-serif', fontSize: '14px', color: '#cbd5e1' }}>
                  <Coffee size={16} style={{ color: '#f59e0b' }} /> Buy me a coffee
                </span>
                <span style={{ color: '#475569', fontSize: '13px' }}>↗</span>
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#c0392b', border: '1px solid #243040', borderRadius: '8px', padding: '13px 16px', textDecoration: 'none', transition: 'border-color 0.2s' }} className="hover:!border-[#3a5068]">
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Segoe UI, sans-serif', fontSize: '14px', color: '#cbd5e1' }}>
                  <Heart size={16} style={{ color: '#f59e0b' }} /> Show love
                </span>
                <span style={{ color: '#475569', fontSize: '13px' }}>↗</span>
              </a>
            </div>

            {/* Write a Recommendation */}
            <div style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: '12px', padding: '24px 28px' }}>
              <h3 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '17px', fontWeight: 700, color: '#f1f5f9', marginBottom: '6px' }}>Write a Recommendation</h3>
              <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                Worked with me? I&apos;d appreciate your feedback on LinkedIn!
              </p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', background: '#c0392b', color: '#ffffff', borderRadius: '8px', padding: '13px', fontSize: '14px', fontWeight: 700, fontFamily: 'Segoe UI, sans-serif', textDecoration: 'none', transition: 'opacity 0.2s' }}
                className="hover:!opacity-85"
              >
                <LinkIcon size={15} /> Recommend on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODALS ── */}
      <Modal isOpen={activeModal === 'role'} onClose={() => setActiveModal(null)} title="Discuss a Role" description="Interested in having me on your team? Share some details and I'll get back to you." icon={<Briefcase size={22} />}>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput placeholder="Your Name" />
          <FormInput placeholder="Company / Organization" />
          <FormInput placeholder="Email Address" type="email" />
          <FormInput placeholder="Role Title" />
          <FormTextarea placeholder="Tell me about the role and what you're looking for..." />
          <SubmitButton><Send size={15} /> Send Message</SubmitButton>
        </form>
      </Modal>

      <Modal isOpen={activeModal === 'speak'} onClose={() => setActiveModal(null)} title="Invite Me to Speak"
        description="I love sharing insights on topics like:" icon={<Mic2 size={22} />}
        bulletPoints={['Healthcare AI in Africa', 'Building a Data Career Early', 'Community-Led Tech Growth', 'AI for Social Good']}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput placeholder="Your Name" />
          <FormInput placeholder="Organization / Event Name" />
          <FormInput placeholder="Email Address" type="email" />
          <FormSelect label="Event Date & Time" options={[{ value: '', label: 'Have you set a date?' }, { value: 'yes', label: 'Yes, confirmed' }, { value: 'tentative', label: 'Tentative' }, { value: 'no', label: 'No date yet' }]} />
          <FormSelect label="" options={[{ value: '', label: 'Select Format' }, { value: 'keynote', label: 'Keynote' }, { value: 'panel', label: 'Panel Discussion' }, { value: 'workshop', label: 'Workshop' }, { value: 'webinar', label: 'Webinar' }]} />
          <FormSelect label="Event Type" options={[{ value: '', label: 'Virtual or Physical?' }, { value: 'virtual', label: 'Virtual' }, { value: 'physical', label: 'Physical' }, { value: 'hybrid', label: 'Hybrid' }]} />
          <FormTextarea placeholder="Topic or theme in mind..." />
          <SubmitButton><Send size={15} /> Send Invite Request</SubmitButton>
        </form>
      </Modal>

      <Modal isOpen={activeModal === 'collaborate'} onClose={() => setActiveModal(null)} title="Let's Build Something" description="I'm particularly interested in projects in Healthcare AI, Data for Good, and Community Tech, but I'm excited by interesting problems in any domain." icon={<Users size={22} />}>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput placeholder="Your Name" />
          <FormInput placeholder="Project Name / Idea" />
          <FormInput placeholder="Email Address" type="email" />
          <FormInput placeholder="Project Domain (e.g., Healthcare, Education)" />
          <FormTextarea placeholder="What you need help with" />
          <SubmitButton><Send size={15} /> Send Collaboration Idea</SubmitButton>
        </form>
      </Modal>

      <Modal isOpen={activeModal === 'hello'} onClose={() => setActiveModal(null)} title="Just Say Hello" description="No agenda needed! I'm always happy to connect, chat about tech, or just say hi." icon={<MessageCircle size={22} />}>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput placeholder="Your Name" />
          <FormInput placeholder="Email Address" type="email" />
          <FormTextarea placeholder="What's on your mind?" />
          <SubmitButton><Send size={15} /> Say Hello</SubmitButton>
        </form>
      </Modal>
    </div>
  );
}
