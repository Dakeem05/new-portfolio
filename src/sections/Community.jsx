import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './Community.css'

const igniteStats = [
  { value: '1,000', label: 'Venue capacity' },
  { value: '9', label: 'Confirmed partners' },
  { value: '₦1M+', label: 'Hackathon prize pool' },
  { value: '2 wks', label: 'Hackathon duration' },
]

const programs = [
  {
    index: '01',
    title: 'Tech Career Series',
    meta: '3 sessions · 8 senior speakers',
    text: 'Virtual sessions with engineers from Google, Paystack, Moniepoint, Raenest and Jobberman. I owned speaker outreach, session scripts, interview questions, flyer copy and promotion.',
  },
  {
    index: '02',
    title: 'Founders Pitch Series',
    meta: '4 sessions · 12 founders',
    text: 'A pitch platform for early-stage founders, with an application form, scoring criteria and a direct pathway onto the Tech Ignite stage.',
  },
  {
    index: '03',
    title: 'She Builds',
    meta: "International Women's Day · Start Innovation Hub",
    text: 'A women-in-tech event in Uyo — partnership proposals, social content, speaker coordination and venue logistics, end to end.',
  },
  {
    index: '04',
    title: 'Intro to Tech Workshop',
    meta: 'Free beginner workshop · PY50',
    text: 'A hands-on coding session for complete beginners at Square One, Nwaniba — designed to make the first hour of code feel possible.',
  },
  {
    index: '05',
    title: 'AWS Community Event',
    meta: 'Community partner · Speaker',
    text: 'Represented the chapter as a community partner and delivered a speaking slot on our work, our programs and the roadmap ahead.',
  },
]

const roles = [
  {
    period: '2024 — Present',
    title: 'Lead, GDGOC',
    org: 'Google Developer Groups on Campus · University of Uyo',
    text: 'Grew a dormant ~500-member chapter to 900+ members. Built three recurring programs, a partner pipeline, and the operating system behind a two-day flagship event.',
    link: {
      label: 'gdg.community.dev',
      href: 'https://gdg.community.dev/gdg-on-campus-university-of-uyo-uyo-nigeria/',
    },
  },
  {
    period: '2026 — Present',
    title: 'Managing Director & Head, Training',
    org: 'Affidex Academy Limited · Uyo',
    text: 'Oversee academic operations and curriculum at a federally registered vocational and digital skills institution, and drive campus outreach and institutional partnerships.',
  },
]

const partners = [
  'Google',
  'Paga',
  "Africa's Talking",
  'Chowdeck',
  'Jobberman',
  'Paystack',
  'Moniepoint',
  'Raenest',
]

export default function Community() {
  const ref = useReveal()

  return (
    <section className="section community" id="community" ref={ref}>
      <div className="container">
        <SectionHead
          index="03"
          label="Developer Relations"
          title={<>Community is an <em>engineering</em> discipline.</>}
          note="Two years building the developer ecosystem at the University of Uyo — programs, partnerships, and the stage."
        />

        {/* ── Flagship ── */}
        <div className="community__feature" data-reveal>
          <span className="community__feature-year" aria-hidden="true">2026</span>

          <div className="community__feature-head">
            <span className="community__feature-kicker">Flagship · 19–20 November 2026</span>
            <span className="community__feature-place">University of Uyo</span>
          </div>

          <div className="community__feature-body">
            <div className="community__feature-copy">
              <h3 className="community__feature-title">
                Tech Ignite <em>2026</em>
              </h3>
              <p className="community__feature-theme">“Beyond the Hype: Are You Actually Building?”</p>
              <p className="community__feature-desc">
                A two-day developer event built around a two-week hackathon. Paga Engine and
                Africa's Talking APIs sit at the center of the build, with problem areas across
                transport, agriculture, education, healthcare and civic infrastructure.
              </p>
              <div className="community__feature-tags">
                <span>Event production</span>
                <span>Sponsorship</span>
                <span>Hackathon design</span>
                <span>Developer education</span>
              </div>
              <a
                className="community__feature-link"
                href="https://techignite.net"
                target="_blank"
                rel="noreferrer"
              >
                techignite.net
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>

            <div className="community__feature-stats">
              {igniteStats.map((s) => (
                <div className="community__feature-stat" key={s.label}>
                  <span className="community__feature-stat-value">{s.value}</span>
                  <span className="community__feature-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Programs + roles ── */}
        <div className="community__columns">
          <div className="community__programs">
            <div className="community__subhead" data-reveal>
              <span className="mono">Programs built</span>
              <span className="community__subhead-line" aria-hidden="true" />
            </div>

            <div className="community__program-list">
              {programs.map((p, i) => (
                <article className="community__program" key={p.title} data-reveal style={{ '--i': i }}>
                  <span className="community__program-index">{p.index}</span>
                  <div className="community__program-body">
                    <div className="community__program-head">
                      <h4 className="community__program-title">{p.title}</h4>
                      <span className="community__program-meta">{p.meta}</span>
                    </div>
                    <p className="community__program-text">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="community__roles">
            <div className="community__subhead" data-reveal>
              <span className="mono">Leadership</span>
              <span className="community__subhead-line" aria-hidden="true" />
            </div>

            <div className="community__role-list">
              {roles.map((r, i) => (
                <article className="community__role" key={r.title} data-reveal style={{ '--i': i }}>
                  <span className="community__role-period">{r.period}</span>
                  <h4 className="community__role-title">{r.title}</h4>
                  <p className="community__role-org">{r.org}</p>
                  <p className="community__role-text">{r.text}</p>
                  {r.link && (
                    <a
                      className="community__role-link"
                      href={r.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {r.link.label}
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Partners ── */}
        <div className="community__partners" data-reveal>
          <span className="mono community__partners-label">Partners &amp; speakers from</span>
          <div className="community__partner-list">
            {partners.map((p) => (
              <span className="community__partner" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
