import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'TransactX',
    tagline: 'Core Banking API',
    description: 'A production-grade core banking API serving 50,000+ users with 99.9% uptime. Features P2P transfers, bill payments, airtime purchases, PSD2-compliant bank integrations, real-time fraud detection, and settlement reconciliation — 40% faster API responses via Redis caching.',
    tags: ['Laravel', 'MySQL', 'Redis', 'JWT/OAuth2', 'n8n', 'Laravel Cloud'],
    category: 'Backend',
    link: '#',
    featured: true,
    metric: '50k+ users · 99.9% uptime',
  },
  {
    id: '02',
    title: 'ShopittPlus',
    tagline: 'Multi-vendor Marketplace API',
    description: 'Core backend for a multi-vendor food/tech marketplace. Handles vendor onboarding, inventory management, order processing, real-time delivery tracking, and peer-to-peer transactions. Includes AI automation pipelines for lead routing and customer nurturing.',
    tags: ['Laravel', 'MySQL', 'Redis', 'Paystack', 'n8n', 'CI/CD'],
    category: 'Backend',
    link: '#',
    featured: true,
    metric: 'Thousands of daily interactions',
  },
  {
    id: '03',
    title: 'VestPad',
    tagline: 'Decentralised Launchpad',
    description: 'A decentralised crowdfunding launchpad on Ethereum. Built with Solidity smart contracts, custom subgraphs via The Graph for real-time analytics, and a Node.js backend with Web3.js for on-chain/off-chain data pipelines.',
    tags: ['Solidity', 'Web3.js', 'Node.js', 'The Graph', 'PostgreSQL'],
    category: 'Web3',
    link: '#',
    featured: true,
    metric: '99.8% data accuracy',
  },
  {
    id: '04',
    title: 'Swap2Naira',
    tagline: 'Fintech exchange platform',
    description: 'Full-stack fintech platform for seamless naira/crypto swaps. Laravel backend handling 20,000+ daily transactions, React/TypeScript frontend with a 30% mobile usage improvement, and cPanel CI/CD pipelines cutting deployment downtime by 50%.',
    tags: ['Laravel', 'React', 'TypeScript', 'MySQL', 'GitHub Actions'],
    category: 'Full-Stack',
    link: '#',
    featured: false,
    metric: '20k daily transactions',
  },
  {
    id: '05',
    title: 'Tekinni',
    tagline: 'eCommerce platform',
    description: 'High-performance eCommerce platform with a Laravel backend, Vue.js/TypeScript/Inertia.js frontend, multi-vendor support, real-time analytics, and secure checkout flows. Delivered a 30% increase in mobile conversions.',
    tags: ['Laravel', 'Vue.js', 'Inertia.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full-Stack',
    link: '#',
    featured: false,
    metric: '30% mobile conversion lift',
  },
  {
    id: '06',
    title: 'Fabricspa',
    tagline: 'Laundry management system',
    description: 'Built from scratch: a Laravel + Vue.js laundry platform with real-time order tracking from pickup to delivery, secure payment gateway integration, and automated invoicing — reducing payment errors by 20%.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Payment Gateway'],
    category: 'Full-Stack',
    link: '#',
    featured: false,
    metric: '20% payment error reduction',
  },
  {
    id: '07',
    title: 'Vistapay',
    tagline: 'VTU transactions backend',
    description: 'Scalable and secure Laravel backend for virtual top-up (VTU) transactions — airtime, data, and utility purchases. Integrated payment gateways and automated CI/CD pipelines to DigitalOcean, cutting deployment downtime by 60%.',
    tags: ['Laravel', 'MySQL', 'DigitalOcean', 'CI/CD'],
    category: 'Backend',
    link: '#',
    featured: false,
    metric: '60% deployment downtime reduction',
  },
]

const categories = ['All', 'Backend', 'Web3', 'Full-Stack']

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-reveal]')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('revealed'), i * 60)
      }),
      { threshold: 0.1 }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="projects__header" data-reveal>
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Things I've built.</h2>
          </div>
          <div className="projects__filters">
            {categories.map(c => (
              <button
                key={c}
                className={`projects__filter ${active === c ? 'projects__filter--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__list">
          {filtered.map((p, i) => (
            <div key={p.id} className="project-card " style={{ '--delay': `${i * 60}ms` }}>
              <div className="project-card__top">
                <div className="project-card__meta">
                  <span className="project-card__id">{p.id}</span>
                  <span className="project-card__category">{p.category}</span>
                  {p.featured && <span className="project-card__featured">Featured</span>}
                </div>
                <a href={p.link} className="project-card__arrow" aria-label="View project">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__tagline">{p.tagline}</p>
              <p className="project-card__desc">{p.description}</p>

              {p.metric && (
                <div className="project-card__metric">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 9l3-3 2 2 4-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.metric}
                </div>
              )}

              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
