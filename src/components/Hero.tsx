import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Jayraj Mehta</span>
            </h1>
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 font-semibold">6+ Years of Experience</span>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Full-Stack Developer | MERN & MEAN | Microservices | DevOps
            </p>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Detail-oriented Full-Stack Developer with expertise in MERN and MEAN stacks. Experienced in designing scalable systems using microservices architecture and DevOps practices like Docker and Kubernetes.
            </p>

            <div className="flex items-center gap-4 text-gray-400">
              <MapPin size={20} />
              <span>Gujarat, India</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/jayrajp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/jayraj-mehta-6bb311199?utm_source=share_via&utm_content=profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&to=jayraj.semicolon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/portfolio/jayraj.jpeg"
                  alt="Jayraj Mehta"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
