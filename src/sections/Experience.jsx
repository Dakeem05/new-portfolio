import React, { useEffect, useRef } from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'Backend Engineer (Laravel API)',
    company: 'ShopittPlus',
    location: 'Uyo, Nigeria',
    period: 'Sep 2025 — Dec 2025',
    type: 'Contract',
    desc: 'Architected and scaled the core backend API for a multi-vendor food/tech marketplace, enabling vendor account management, order processing, and real-time delivery tracking. Leveraged AI-powered automation workflows to streamline vendor onboarding, lead generation, and customer nurturing sequences.',
    highlights: ['Laravel RESTful API', 'MySQL + Redis', 'Paystack integration', 'AI automation via n8n'],
  },
  {
    role: 'Backend Engineer (Laravel API)',
    company: 'TransactX',
    location: 'Lagos, Nigeria',
    period: 'Apr 2025 — Sep 2025',
    type: 'Contract',
    desc: 'Developed and scaled a core banking API serving 50,000+ users with 99.9% reliability. Engineered PSD2-compliant integrations, P2P transfers, bill payments, and airtime purchases. Reduced API response times by 40% via Redis caching and query optimisation, handling 15,000+ daily transactions.',
    highlights: ['40% API response time reduction', '50k+ users, 99.9% uptime', 'n8n workflow automation', 'Laravel Cloud + CI/CD'],
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tekinni',
    location: 'Remote',
    period: 'Jan 2025 — Mar 2025',
    type: 'Contract',
    desc: 'Architected a high-performance eCommerce backend with Laravel and a dynamic Vue.js/TypeScript frontend using Inertia.js. Drove a 30% increase in mobile conversions and cut deployment downtime by 50% with GitHub CI/CD automation.',
    highlights: ['Laravel + Vue.js + Inertia.js', '30% mobile conversion lift', 'GitHub Actions CI/CD', 'Multi-vendor support'],
  },
  {
    role: 'Blockchain Engineer',
    company: 'VestPad',
    location: 'Remote',
    period: 'Aug 2024 — Dec 2024',
    type: 'Contract',
    desc: 'Designed and deployed a decentralised launchpad using Solidity for tokenised crowdfunding. Built custom subgraphs with The Graph for real-time analytics, and architected a Node.js backend with Web3.js for on-chain/off-chain data pipelines.',
    highlights: ['Solidity smart contracts', 'The Graph subgraphs', 'Web3.js + Node.js', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Swap2Naira',
    location: 'London, UK',
    period: 'Jun 2024 — Dec 2024',
    type: 'Contract',
    desc: 'Architected and developed the platform backend using Laravel, handling up to 20,000 daily transactions at 99.9% uptime. Built a responsive React/TypeScript frontend that increased mobile usage by 30%, with cPanel-integrated CI/CD pipelines cutting downtime by 50%.',
    highlights: ['Laravel + React/TypeScript', '20k daily transactions', '30% mobile usage increase', 'cPanel CI/CD'],
  },
  {
    role: 'Software Engineer',
    company: 'Foodpreneurshub',
    location: 'Ontario, Canada',
    period: 'Aug 2024 — Oct 2024',
    type: 'Contract',
    desc: 'Refactored the existing Laravel backend to resolve critical production issues, implemented GitHub Actions for automated cPanel deployments (40% faster), and enhanced the admin panel for blog and content management.',
    highlights: ['Laravel refactor', 'GitHub Actions CI/CD', '40% faster deployments', 'Admin panel enhancements'],
  },
  {
    role: 'Software Engineer',
    company: 'Fabricspa',
    location: 'Lagos, Nigeria',
    period: 'Oct 2022 — Dec 2022',
    type: 'Contract',
    desc: 'Built the laundry management platform from scratch using Laravel and Vue.js, including a real-time order tracking system, secure payment gateway integration, and automated invoicing that reduced payment errors by 20%.',
    highlights: ['Laravel + Vue.js', 'Real-time order tracking', 'Payment gateway', '20% error reduction'],
  },
  {
    role: 'Backend (PHP) Tutor',
    company: 'The Roothub',
    location: 'Akwa Ibom, Nigeria',
    period: 'May 2023 — Aug 2023',
    type: 'Teaching',
    desc: 'Delivered in-depth training on PHP and backend development, designed hands-on CRUD and API projects, and mentored aspiring developers in coding best practices, debugging, and MySQL database management.',
    highlights: ['PHP & backend training', 'API development workshops', 'MySQL mentorship'],
  },
  {
    role: 'Organizer',
    company: 'GDGoC — University of Uyo',
    location: 'Uyo, Nigeria',
    period: '2025 — Present',
    type: 'Community',
    desc: 'Organizer the Google Developer Group on Campus at Uniuyo. Organise developer events, bootcamps, hackathons, coding competitions, and build days to grow the local tech community and support the community.',
    highlights: ['Developer bootcamps', 'Hackathons & build days', 'Community leadership', '"She Builds" event'],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-reveal]')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), i * 50)
      }),
      { threshold: 0.05 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const typeColors = {
    'Contract': '#3b82f6',
    'Teaching': '#f59e0b',
    'Community': '#10b981',
  }

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="experience__header" data-reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked.</h2>
        </div>

        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.company + exp.role} className="exp-card" data-reveal>
              <div className="exp-card__left">
                <span className="exp-card__period">{exp.period}</span>
                <span className="exp-card__location">{exp.location}</span>
                <span
                  className="exp-card__type"
                  style={{ color: typeColors[exp.type] || '#8b5cf6', background: `${typeColors[exp.type] || '#8b5cf6'}14` }}
                >
                  {exp.type}
                </span>
              </div>
              <div className="exp-card__right">
                <div className="exp-card__header">
                  <h3 className="exp-card__role">{exp.role}</h3>
                  <span className="exp-card__company">{exp.company}</span>
                </div>
                <p className="exp-card__desc">{exp.desc}</p>
                <div className="exp-card__highlights">
                  {exp.highlights.map(h => (
                    <span key={h} className="exp-card__highlight">
                      <span className="exp-card__highlight-tick">✓</span>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
