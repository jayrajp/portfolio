export default function Hero() {
  return (
    <section className="hero-section wrap" style={{ borderTop: 'none' }}>
      <div className="term">
        <div className="term-bar">
          <span className="term-dot" /><span className="term-dot" /><span className="term-dot" />
        </div>
        <div className="term-body">
          <span className="prompt">$ </span>diagnose --company="your business"<br />
          <span className="ok">✓ </span>Problem found: software built for everyone ≠ built for{' '}
          <b style={{ color: 'var(--text)' }}>you</b><br />
          <span className="prompt">$ </span>build --scope=custom --owner=full-stack --deploy=production<br />
          <span className="ok">✓ </span>Shipping your solution...<span className="cursor" />
        </div>
      </div>

      <div className="hero-badge">Available for new projects · Gujarat, India · Remote-ready</div>

      <h1 className="hero-title">
        Your business deserves software{' '}
        <span className="accent">built for it</span> —<br />
        not adapted around it.
      </h1>

      <p className="hero-sub">
        Off-the-shelf tools force your business to fit their mould. I build software that fits yours
        — custom CRMs, ERPs, SaaS platforms, and AI systems, from design to live deployment.
        One engineer, full ownership.
      </p>

      <div className="hero-ctas">
        <a className="btn btn-primary" href="#contact">Book a free 20-min call →</a>
        <a className="btn btn-ghost" href="#work">See past work</a>
      </div>

      <div className="hero-proof">
        {[
          '6+ years, full-stack & DevOps',
          'End-to-end: architecture → live product',
          'Production-grade DevOps included',
          '99.9% uptime across deployments',
        ].map(text => (
          <div key={text} className="proof-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {text}
          </div>
        ))}
      </div>

      <div className="stat-row">
        {[
          { val: '6+', label: 'YRS EXPERIENCE' },
          { val: '99.9%', label: 'UPTIME DELIVERED' },
          { val: '75%', label: 'FASTER DEPLOYMENTS' },
          { val: '15+', label: 'CLIENTS SHIPPED' },
          { val: '0', label: 'MISSED DEADLINES' },
        ].map(s => (
          <div className="stat" key={s.label}>
            <b>{s.val}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
