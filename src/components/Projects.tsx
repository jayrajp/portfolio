const projects = [
  {
    title: 'Provibiz — Cloud ERP',
    badge: 'live' as const,
    desc: 'A cloud-based ERP streamlining Finance, HR, Sales, and Operations with real-time dashboards and automated workflows, built on a microservices architecture for a growing manufacturing company.',
    metrics: [
      { val: 'MERN', label: '+ K8S / DOCKER' },
      { val: '4', label: 'DEPARTMENTS AUTOMATED' },
      { val: '60%', label: 'TIME SAVED ON REPORTS' },
    ],
    link: 'http://provibiz.com/',
  },
  {
    title: 'Multi-Tenant SaaS — CRM/ERP + AI',
    badge: 'building' as const,
    desc: 'Full multi-tenant SaaS covering CRM, ERP, inventory, billing, and HR — with RAG-based AI for intelligent document processing, smart search, and automation across tenant workflows.',
    metrics: [
      { val: 'RAG', label: '+ LLM APIS' },
      { val: 'Multi', label: 'TENANT + RBAC' },
    ],
    link: null,
  },
  {
    title: 'Unicorn UI — Design Marketplace',
    badge: 'live' as const,
    desc: 'A subscription-based marketplace for buying and selling digital design assets — with role-based user and admin panels, asset management, and live payment gateway integration.',
    metrics: [
      { val: 'React', label: '+ TAILWIND' },
      { val: 'Live', label: 'PAYMENT GATEWAY' },
    ],
    link: 'https://www.unicornui.com/',
  },
  {
    title: 'DogDash — Ride & Delivery App',
    badge: 'shipped' as const,
    desc: 'Mobile app connecting customers and drivers for specialised pet transport — live GPS tracking, real-time ride requests, driver assignment logic, and automated payment settlement.',
    metrics: [
      { val: 'React Native', label: '+ NODE.JS' },
      { val: 'Live', label: 'GPS TRACKING' },
    ],
    link: 'https://apps.apple.com/in/app/dogdash-driver/id1491146041',
  },
];

export default function Projects() {
  return (
    <section id="work" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// Recent deploys</div>
          <h2>What's shipped and running in production</h2>
          <p>Not demos or prototypes — live systems handling real business operations.</p>
        </div>
        <div className="deck">
          {projects.map(p => (
            <div className="card" key={p.title}>
              <div className="card-top">
                <h3>{p.title}</h3>
                <span className={`badge ${p.badge}`}>{p.badge}</span>
              </div>
              <p>{p.desc}</p>
              <div className="card-metrics">
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <b>{m.val}</b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              {p.link && (
                <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  ↗ View live
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
