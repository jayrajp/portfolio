const stages = [
  {
    num: 'STAGE 01',
    title: 'Discover',
    desc: 'Free 20-min call to understand the real business problem — not just the feature list.',
    details: ['Problem definition', 'Scope & feasibility'],
  },
  {
    num: 'STAGE 02',
    title: 'Architect',
    desc: 'System design: data model, tech stack, third-party integrations, and a scaling plan.',
    details: ['Technical blueprint', 'Timeline & cost'],
  },
  {
    num: 'STAGE 03',
    title: 'Build',
    desc: 'Working software shipped weekly — you see progress at every step, not a big reveal at the end.',
    details: ['Weekly demos', 'Feedback loops'],
  },
  {
    num: 'STAGE 04',
    title: 'Deploy',
    desc: 'CI/CD pipelines, containerised deploys, zero-downtime releases. Goes live on your infrastructure.',
    details: ['Automated deployments', 'Zero downtime'],
  },
  {
    num: 'STAGE 05',
    title: 'Scale',
    desc: 'Monitoring, alerting, and ongoing support as real usage grows. You\'re never left with a black box.',
    details: ['Uptime monitoring', 'Ongoing retainer'],
  },
];

export default function Process() {
  return (
    <section id="process" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// How it works</div>
          <h2>From your problem to a live product — no handoffs</h2>
          <p>No project managers acting as middlemen. The same person who understands your business writes the code, sets up the servers, and keeps it running.</p>
        </div>
        <div className="pipeline">
          {stages.map(s => (
            <div className="pipe-stage" key={s.num}>
              <div className="pipe-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="pipe-detail">
                {s.details.map(d => <span key={d}>→ {d}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
