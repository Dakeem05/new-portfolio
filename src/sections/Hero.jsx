import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), i * 90)
          }
        })
      },
      { threshold: 0.05 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" ref={containerRef}>

      {/* ── Full-bleed background photo ── */}
      <div className="hero__bg-photo" />

      {/* ── Soft vignette + gradient overlay ── */}
      <div className="hero__overlay" />

      <div className="container hero__container">

        {/* ── Glassmorphism card ── */}
        <div className="hero__glass" data-reveal>

          <div className="hero__meta" data-reveal>
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Available for hire
            </span>
            <span className="hero__location">Lagos, Nigeria · Remote</span>
          </div>

          <h1 className="hero__heading" data-reveal>
            <span className="hero__heading-line">Building</span>
            <span className="hero__heading-line hero__heading-line--italic">scalable</span>
            <span className="hero__heading-line">systems that</span>
            <span className="hero__heading-line">actually work.</span>
          </h1>

          <p className="hero__sub" data-reveal>
            Full-stack engineer with 5+ years shipping production software across fintech,
            Web3, and AI automation. I specialise in Laravel backends that handle tens of
            thousands of daily transactions — 99.9% uptime, 40%+ performance gains.
          </p>

          <div className="hero__actions" data-reveal>
            <a href="#projects" className="btn btn--primary">
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>

          <div className="hero__divider" />

          <div className="hero__stats" data-reveal>
            <div className="hero__stat">
              <span className="hero__stat-num">5+</span>
              <span className="hero__stat-label">Years building</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">50k+</span>
              <span className="hero__stat-label">Users served</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">40%+</span>
              <span className="hero__stat-label">Perf. improvements</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  )
}
