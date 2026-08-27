'use client';

import { useState } from 'react';
import {
  Briefcase,
  Mic2,
  Users,
  MessageCircle,
  Send,
  Coffee,
  Heart,
  Link as LinkIcon,
} from 'lucide-react';

import Modal from '@/components/ui/Modal';
import Reveal from '@/components/ui/Reveal';
import {
  FormInput,
  FormTextarea,
  FormSelect,
  SubmitButton,
} from '@/components/ui/FormFields';

type ModalType = 'role' | 'speak' | 'collaborate' | 'hello' | null;

const connectCards = [
  {
    id: 'role' as ModalType,
    icon: <Briefcase size={20} />,
    title: 'Explore a Role',
    description:
      "Interested in me joining your team? Let's talk about Data, AI, or Healthcare positions.",
    link: 'Discuss a Role →',
  },
  {
    id: 'speak' as ModalType,
    icon: <Mic2 size={20} />,
    title: 'Invite Me to Speak',
    description:
      'Request a talk, workshop, or panel on Data, AI, or career building.',
    link: 'Send an Invite →',
  },
  {
    id: 'collaborate' as ModalType,
    icon: <Users size={20} />,
    title: 'Collaborate on a Project',
    description: 'Propose a data, research, or community project.',
    link: 'Propose a Project →',
  },
  {
    id: 'hello' as ModalType,
    icon: <MessageCircle size={20} />,
    title: 'Something Else',
    description: "Have another idea? Let's talk anyway.",
    link: 'Just Say Hello →',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/favour-fiyinfoluwa-olaomo/' },
  { label: 'GitHub', href: 'https://github.com/olaomofavour' },
  { label: 'Medium', href: 'https://medium.com/@olaomofavour' },
  { label: 'X (Twitter)', href: 'https://x.com/FavourOlaomo' },
  { label: 'Peerlist', href: 'https://peerlist.io' },
  { label: 'Selar', href: 'https://selar.co' },
];

const cardBg = 'var(--card)';
const cardBorder = 'var(--border)';
const textMuted = 'var(--muted)';
const textMain = 'var(--text)';
const accent = 'var(--accent)';

export default function ContactPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const closeModal = () => {
    setActiveModal(null);
    setStatus(null);
  };

  const submitToTelegram = async (type: Exclude<ModalType, null>, form: HTMLFormElement) => {
    setSubmitting(true);
    setStatus(null);

    try {
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ type, ...payload }),
      });

      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || 'Failed to send message');
      }

      setStatus({ type: 'success', message: "Sent. I'll get back to you shortly." });
      form.reset();
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Something went wrong';
      setStatus({ type: 'error', message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        background: 'var(--bg)',
        minHeight: '100vh',
        color: textMain,
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* HEADER */}
        <Reveal delayMs={60} variant="blur">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              background: 'var(--accent)',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              padding: '6px 18px',
              fontSize: '13px',
              color: textMain,
              marginBottom: '20px',
            }}
          >
            🤝 Let&apos;s Work Together
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 50px)',
              fontWeight: 800,
              color: textMain,
              marginBottom: '18px',
              letterSpacing: '-0.5px',
            }}
          >
            Choose How You&apos;d Like to{' '}
            <span style={{ color: accent }}>Connect</span>
          </h1>

          <p style={{ fontSize: '15px', color: textMuted, maxWidth: '580px', margin: '0 auto 10px', lineHeight: 1.7 }}>
            I&apos;m open to roles in Data, AI, and Healthcare, and I love speaking and collaborative projects, but I&apos;m not limited to just these!
          </p>

          <p style={{ fontSize: '14px', color: textMuted, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            I&apos;m particularly interested in opportunities involving healthcare data analysis, research collaboration, and projects with social impact.
          </p>
          </div>
        </Reveal>

        {/* CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            marginBottom: '20px',
          }}
          className="!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4"
        >
          {connectCards.map((card, index) => (
            <Reveal key={card.id} delayMs={120 + index * 70} variant="scale">
              <div
              onClick={() => setActiveModal(card.id)}
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '12px',
                padding: '26px 22px',
                cursor: 'pointer',
                transition: '0.2s',
              }}
              className="hover-lift hover:!border-[var(--accent)]"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  background: 'var(--chip)',
                  borderRadius: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: accent,
                  marginBottom: '4px',
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: 700 }}>{card.title}</h3>
              <p style={{ fontSize: '13px', color: textMuted, lineHeight: 1.6 }}>
                {card.description}
              </p>
              <span style={{ fontSize: '13px', color: accent, fontWeight: 500 }}>
                {card.link}
              </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* LOWER GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
          }}
          className="!grid-cols-1 md:!grid-cols-2"
        >
          {/* SOCIAL */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '12px',
              padding: '28px 30px',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: 700 }}>
              Follow &amp; Connect
            </h3>

            <p style={{ fontSize: '13px', color: textMuted, marginBottom: '20px' }}>
              Stay updated with my latest work and insights.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--accent)',
                    border: `1px solid ${cardBorder}`,
                    borderRadius: '8px',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                  className="hover:opacity-80"
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#fff',
                    }}
                  />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '12px',
                padding: '24px 28px',
              }}
            >
              <h3 style={{ fontSize: '17px', fontWeight: 700 }}>
                Support My Work
              </h3>

              <p style={{ fontSize: '13px', color: textMuted, marginBottom: '16px' }}>
                If you find my work valuable, consider supporting me.
              </p>

              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: 'var(--accent)',
                  borderRadius: '8px',
                  padding: '13px 16px',
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                <span style={{ display: 'flex', gap: '10px' }}>
                  <Coffee size={16} /> Buy me a coffee
                </span>
                ↗
              </a>

              <a
                href="#"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: 'var(--accent)',
                  borderRadius: '8px',
                  padding: '13px 16px',
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                <span style={{ display: 'flex', gap: '10px' }}>
                  <Heart size={16} /> Show love
                </span>
                ↗
              </a>
            </div>

            {/* RESTORED LINKEDIN BUTTON */}
            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '12px',
                padding: '24px 28px',
              }}
            >
              <h3 style={{ fontSize: '17px', fontWeight: 700 }}>
                Write a Recommendation
              </h3>

              <p style={{ fontSize: '13px', color: textMuted, marginBottom: '16px' }}>
                Worked with me? I&apos;d appreciate your feedback.
              </p>

              <a
                href="https://www.linkedin.com/in/favour-fiyinfoluwa-olaomo/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '13px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <LinkIcon size={15} /> Recommend on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}

      <Modal
        isOpen={activeModal === 'role'}
        onClose={closeModal}
        title="Interested in having me on your team?"
        description="I'm actively exploring roles in these areas, but I'm open to conversations about any opportunity where I can add value with data and AI:"
        icon={<Briefcase size={22} />}
        bulletPoints={[
          'Healthcare AI: Healthcare Data Analyst, Clinical AI Researcher, Medical Data Scientist',
          'Analytics & Consulting: Business Intelligence Analyst, Data Consultant, Analytics Manager',
          'Tech Community & Education: Developer Advocate, Community Lead, Technical Educator/Writer',
        ]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitToTelegram('role', e.currentTarget);
          }}
        >
          <FormInput name="name" placeholder="Your Name" />
          <FormInput name="company" placeholder="Company / Organization" />
          <FormInput name="roleTitle" placeholder='Role Title (or "Exploring fit")' />
          <FormInput name="email" placeholder="Email Address" type="email" />
          <FormTextarea name="message" placeholder="Brief description of the role or opportunity" />
          <SubmitButton disabled={submitting}>
            <Send size={15} />
            {submitting ? 'Sending…' : 'Send Details'}
          </SubmitButton>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </Modal>

      <Modal
        isOpen={activeModal === 'speak'}
        onClose={closeModal}
        title="Invite Me to Speak"
        description="I enjoy speaking on topics around AI, healthcare, community growth, and building a career in tech."
        icon={<Mic2 size={22} />}
        bulletPoints={[
          'Healthcare AI in Africa',
          'Building a Data Career Early',
          'Community-Led Tech Growth',
          'AI for Social Good',
        ]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitToTelegram('speak', e.currentTarget);
          }}
        >
          <FormInput name="name" placeholder="Your Name" />
          <FormInput name="company" placeholder="Organization / Event Name" />
          <FormInput name="email" placeholder="Email Address" type="email" />

          <div className="mb-3">
            <label className="block text-sm text-muted-foreground mb-2">Event Date &amp; Time</label>
            <FormSelect
              name="eventDateSet"
              options={[
                { value: '', label: 'Have you set a date?' },
                { value: 'yes', label: 'Yes, I have a date' },
                { value: 'no', label: 'Not yet' },
                { value: 'flexible', label: 'Flexible' },
              ]}
            />
          </div>

          <FormSelect
            name="format"
            options={[
              { value: '', label: 'Select Format' },
              { value: 'keynote', label: 'Keynote' },
              { value: 'panel', label: 'Panel' },
              { value: 'workshop', label: 'Workshop' },
              { value: 'fireside', label: 'Fireside Chat' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <div className="mb-3">
            <label className="block text-sm text-muted-foreground mb-2">Event Type</label>
            <FormSelect
              name="eventType"
              options={[
                { value: '', label: 'Virtual or Physical?' },
                { value: 'virtual', label: 'Virtual' },
                { value: 'physical', label: 'Physical' },
                { value: 'hybrid', label: 'Hybrid' },
              ]}
            />
          </div>

          <FormTextarea name="message" placeholder="Topic or theme in mind" />
          <SubmitButton disabled={submitting}>
            <Send size={15} />
            {submitting ? 'Sending…' : 'Send Speaking Invitation'}
          </SubmitButton>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </Modal>

      <Modal
        isOpen={activeModal === 'collaborate'}
        onClose={closeModal}
        title="Let's Build Something"
        description="I'm especially interested in Healthcare AI, Data for Good, research, and community-focused technology projects."
        icon={<Users size={22} />}
        bulletPoints={[
          'Research collaborations',
          'AI & data-driven products',
          'Community initiatives',
          'Open-source contributions',
        ]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitToTelegram('collaborate', e.currentTarget);
          }}
        >
          <FormInput name="name" placeholder="Your Name" />
          <FormInput name="projectName" placeholder="Project Name / Idea" />
          <FormInput name="email" placeholder="Email Address" type="email" />
          <FormTextarea name="message" placeholder="Tell me about your idea or project..." />
          <SubmitButton disabled={submitting}>
            <Send size={15} />
            {submitting ? 'Sending…' : 'Send Collaboration Idea'}
          </SubmitButton>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </Modal>

      <Modal
        isOpen={activeModal === 'hello'}
        onClose={closeModal}
        title="Just Say Hello"
        description="No pressure, no agenda — happy to connect, chat about tech, or simply say hi."
        icon={<MessageCircle size={22} />}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitToTelegram('hello', e.currentTarget);
          }}
        >
          <FormInput name="name" placeholder="Your Name" />
          <FormInput name="email" placeholder="Email Address" type="email" />
          <FormTextarea name="message" placeholder="What's on your mind?" />
          <SubmitButton disabled={submitting}>
            <Send size={15} />
            {submitting ? 'Sending…' : 'Send Message'}
          </SubmitButton>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </Modal>
    </div>
  );
}
