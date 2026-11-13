import React from 'react'

export default function SectionHead({ index, label, title, note }) {
  return (
    <header className="section-head" data-reveal>
      <div className="section-head__meta">
        <span className="section-head__index">{index}</span>
        <span className="section-head__label">{label}</span>
      </div>
      <div className="section-head__main">
        <h2 className="section-title">{title}</h2>
        {note && <p className="section-head__note">{note}</p>}
      </div>
    </header>
  )
}
