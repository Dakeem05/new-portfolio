import React from 'react'
import useReveal from '../hooks/useReveal'
import './Contact.css'

const CV_PATH = '/Edidiong-Samuel-DevRel-CV.pdf'
const CV_NAME = 'Edidiong-Samuel-DevRel-CV.pdf'

const facts = [
  { label: 'Location', value: 'Uyo, Nigeria · Remote' },
  { label: 'Timezone', value: 'WAT / UTC+1' },
  { label: 'Availability', value: 'Full-time · Contract' },
  { label: 'Focus', value: 'Developer Relations · Engineering' },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="contact on-dark" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__meta" data-reveal>
          <span className="mono contact__eyebrow">08 — Contact</span>
          <span className="contact__availability">
            <span className="contact__availability-dot" aria-hidden="true" />
            Open to new roles
          </span>
        </div>

        <h2 className="contact__title" data-reveal style={{ '--i': 1 }}>
          Let's build something <em>worth using</em>.
        </h2>

        <p className="contact__sub" data-reveal style={{ '--i': 2 }}>
          I'm open to Developer Relations, Developer Advocacy and full-stack engineering roles —
          remote, international, full-time or contract. If you're building for developers, I'd like
          to hear about it.
        </p>

        <div className="contact__main" data-reveal style={{ '--i': 3 }}>
          <a href="mailto:edidiongsamuel14@gmail.com" className="contact__email">
            <span>edidiongsamuel14@gmail.com</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 18 18 4M18 4H7M18 4v11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>

          <div className="contact__actions">
            <a href={CV_PATH} download={CV_NAME} className="btn btn--primary">
              Download CV
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M6.5 1.5v7M3.6 5.9 6.5 8.8l2.9-2.9M2 11.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/edidiong-samuel-ng"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              LinkedIn
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>

            <a
              href="https://github.com/dakeem05"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              GitHub
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact__facts" data-reveal style={{ '--i': 4 }}>
          {facts.map((f) => (
            <div className="contact__fact" key={f.label}>
              <span className="contact__fact-label">{f.label}</span>
              <span className="contact__fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
