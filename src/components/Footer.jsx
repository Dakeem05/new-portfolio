import React from 'react'
import './Footer.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/dakeem05' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edidiong-samuel-ng' },
  { label: 'Twitter', href: 'https://twitter.com/dakeem_ng' },
  { label: 'Telegram', href: 'https://t.me/dakeem_ng' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-block">
          <a href="#top" className="footer__brand">Edidiong Samuel</a>
          <span className="footer__role">Developer Relations · Full-Stack Engineer</span>
        </div>

        <nav className="footer__socials" aria-label="Social links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()}</span>
          <span>Uyo, Nigeria · WAT</span>
        </div>
      </div>
    </footer>
  )
}
