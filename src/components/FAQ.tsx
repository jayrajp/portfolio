const faqs = [
  {
    q: 'How much does a custom software project cost?',
    a: 'It depends on the scope. A focused internal tool or MVP typically starts around $3,000–$8,000 USD. A full ERP or multi-tenant SaaS platform ranges higher. The free discovery call gives you a realistic estimate with no obligation. I\'ll never quote you a number before I understand the problem.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Simple web tools and dashboards: 3–6 weeks. Full CRM/ERP platforms: 2–4 months. Mobile apps: 6–12 weeks. I ship in weekly increments, so you\'re seeing real progress — not waiting months for a big reveal.',
  },
  {
    q: "I'm not technical. How much do I need to understand?",
    a: "Nothing technical required on your end. You describe the business problem — I handle the architecture, code, and infrastructure. During the build, I communicate in plain language via weekly demos and updates. You only need to tell me what your business needs.",
  },
  {
    q: 'Who owns the code and data at the end?',
    a: "You do. The full codebase is transferred to you at project completion. I can also set up your own infrastructure so your data never touches a third party's servers. You're not locked into working with me forever — though most clients choose to continue.",
  },
  {
    q: 'What happens after the project is launched?',
    a: "Every project includes 30 days of post-launch support. After that, you can continue on a monthly retainer for ongoing development, monitoring, and support — or take the codebase and maintain it yourself. The choice is yours.",
  },
  {
    q: 'Can you work with my existing team or codebase?',
    a: "Absolutely. I regularly join existing teams as a senior engineer or technical lead, review existing codebases, and build on top of what's already there. I can also perform a technical audit first to assess what's worth keeping.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">// FAQ</div>
          <h2>Questions before committing</h2>
        </div>
        <div className="faq-list">
          {faqs.map(f => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
