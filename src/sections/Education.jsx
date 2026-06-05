import React, { useEffect, useRef } from 'react'
import './Education.css'

const certifications = [
  {
    title: 'AI Fundamentals & Ai Literacy',
    issuer: 'IBM SkillsBuild',
    area: 'Ai & Automation Specialization',
    icon: '🤖',
    color: '#f65ccaff',
  },
  {
    title: 'Alchemy University',
    issuer: 'Alchemy',
    area: 'Blockchain Development',
    icon: '⛓',
    color: '#8b5cf6',
  },
  {
    title: 'Cyfrin Updraft',
    issuer: 'Cyfrin',
    area: 'Smart Contract Security',
    icon: '🔐',
    color: '#3b82f6',
  },
  {
    title: 'Postman API Student Expert',
    issuer: 'Postman',
    area: 'API Development & Testing',
    icon: '🚀',
    color: '#f59e0b',
  },
]

const selfLearning = [
  { label: 'Python', note: 'Data structures, scripting, ML fundamentals' },
  { label: 'Go', note: 'Concurrency, microservices, CLI tools' },
  { label: 'Advanced Solidity', note: 'Security patterns, gas optimisation' },
  { label: 'System Design', note: 'Distributed systems, scalability patterns' },
]

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-reveal]')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), i * 70)
      }),
      { threshold: 0.1 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="education__header" data-reveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">Foundations &amp; learning.</h2>
        </div>

        <div className="education__grid">

          {/* Degree card */}
          <div className="edu-degree" data-reveal>
            <div className="edu-degree__glow" />
            <div className="edu-degree__inner">
              <div className="edu-degree__top">
                <div className="edu-degree__icon-wrap">
                  <span className="edu-degree__icon">🎓</span>
                </div>
                <span className="edu-degree__status">In view</span>
              </div>
              <h3 className="edu-degree__title">BSc Computer Science</h3>
              <p className="edu-degree__school">University of Uyo</p>
              <p className="edu-degree__location">Uyo, Akwa Ibom State, Nigeria</p>

              <div className="edu-degree__divider" />

              <div className="edu-degree__meta">
                <div className="edu-degree__meta-item">
                  <span className="edu-degree__meta-label">Field</span>
                  <span className="edu-degree__meta-value">Computer Science</span>
                </div>
                <div className="edu-degree__meta-item">
                  <span className="edu-degree__meta-label">Status</span>
                  <span className="edu-degree__meta-value edu-degree__meta-value--active">
                    <span className="edu-degree__dot" />
                    Currently enrolled
                  </span>
                </div>
                <div className="edu-degree__meta-item">
                  <span className="edu-degree__meta-label">Activity</span>
                  <span className="edu-degree__meta-value">Organizer, GDGoC chapter</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="education__right">

            {/* Certifications */}
            <div className="edu-certs" data-reveal>
              <p className="edu-certs__heading">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5L7 1z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                Certifications
              </p>
              <div className="edu-certs__list">
                {certifications.map((cert) => (
                  <div key={cert.title} className="edu-cert-card">
                    <div
                      className="edu-cert-card__icon"
                      style={{ background: `${cert.color}12`, color: cert.color }}
                    >
                      {cert.icon}
                    </div>
                    <div className="edu-cert-card__body">
                      <span className="edu-cert-card__title">{cert.title}</span>
                      <span className="edu-cert-card__area">{cert.area}</span>
                    </div>
                    <div className="edu-cert-card__badge" style={{ color: cert.color, background: `${cert.color}10` }}>
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Self-learning */}
            <div className="edu-learning" data-reveal>
              <p className="edu-certs__heading">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Currently learning
              </p>
              <div className="edu-learning__list">
                {selfLearning.map(item => (
                  <div key={item.label} className="edu-learning__item">
                    <div className="edu-learning__item-left">
                      <span className="edu-learning__label">{item.label}</span>
                      <span className="edu-learning__note">{item.note}</span>
                    </div>
                    <span className="edu-learning__pill">Active</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
