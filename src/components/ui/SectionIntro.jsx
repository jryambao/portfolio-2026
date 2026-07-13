export function SectionIntro({ label, title, introduction, titleId, className = '' }) {
  return (
    <header className={`section-intro ${className}`.trim()}>
      <p className="section-label">{label}</p>
      <h2 id={titleId}>{title}</h2>
      {introduction ? <p className="section-deck">{introduction}</p> : null}
    </header>
  );
}
