import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './About.css'

const facts = [
  { label: 'Based in', value: 'Uyo, Nigeria' },
  { label: 'Timezone', value: 'WAT / UTC+1' },
  { label: 'Focus', value: 'Developer Relations · Platform Engineering' },
  { label: 'Education', value: 'BSc Computer Science, University of Uyo (in progress)' },
  { label: 'Community', value: 'Lead, GDGOC University of Uyo' },
]

const practice = [
  {
    index: '01',
    title: 'Developer Relations',
    text: 'Community strategy, program design, event production, sponsorship, technical content, and public speaking. I build the conditions for developers to show up, learn, and ship.',
  },
  {
    index: '02',
    title: 'Engineering',
    text: 'Laravel and NestJS APIs, React and Vue frontends, data modeling, queues, caching, and production delivery. I stay close enough to the code to speak about it with authority.',
  },
  {
    index: '03',
    title: 'Education',
    text: 'Curriculum design, hands-on workshops, mentorship, and API adoption. I turn complex systems into material a new developer can follow and use on the same day.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <SectionHead
          index="02"
          label="Profile"
          title={<>I work where engineering meets <em>education</em>.</>}
          note="A developer advocate who still ships — and an engineer who can explain the work."
        />

        <p className="about__principle" data-reveal>
          The best developer relations is good engineering, <em>explained honestly</em>.
        </p>

        <div className="about__grid">
          <div className="about__body">
            <p className="about__lead" data-reveal>
              I build developer communities and the production systems behind them.
            </p>
            <p className="about__text" data-reveal style={{ '--i': 1 }}>
              I'm Edidiong Samuel, a Developer Relations Engineer and full-stack engineer based in
              Uyo, Nigeria. I lead GDGOC University of Uyo, where I grew a dormant chapter of about
              500 members into a 900+ member community and built three recurring programs around a
              single flagship event.
            </p>
            <p className="about__text" data-reveal style={{ '--i': 2 }}>
              That work is not separate from engineering. I design the programs, write the copy,
              build the systems, brief the partners, and often take the stage. Alongside it, I've
              spent four years shipping Laravel, NestJS, React, and TypeScript into production
              across fintech, commerce, and Web3.
            </p>
            <p className="about__text" data-reveal style={{ '--i': 3 }}>
              My edge is translation: I can sit inside a codebase, understand the constraint, and
              turn it into documentation, a demo, a workshop, or a partnership that developers
              actually use. I care about adoption, not applause.
            </p>

            <div className="about__links" data-reveal style={{ '--i': 4 }}>
              <a href="https://github.com/dakeem05" target="_blank" rel="noreferrer" className="about__link">
                GitHub
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/edidiong-samuel-ng" target="_blank" rel="noreferrer" className="about__link">
                LinkedIn
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://gdg.community.dev/gdg-on-campus-university-of-uyo-uyo-nigeria/" target="_blank" rel="noreferrer" className="about__link">
                GDGOC
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
              <a href="mailto:edidiongsamuel14@gmail.com" className="about__link">
                Email
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <aside className="about__aside" data-reveal style={{ '--i': 2 }}>
            <div className="about__facts">
              {facts.map((f) => (
                <div className="about__fact" key={f.label}>
                  <span className="about__fact-label">{f.label}</span>
                  <span className="about__fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="about__practice">
          {practice.map((p, i) => (
            <article className="about__practice-item" key={p.title} data-reveal style={{ '--i': i }}>
              <span className="about__practice-index">{p.index}</span>
              <h3 className="about__practice-title">{p.title}</h3>
              <p className="about__practice-text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
