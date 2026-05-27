export function ChipList({ items, compact = false }) {
  return (
    <div className={`chip-list ${compact ? 'compact' : ''}`.trim()}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
