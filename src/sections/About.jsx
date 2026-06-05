import React, { useEffect, useRef } from 'react'
import './About.css'

const highlights = [
  { icon: '⚡', text: 'Laravel backend specialist — 40%+ performance improvements in production' },
  { icon: '🔗', text: 'Blockchain engineer — Solidity, Foundry, EVM, The Graph' },
  { icon: '🤖', text: 'AI automation pipelines with n8n, OpenAI, and event-driven flows' },
  { icon: '🎓', text: 'Organizer, GDGoC — University of Uyo chapter' },
]

const certs = [
  'Alchemy University',
  'Cyfrin Updraft (Blockchain)',
  'Postman API Student Expert',
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-reveal]')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), i * 80)
      }),
      { threshold: 0.15 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="about__grid">
          <div className="about__left">
            <p className="section-label" data-reveal>About me</p>
            <h2 className="section-title" data-reveal>
              Engineering with<br />
              <em>intention</em> and craft.
            </h2>
            <div className="about__certs" data-reveal>
              <p className="about__certs-label">Certifications</p>
              {certs.map(c => (
                <span key={c} className="about__cert">{c}</span>
              ))}
            </div>
          </div>

          <div className="about__right">
            <p className="about__bio" data-reveal>
              I'm Edidiong Samuel — a full-stack engineer based in Lagos, Nigeria, with over 5 years
              building production-grade applications. I specialise in Laravel (PHP) for robust, scalable
              backend systems — APIs that handle tens of thousands of daily transactions with 99.9% uptime.
            </p>
            <p className="about__bio" data-reveal>
              I'm proven at system performance tuning: 40%+ response time reductions through caching,
              indexing, and query discipline are standard in my work. On the frontend, I pair backends
              with Vue.js, React.js, Next.js, and Nuxt.js to deliver complete, fluid user experiences.
            </p>
            <p className="about__bio" data-reveal>
              Beyond web development, I'm seasoned in blockchain engineering — building secure
              decentralised systems with Solidity and Foundry on EVM platforms, and integrating
              reliable data oracles via Chainlink. I also build AI automation pipelines with n8n
              that turn repetitive business workflows into silent, compounding efficiency.
            </p>

            <div className="about__highlights" data-reveal>
              {highlights.map(h => (
                <div key={h.text} className="about__highlight">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            <div className="about__links" data-reveal>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="about__link">
                GitHub
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="about__link">
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="mailto:edidiongsamuel14@gmail.com" className="about__link">
                Email me
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
