import React, { useEffect, useRef } from 'react'
import './Stack.css'

const stack = {
  'Backend': ['PHP', 'Laravel', 'RESTful APIs', 'MySQL', 'Redis', 'JWT / OAuth2', 'Event-driven arch'],
  'Frontend': ['Vue.js', 'React.js', 'Next.js', 'Nuxt.js', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
  'Web3 & Blockchain': ['Solidity', 'Foundry', 'Web3.js', 'Ethers.js', 'The Graph', 'Chainlink', 'EVM'],
  'AI & Automation': ['n8n', 'OpenAI API', 'Apollo.io', 'Lead automation', 'Event-driven flows'],
  'Tools & Infra': ['Git', 'GitHub Actions', 'Docker', 'AWS', 'cPanel / WHM', 'DigitalOcean', 'Laravel Cloud'],
  'Learning': ['Node.js', 'Python', 'Go'],
}

const categoryColors = {
  'Backend': '#111110',
  'Frontend': '#3b82f6',
  'Web3 & Blockchain': '#8b5cf6',
  'AI & Automation': '#f59e0b',
  'Tools & Infra': '#10b981',
  'Learning': '#ec4899',
}

export default function Stack() {
  const ref = useRef(null)

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
    <section className="section stack" id="stack" ref={ref}>
      <div className="container">
        <div className="divider" data-reveal />

        <div className="stack__header" data-reveal>
          <p className="section-label">Tech stack</p>
          <h2 className="section-title">Tools I trust.</h2>
        </div>

        <div className="stack__grid">
          {Object.entries(stack).map(([category, items], i) => (
            <div key={category} className="stack__group" data-reveal style={{ '--delay': `${i * 60}ms` }}>
              <div className="stack__group-header">
                <span
                  className="stack__group-dot"
                  style={{ background: categoryColors[category] }}
                />
                <span className="stack__group-label">{category}</span>
              </div>
              <div className="stack__items">
                {items.map(item => (
                  <span key={item} className="stack__item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
