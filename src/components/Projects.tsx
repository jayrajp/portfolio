import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Unicorn UI',
      description: 'A React-based design marketplace platform supporting a subscription model for buying and selling digital assets. Built user and admin panels, integrated secure payment gateways, and implemented backend APIs for smooth transactions. Delivered a scalable and responsive solution enhancing platform usability and supporting designer community growth.',
      image: '/portfolio/unicorn.png',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Storybook', 'Payment Gateway'],
      demo: 'https://www.unicornui.com/'
    },
    {
      title: 'Provibiz ERP',
      description: 'A comprehensive cloud-based ERP solution designed to streamline business operations, enhance productivity, and drive growth. Features centralized data management, real-time analytics dashboards, automated workflows across Finance, HR, Sales, and Operations departments, with industry-leading security protocols and customizable modules for modern businesses.',
      image: '/portfolio/provibiz.png',
      tags: ['MERN', 'Microservices', 'Docker', 'Kubernetes', 'Cloud', 'ERP'],
      demo: 'http://provibiz.com/'
    },
    {
      title: 'DogDash',
      description: 'A mobile app connecting customers and drivers for safe dog transport, featuring ride request, accept, and live tracking functionality. Integrated secure payment flow to automatically deduct from customers and credit drivers upon successful delivery. Delivered a smooth and reliable user experience increasing trust and platform adoption.',
      image: '/portfolio/dogdash.png',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Live Tracking', 'Payment Gateway'],
      demo: 'https://apps.apple.com/in/app/dogdash-driver/id1491146041'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
