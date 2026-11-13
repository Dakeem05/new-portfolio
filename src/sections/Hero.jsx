import React from 'react'
import useReveal from '../hooks/useReveal'
import './Hero.css'

const CV_PATH = '/Edidiong-Samuel-DevRel-CV.pdf'
const CV_NAME = 'Edidiong-Samuel-DevRel-CV.pdf'

const stats = [
  { value: '900+', label: 'Community members' },
  { value: '9', label: 'Event partners' },
  { value: '50k+', label: 'Users served' },
  { value: '4+', label: 'Years engineering' },
]

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-reveal>
            <span className="hero__pulse" aria-hidden="true" />
            Developer Relations · Full-Stack Engineering
          </p>

          <h1 className="hero__title" data-reveal style={{ '--i': 1 }}>
            I build the systems
            <span className="hero__title-line">
              — and the <em>people</em> —
            </span>
            that ship.
          </h1>

          <p className="hero__sub" data-reveal style={{ '--i': 2 }}>
            Developer Relations Engineer and full-stack engineer with four years shipping
            production software and two years leading GDGOC University of Uyo — from a
            dormant chapter to 900+ members, nine partners, and a two-day flagship event.
          </p>

          <div className="hero__actions" data-reveal style={{ '--i': 3 }}>
            <a href="#work" className="btn btn--primary">
              View selected work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={CV_PATH} download={CV_NAME} className="btn btn--ghost">
              Download CV
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M6.5 1.5v7M3.6 5.9 6.5 8.8l2.9-2.9M2 11.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="hero__meta" data-reveal style={{ '--i': 4 }}>
            <span className="hero__meta-item">
              <span className="hero__meta-dot" aria-hidden="true" />
              Available for DevRel &amp; engineering roles
            </span>
            <span className="hero__meta-sep" aria-hidden="true" />
            <span className="hero__meta-item hero__meta-item--muted">Uyo, Nigeria · WAT</span>
          </div>
        </div>

        <figure className="hero__portrait" data-reveal style={{ '--i': 2 }}>
          <div className="hero__portrait-frame">
            <img
              src="/dakeem.png"
              alt="Portrait of Edidiong Samuel"
              className="hero__portrait-img"
            />
            <span className="hero__portrait-tag">
              <span className="hero__portrait-tag-dot" aria-hidden="true" />
              GDGOC Lead · 900+ members
            </span>
          </div>
          <figcaption className="hero__portrait-caption">
            <span>Edidiong Samuel — Uyo, Nigeria</span>
            <span>WAT / UTC+1</span>
          </figcaption>
        </figure>
      </div>

      <div className="container hero__stats-wrap">
        <div className="hero__stats">
          {stats.map((s, i) => (
            <div className="hero__stat" key={s.label} data-reveal style={{ '--i': i + 2 }}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
