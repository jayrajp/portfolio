const plans = [
  {
    title: 'Project-Based',
    featured: false,
    desc: 'Fixed scope, fixed timeline. You know exactly what you\'re getting and when it\'ll be ready.',
    items: [
      'Full scoping session included',
      'Milestone-based delivery',
      'Weekly progress demos',
      '30-day post-launch support',
      'Full codebase handover',
    ],
    cta: 'Get a quote →',
    ctaStyle: 'ghost',
  },
  {
    title: 'Dedicated Retainer',
    featured: true,
    desc: 'I\'m your embedded engineer — building new features, maintaining infrastructure, and shipping on demand.',
    items: [
      'Ongoing development & support',
      'Priority response time',
      'Infrastructure monitoring',
      'Monthly strategy review',
      'Scales up or down monthly',
    ],
    cta: 'Let\'s talk →',
    ctaStyle: 'primary',
  },
  {
    title: 'Technical Audit',
    featured: false,
    desc: 'Already have a product or team? I\'ll assess your architecture, DevOps, and codebase — then give you a clear remediation plan.',
    items: [
      'Architecture review',
      'Security & performance audit',
      'DevOps pipeline assessment',
      'Written report + roadmap',
      '1-hour walkthrough call',
    ],
    cta: 'Book an audit →',
    ctaStyle: 'ghost',
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// How to work with me</div>
          <h2>Flexible engagement models</h2>
          <p>Whether you need a full product built, a specific feature shipped, or ongoing technical support — there's a model that fits.</p>
        </div>
        <div className="eng-grid">
          {plans.map(p => (
            <div className={`eng-card${p.featured ? ' featured' : ''}`} key={p.title}>
              {p.featured && <span className="featured-label">Most popular</span>}
              <h3>{p.title}</h3>
              <p className="eng-desc">{p.desc}</p>
              <ul>
                {p.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <a
                href="#contact"
                className={`eng-cta ${p.ctaStyle === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
                style={
                  p.ctaStyle === 'primary'
                    ? { background: 'var(--teal)', color: '#08151A' }
                    : { border: '1px solid var(--line)', color: 'var(--text-dim)' }
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
