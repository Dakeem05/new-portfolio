import React from 'react'
import useReveal from '../hooks/useReveal'
import SectionHead from '../components/SectionHead'
import './Education.css'

const certifications = [
  { title: 'AI Fundamentals & AI Literacy', issuer: 'IBM SkillsBuild' },
  { title: 'Blockchain Development', issuer: 'Alchemy University' },
  { title: 'Smart Contract Security', issuer: 'Cyfrin Updraft' },
  { title: 'API Student Expert', issuer: 'Postman' },
]

const learning = [
  { label: 'Python', note: 'Scripting, data structures, ML fundamentals' },
  { label: 'Go', note: 'Concurrency, services, CLI tooling' },
  { label: 'Advanced Solidity', note: 'Security patterns, gas optimization' },
  { label: 'System design', note: 'Distributed systems, scalability' },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <SectionHead
          index="07"
          label="Education"
          title={<>Foundations and <em>continued study</em>.</>}
          note="A degree in progress, four certifications, and a standing habit of learning in public."
        />

        <div className="edu__grid">
          <div className="edu__degree" data-reveal>
            <span className="mono edu__kicker">Degree</span>
            <h3 className="edu__degree-title">BSc Computer Science</h3>
            <p className="edu__school">University of Uyo · Uyo, Nigeria</p>

            <div className="edu__status">
              <span className="edu__status-dot" aria-hidden="true" />
              In progress
            </div>

            <p className="edu__desc">
              Coursework across software engineering, systems and data — taken alongside leading
              GDGOC University of Uyo and shipping production software.
            </p>
          </div>

          <div className="edu__certs" data-reveal style={{ '--i': 1 }}>
            <span className="mono edu__kicker">Certifications</span>
            <ul className="edu__cert-list">
              {certifications.map((c, i) => (
                <li className="edu__cert" key={c.title}>
                  <span className="edu__cert-index">0{i + 1}</span>
                  <span className="edu__cert-body">
                    <span className="edu__cert-title">{c.title}</span>
                    <span className="edu__cert-issuer">{c.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="edu__learning" data-reveal>
          <span className="mono edu__learning-label">Currently learning</span>
          <div className="edu__learning-list">
            {learning.map((l, i) => (
              <div className="edu__learning-item" key={l.label}>
                <span className="edu__learning-index">0{i + 1}</span>
                <span className="edu__learning-title">{l.label}</span>
                <span className="edu__learning-note">{l.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
