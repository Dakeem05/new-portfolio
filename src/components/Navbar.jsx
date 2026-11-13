import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const CV_PATH = '/Edidiong-Samuel-DevRel-CV.pdf'
const CV_NAME = 'Edidiong-Samuel-DevRel-CV.pdf'

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}
      aria-label="Primary"
    >
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">ES</span>
          <span className="navbar__identity">
            <span className="navbar__name">Edidiong Samuel</span>
            <span className="navbar__role">Developer Relations · Engineer</span>
          </span>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href={CV_PATH} download={CV_NAME} className="navbar__cv">
            CV
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1.5v6M3.4 5.2 6 7.8l2.6-2.6M2 10.5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="mailto:edidiongsamuel14@gmail.com" className="navbar__cta">
            Let's talk
          </a>
        </div>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`} aria-hidden={!open}>
        <div className="navbar__mobile-inner">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setOpen(false)}
              style={{ '--i': i }}
            >
              <span className="navbar__mobile-index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <a href={CV_PATH} download={CV_NAME} className="btn btn--outline" onClick={() => setOpen(false)}>
              Download CV
            </a>
            <a href="mailto:edidiongsamuel14@gmail.com" className="btn btn--ink" onClick={() => setOpen(false)}>
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
