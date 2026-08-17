const industries = [
  { icon: '🏭', name: 'Manufacturing', desc: 'ERP, inventory & production tracking' },
  { icon: '🛒', name: 'E-Commerce', desc: 'Marketplaces, order & vendor management' },
  { icon: '🏥', name: 'Healthcare', desc: 'Patient portals, scheduling & billing' },
  { icon: '🏗️', name: 'Construction', desc: 'Project tracking, procurement & HR' },
  { icon: '🎓', name: 'EdTech', desc: 'LMS platforms, assessments & portals' },
  { icon: '🚚', name: 'Logistics', desc: 'Fleet tracking, dispatch & routing' },
  { icon: '💼', name: 'Professional Services', desc: 'CRM, invoicing & client portals' },
  { icon: '🏦', name: 'Finance & Fintech', desc: 'Dashboards, reporting & integrations' },
];

export default function Industries() {
  return (
    <section id="industries" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// Industries served</div>
          <h2>Built for businesses across sectors</h2>
          <p>Every industry has its own operational quirks. Custom software accounts for them — no compromise.</p>
        </div>
        <div className="industry-grid">
          {industries.map(i => (
            <div className="industry-card" key={i.name}>
              <div className="ind-icon">{i.icon}</div>
              <h4>{i.name}</h4>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
