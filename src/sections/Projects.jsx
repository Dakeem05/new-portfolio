import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'TransactX',
    tagline: 'Core banking API',
    year: '2025',
    description:
      'The banking API behind P2P transfers, bill payments and airtime. PSD2-compliant bank integrations, real-time fraud detection and settlement reconciliation.',
    tags: 'Laravel · MySQL · Redis · JWT / OAuth2',
    metric: '50k+ users · 99.9% uptime',
    link: 'https://mytransactx.com/',
  },
  {
    id: '02',
    title: 'ShopittPlus',
    tagline: 'Multi-vendor marketplace API',
    year: '2025',
    description:
      'Core backend for vendor onboarding, inventory, the order lifecycle, delivery tracking and peer-to-peer transactions, with AI-assisted lead routing.',
    tags: 'Laravel · Redis · Paystack · n8n',
    metric: 'Event-driven order pipeline',
    link: 'https://www.shopittplus.com/',
  },
  {
    id: '03',
    title: 'Swap2Naira',
    tagline: 'Naira / crypto exchange',
    year: '2024',
    description:
      'A full-stack swap platform with a Laravel backend and a React/TypeScript frontend, built for high daily volume and low-friction mobile use.',
    tags: 'Laravel · React · TypeScript · MySQL',
    metric: '20k daily transactions',
    link: 'https://swap2naira.com/',
  },
  {
    id: '04',
    title: 'VestPad',
    tagline: 'Decentralized launchpad',
    year: '2024',
    description:
      'A tokenized crowdfunding launchpad in Solidity, with custom The Graph subgraphs and a Node.js / Web3.js pipeline for on-chain data.',
    tags: 'Solidity · The Graph · Web3.js · PostgreSQL',
    metric: '99.8% data accuracy',
    link: 'https://www.vestpad.io/',
  },
  {
    id: '05',
    title: 'Tekinni',
    tagline: 'eCommerce platform',
    year: '2025',
    description:
      'A high-performance commerce backend with a Vue.js / TypeScript / Inertia.js frontend, multi-vendor support and a streamlined checkout.',
    tags: 'Laravel · Vue.js · Inertia.js · TypeScript',
    metric: '30% mobile conversion lift',
    link: 'https://tekinni.com/',
  },
  {
    id: '06',
    title: 'Vistapay',
    tagline: 'VTU transactions backend',
    year: '2025',
    description:
      'A secure Laravel backend for airtime, data and utility purchases, with payment gateway integrations and automated releases to DigitalOcean.',
    tags: 'Laravel · MySQL · DigitalOcean · CI/CD',
    metric: '60% less deployment downtime',
    link: 'https://vistapayhq.com/',
  },
  {
    id: '07',
    title: 'Multi-currency commerce',
    tagline: 'Freelance platform · end to end',
    year: '2026',
    description:
      'A retail platform built solo: React storefront, React admin panel and Laravel REST API, supporting eight currencies through the Kora gateway.',
    tags: 'Laravel · React · MySQL · Kora',
    metric: '8 currencies · production',
    link: '',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section className="section work" id="work" ref={ref}>
      <div className="container">
        <SectionHead
          index="04"
          label="Selected work"
          title={<>Systems in <em>production</em>.</>}
          note="Fintech, commerce and Web3 — built to hold under load, not just to demo."
        />

        <div className="work__list">
          {projects.map((p, i) => {
            const Tag = p.link ? 'a' : 'div'
            const linkProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <Tag
                key={p.id}
                className={`work__row ${p.link ? '' : 'work__row--static'}`}
                data-reveal
                style={{ '--i': i }}
                {...linkProps}
              >
                <span className="work__index">{p.id}</span>

                <div className="work__body">
                  <div className="work__title-line">
                    <h3 className="work__title">{p.title}</h3>
                    <span className="work__year">{p.year}</span>
                  </div>
                  <p className="work__tagline">{p.tagline}</p>
                  <p className="work__desc">{p.description}</p>
                </div>

                <div className="work__aside">
                  <span className="work__metric">{p.metric}</span>
                  <span className="work__tags">{p.tags}</span>
                </div>

                <span className="work__arrow" aria-hidden="true">
                  {p.link ? (
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13 13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <span className="work__arrow-dash" aria-hidden="true">—</span>
                  )}
                </span>
              </Tag>
            )
          })}
        </div>

        <p className="work__footnote" data-reveal>
          More case studies available on request. Engineering detail lives on{' '}
          <a href="https://github.com/dakeem05" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  )
}
