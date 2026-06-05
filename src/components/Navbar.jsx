import React, { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-name">Edidiong</span>
          <span className="navbar__logo-dot" />
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:edidiongsamuel14@gmail.com" className="navbar__cta">
          Hire me
        </a>

        <button
          className={`navbar__burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="mailto:edidiongsamuel14@gmail.com" className="navbar__mobile-cta">
          Hire me
        </a>
      </div>
    </nav>
  )
}
