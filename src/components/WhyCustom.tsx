const bad = [
  'Built for the average customer — not your specific workflow',
  'Recurring subscription costs that grow with your team',
  'Locked-in vendor; pricing can change anytime',
  'Customisation is limited or expensive to implement',
  'Your data lives on their servers, under their terms',
  'Manual integrations between 5+ disconnected tools',
  'Feature requests go into a public roadmap — maybe shipped in 2 years',
];

const good = [
  'Designed around how your business actually operates',
  'One-time build cost; you own it forever',
  'No vendor lock-in — the codebase is yours',
  'Every feature is built to your exact specification',
  'Full control over hosting, data, and access',
  'Everything talks to everything — one system, one source of truth',
  'New features shipped within days, not years',
];

export default function WhyCustom() {
  return (
    <section id="why-custom" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// Why custom software</div>
          <h2>Stop fitting your business into a box</h2>
          <p>The difference between software built for everyone and software built for you is the difference between renting and owning.</p>
        </div>
        <div className="compare-wrap">
          <div className="compare-col bad">
            <h4><span style={{ color: 'var(--red)' }}>✗</span> Off-the-shelf tools</h4>
            <ul>
              {bad.map(item => (
                <li key={item}>
                  <span className="icon" style={{ color: 'var(--red)' }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="compare-col good">
            <h4><span style={{ color: 'var(--teal)' }}>✓</span> Custom software by Jayraj</h4>
            <ul>
              {good.map(item => (
                <li key={item}>
                  <span className="icon" style={{ color: 'var(--teal)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
