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
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__name">Edidiong Samuel</span>
            <span className="footer__copy">
              © {new Date().getFullYear()} · Built with React
            </span>
          </div>
          <nav className="footer__socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer__social">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
