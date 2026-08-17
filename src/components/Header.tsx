import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#problem', label: 'Problem' },
    { href: '#process', label: 'Process' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#engagement', label: 'Engagement' },
  ];

  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="pf-nav">
      <div className="wrap">
        <div className="logo">
          <span className="logo-dot" />
          jayraj.mehta
        </div>

        <div className="navlinks">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={e => scroll(e, item.href)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact" onClick={e => scroll(e, '#contact')}>
          Book a free call
        </a>

        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
          className="md-menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', padding: '16px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={e => scroll(e, item.href)} style={{ color: 'var(--text-dim)', fontSize: 14 }}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={e => scroll(e, '#contact')} style={{ color: 'var(--teal)', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
            Book a free call →
          </a>
        </div>
      )}
    </nav>
  );
}
