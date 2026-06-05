import React, { useEffect, useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-reveal]')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), i * 80)
      }),
      { threshold: 0.1 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="contact__inner">
          <div className="contact__left" data-reveal>
            <p className="section-label">Get in touch</p>
            <h2 className="contact__heading">
              Let's build<br />
              <em>something</em><br />
              together.
            </h2>
            <p className="contact__sub">
              I'm actively looking for remote roles across fintech, Web3, AI, and beyond.
              Open to full-time, contract, and project-based work.
            </p>
            <div className="contact__links">
              <a href="mailto:edidiongsamuel14@gmail.com" className="contact__email">
                edidiongsamuel14@gmail.com
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact__right" data-reveal>
            <div className="contact__card">
              <div className="contact__card-header">
                <span className="contact__card-title">Open to opportunities</span>
                <span className="contact__badge">
                  <span className="contact__badge-dot" />
                  Available now
                </span>
              </div>

              <div className="contact__details">
                <div className="contact__detail">
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Uyo, Nigeria (Remote)</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-label">Timezone</span>
                  <span className="contact__detail-value">WAT (UTC+1)</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-label">Availability</span>
                  <span className="contact__detail-value">Full-time / Contract</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-label">Preferred work</span>
                  <span className="contact__detail-value">Remote, international</span>
                </div>
              </div>

              <a href="mailto:edidiongsamuel14@gmail.com" className="contact__cta">
                Send me an email
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
