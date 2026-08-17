export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="sec-eyebrow" style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          // Let's talk
        </div>
        <h2>Have a problem? Let's scope the solution — free.</h2>
        <p>
          A 20-minute call is all it takes to get a clear picture of what it'd take to build.
          No pitch decks, no obligation — just an honest conversation about your problem.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="mailto:jayraj.semicolon@gmail.com">
            Email me →
          </a>
          <a className="btn btn-ghost" href="tel:+918200406834">
            Call / WhatsApp
          </a>
        </div>
        <div className="contact-info">
          <a href="mailto:jayraj.semicolon@gmail.com">jayraj.semicolon@gmail.com</a>
          <span style={{ color: 'var(--line)' }}>·</span>
          <a href="tel:+918200406834">+91 82004 06834</a>
          <span style={{ color: 'var(--line)' }}>·</span>
          <span>Gujarat, India · Remote-ready</span>
        </div>
      </div>
    </section>
  );
}
