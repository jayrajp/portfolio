import { Code, Cog, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'MERN & MEAN stack expertise with modern web technologies'
    },
    {
      icon: <Cog size={32} />,
      title: 'Microservices',
      description: 'Designing scalable systems with microservices architecture'
    },
    {
      icon: <Zap size={32} />,
      title: 'DevOps & Cloud',
      description: 'Docker, Kubernetes, CI/CD pipelines, and cloud deployment'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Effective collaboration with cross-functional teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in-up">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a detail-oriented Full-Stack Developer with expertise in MERN and MEAN stacks. Experienced in designing scalable systems using microservices architecture and DevOps practices like Docker and Kubernetes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate about building robust, high-performance applications and exploring cutting-edge technologies. I'm committed to continuous learning and delivering excellence in every project. I thrive in collaborative environments where innovation meets practical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
