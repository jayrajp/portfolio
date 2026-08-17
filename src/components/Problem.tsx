const pains = [
  {
    icon: '🔧',
    title: '"We\'re paying for 5 tools that don\'t talk to each other"',
    body: 'Your team manually copies data between Notion, Excel, WhatsApp and a CRM built for a different industry. Every day.',
    resolve: 'One unified platform, built around your workflow',
  },
  {
    icon: '📊',
    title: '"I can\'t get a real-time view of my business"',
    body: 'Reports are delayed, manually compiled, or wrong. You\'re making decisions based on last week\'s numbers.',
    resolve: 'Live dashboards that reflect today\'s reality',
  },
  {
    icon: '🐌',
    title: '"Our processes don\'t scale — more orders means more chaos"',
    body: 'Growth exposes every manual process. What worked at 10 clients breaks at 100. You need systems, not spreadsheets.',
    resolve: 'Automated workflows that scale with you',
  },
  {
    icon: '💸',
    title: '"Off-the-shelf SaaS subscriptions keep adding up"',
    body: 'You\'re paying thousands per year for tools where you use 20% of the features — and they still don\'t do exactly what you need.',
    resolve: 'Owned software that pays for itself',
  },
  {
    icon: '🔒',
    title: '"We can\'t control our own data"',
    body: 'Your most sensitive business data lives on someone else\'s servers, with someone else\'s terms of service and uptime SLA.',
    resolve: 'Your data, your infrastructure, your rules',
  },
  {
    icon: '🤝',
    title: '"Development agencies hand off and disappear"',
    body: 'You\'ve been burned before — big teams, long timelines, poor communication, and a product that needed rebuilding six months later.',
    resolve: 'Single point of contact, full accountability',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// The problem</div>
          <h2>Generic software is quietly costing you</h2>
          <p>Every workaround, every manual export, every tool your team has outgrown — that's money left on the table. Recognise any of these?</p>
        </div>
        <div className="pain-grid">
          {pains.map(p => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
              <div className="resolve">→ {p.resolve}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
