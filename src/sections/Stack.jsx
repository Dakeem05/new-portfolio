import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './Stack.css'

const rows = [
  {
    label: 'Developer Relations',
    primary: true,
    items: [
      'Community strategy',
      'Program design',
      'Event production',
      'Sponsorship & partnerships',
      'Technical writing',
      'Public speaking',
      'API adoption',
      'Volunteer management',
    ],
  },
  {
    label: 'Backend',
    items: [
      'PHP',
      'Laravel',
      'NestJS',
      'Node.js',
      'REST APIs',
      'Webhooks',
      'Queues & workers',
      'JWT / OAuth2',
    ],
  },
  {
    label: 'Frontend',
    items: ['React', 'Vue.js', 'Next.js', 'Nuxt.js', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
  },
  {
    label: 'Data & Infrastructure',
    items: [
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'AWS',
      'DigitalOcean',
      'Laravel Cloud',
      'cPanel / WHM',
    ],
  },
  {
    label: 'Web3 & AI',
    items: [
      'Solidity',
      'Foundry',
      'Web3.js',
      'Ethers.js',
      'The Graph',
      'Chainlink',
      'Soroban',
      'n8n',
      'OpenAI',
      'Gemini',
    ],
  },
]

export default function Stack() {
  const ref = useReveal()

  return (
    <section className="section stack" id="capabilities" ref={ref}>
      <div className="container">
        <SectionHead
          index="05"
          label="Capabilities"
          title={<>The tools behind the <em>work</em>.</>}
          note="Range matters, but judgment matters more. These are the tools I reach for in production."
        />

        <div className="stack__list">
          {rows.map((row, i) => (
            <div
              className={`stack__row ${row.primary ? 'stack__row--primary' : ''}`}
              key={row.label}
              data-reveal
              style={{ '--i': i }}
            >
              <span className="stack__label">{row.label}</span>
              <div className="stack__items">
                {row.items.map((item) => (
                  <span className="stack__item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
