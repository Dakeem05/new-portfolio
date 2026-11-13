import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './Experience.css'

const mainRoles = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    desc: 'Designed and shipped a multi-currency commerce platform end to end — React storefront, React admin panel and Laravel REST API — with eight currencies through Kora and automated cPanel releases.',
    tech: 'Laravel · React · MySQL · Kora · GitHub Actions',
  },
  {
    role: 'Backend Engineer (Laravel API)',
    company: 'ShopittPlus',
    location: 'Uyo, Nigeria',
    period: 'Sep 2025 — Dec 2025',
    desc: 'Architected the marketplace API: vendor onboarding, inventory, order lifecycle, delivery tracking and peer-to-peer transactions. Cut response times with MySQL indexing, Redis caching and an event-driven order pipeline.',
    tech: 'Laravel · MySQL · Redis · Paystack · n8n',
  },
  {
    role: 'Backend & Blockchain Engineer (NestJS)',
    company: 'Espay',
    location: 'Lagos, Nigeria',
    period: 'Mar 2025 — Nov 2025',
    desc: 'Sole engineer on a peer-to-peer crypto exchange for Espees on the Toronet blockchain — architecture, backend, blockchain integration, database design and production troubleshooting. Built the NestJS sync service with idempotency guards.',
    tech: 'NestJS · TypeScript · Node.js · React · PostgreSQL · Toronet',
  },
  {
    role: 'Backend Engineer (Laravel API)',
    company: 'TransactX',
    location: 'Lagos, Nigeria',
    period: 'Apr 2025 — Sep 2025',
    desc: 'Built and scaled the core banking API to 50,000+ users at 99.9% reliability, with PSD2-compliant integrations, fraud detection and settlement reconciliation. Reduced response times by 40% and sustained 15,000+ daily transactions.',
    tech: 'Laravel · MySQL · Redis · JWT / OAuth2 · n8n · Laravel Cloud',
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tekinni',
    location: 'Remote',
    period: 'Jan 2025 — Mar 2025',
    desc: 'Architected the Laravel commerce backend and built the Vue.js / TypeScript / Inertia.js frontend, contributing to a 30% lift in mobile conversions and halving deployment downtime with GitHub Actions.',
    tech: 'Laravel · MySQL · Vue.js · Inertia.js · TypeScript · Tailwind',
  },
  {
    role: 'Backend Engineer (NestJS)',
    company: 'Kachim',
    location: 'Lagos, Nigeria',
    period: 'Oct 2024 — Dec 2024',
    desc: 'Built the backend for an EdTech platform: authentication, OTP verification, account lifecycle and four subscription tiers with Flutterwave payments.',
    tech: 'NestJS · TypeScript · PostgreSQL · Flutterwave',
  },
]

const earlierRoles = [
  {
    role: 'Blockchain Engineer',
    company: 'VestPad',
    location: 'Remote',
    period: 'Aug 2024 — Dec 2024',
    desc: 'Designed a decentralized launchpad in Solidity and built The Graph subgraphs plus a Node.js / Web3.js pipeline for on-chain data.',
    tech: 'Solidity · The Graph · Web3.js · Node.js',
  },
  {
    role: 'Software Engineer',
    company: 'Foodpreneurshub',
    location: 'Ontario, Canada',
    period: 'Aug 2024 — Oct 2024',
    desc: 'Refactored a production Laravel backend and introduced GitHub Actions deployments to cPanel, cutting release time by 40%.',
    tech: 'Laravel · GitHub Actions · cPanel',
  },
  {
    role: 'Software Engineer',
    company: 'Swap2Naira',
    location: 'London, UK',
    period: 'Jun 2024 — Aug 2024',
    desc: 'Architected the Laravel backend for a naira/crypto swap platform handling 20,000 daily transactions, and built the React/TypeScript frontend.',
    tech: 'Laravel · React · TypeScript · MySQL',
  },
  {
    role: 'Backend (PHP) Tutor',
    company: 'The Roothub',
    location: 'Akwa Ibom, Nigeria',
    period: 'May 2023 — Aug 2023',
    desc: 'Taught PHP, API development and MySQL to cohorts of new developers; designed hands-on CRUD and API projects.',
    tech: 'PHP · MySQL · API design · Mentorship',
  },
  {
    role: 'Software Engineer',
    company: 'Fabricspa',
    location: 'Lagos, Nigeria',
    period: 'Oct 2022 — Dec 2022',
    desc: 'Built a laundry management platform from scratch in Laravel and Vue.js, with real-time tracking and automated invoicing.',
    tech: 'Laravel · Vue.js · MySQL',
  },
]

function Role({ item, index }) {
  return (
    <article className="xp__row" data-reveal style={{ '--i': index }}>
      <div className="xp__period">{item.period}</div>
      <div className="xp__body">
        <div className="xp__head">
          <h3 className="xp__role">{item.role}</h3>
          <span className="xp__company">{item.company}</span>
        </div>
        <span className="xp__location">{item.location}</span>
        <p className="xp__desc">{item.desc}</p>
        <span className="xp__tech">{item.tech}</span>
      </div>
    </article>
  )
}

export default function Experience() {
  const ref = useReveal()

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <SectionHead
          index="06"
          label="Experience"
          title={<>Four years in <em>production</em>.</>}
          note="Engineering roles across fintech, commerce and Web3 — with the outcomes attached."
        />

        <div className="xp__list">
          {mainRoles.map((item, i) => (
            <Role item={item} index={i} key={item.company + item.role} />
          ))}
        </div>

        <div className="xp__earlier">
          <div className="xp__subhead" data-reveal>
            <span className="mono">Earlier experience</span>
            <span className="xp__subhead-line" aria-hidden="true" />
          </div>

          <div className="xp__list xp__list--earlier">
            {earlierRoles.map((item, i) => (
              <Role item={item} index={i} key={item.company + item.role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
