import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/jayrajp', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/jayraj-mehta-6bb311199?utm_source=share_via&utm_content=profile', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'https://mail.google.com/mail/?view=cm&to=jayraj.semicolon@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Jayraj Mehta
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
