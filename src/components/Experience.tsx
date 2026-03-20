import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Triveni Global Software Services LLP',
      location: 'Gujarat, India',
      period: '2024 - Present',
      type: 'Full-time',
      responsibilities: [
        'Designing and implementing scalable microservices architecture',
        'Developing CI/CD pipelines using Jenkins and ArgoCD',
        'Managing containerized applications with Docker and Kubernetes',
        'Implementing DevOps practices and monitoring with Prometheus and Grafana',
        'Collaborating with teams to ensure production reliability and performance'
      ]
    },
    {
      title: 'MERN Stack Developer',
      company: 'Semicolon Solution',
      location: 'Gujarat, India',
      period: '2021 - 2023',
      type: 'Full-time',
      responsibilities: [
        'Built full-stack applications using MongoDB, Express, React, and Node.js',
        'Integrated payment gateways and third-party services',
        'Developed RESTful APIs and optimized database queries',
        'Implemented state management using Redux',
        'Collaborated with UI/UX team to create responsive interfaces'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'DI Solution',
      location: 'Gujarat, India',
      period: '2020',
      type: 'Full-time',
      responsibilities: [
        'Developed frontend components using HTML, CSS, and JavaScript',
        'Worked on backend development with Node.js and Express',
        'Participated in code reviews and agile development sprints',
        'Fixed bugs and improved application performance',
        'Learned and implemented best practices in software development'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ml-16 md:ml-0">
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <Briefcase className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">▪</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
