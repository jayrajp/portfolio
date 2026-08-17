const services = [
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 4v5" />
      </svg>
    ),
    title: 'Custom Web Platforms',
    desc: 'CRMs, ERPs, internal tools, and SaaS products built exactly around how your company works — not how a vendor thinks you work.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
      </svg>
    ),
    title: 'DevOps & Infrastructure',
    desc: 'Docker/Kubernetes migrations, CI/CD pipelines, monitoring, and auto-scaling — so deployments stop being a manual, nerve-wracking event.',
    tags: ['Docker', 'K8s', 'Jenkins', 'ArgoCD'],
  },
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'LLM-powered features grounded in your own data — smart support bots, intelligent search, internal copilots, and automated document workflows.',
    tags: ['RAG', 'Vector Search', 'LLM APIs'],
  },
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Legacy Modernisation',
    desc: 'Old software slowing you down? I migrate legacy systems to modern architectures — preserving your business logic while eliminating the technical debt.',
    tags: ['Microservices', 'API-first', 'Migration'],
  },
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    title: 'Mobile Applications',
    desc: 'Cross-platform mobile apps for your team or customers — with real-time data, offline support, and live GPS or push notification features.',
    tags: ['React Native', 'Node.js', 'Firebase'],
  },
  {
    icon: (
      <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: 'Integrations & APIs',
    desc: 'Connect your existing tools — payments, accounting, logistics, WhatsApp, email — into a single unified backend so data flows automatically.',
    tags: ['REST APIs', 'Webhooks', '3rd Party'],
  },
];

export default function Services() {
  return (
    <section id="services" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// What I build</div>
          <h2>Custom software, matched to the problem</h2>
          <p>Not templates or starter kits — purpose-built systems designed around your specific business requirements.</p>
        </div>
        <div className="grid3">
          {services.map(s => (
            <div className="svc" key={s.title}>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
