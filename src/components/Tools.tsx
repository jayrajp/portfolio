import { Code2, Figma, GitBranch, Terminal, Database, Package } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: <Code2 size={40} />,
      name: 'Docker',
      description: 'Container platform'
    },
    {
      icon: <GitBranch size={40} />,
      name: 'Kubernetes',
      description: 'Orchestration'
    },
    {
      icon: <Figma size={40} />,
      name: 'AWS',
      description: 'Cloud services'
    },
    {
      icon: <Terminal size={40} />,
      name: 'Jenkins',
      description: 'CI/CD automation'
    },
    {
      icon: <Database size={40} />,
      name: 'Prometheus',
      description: 'Monitoring'
    },
    {
      icon: <Package size={40} />,
      name: 'Grafana',
      description: 'Visualization'
    },
    {
      icon: <Code2 size={40} />,
      name: 'ArgoCD',
      description: 'GitOps'
    },
    {
      icon: <GitBranch size={40} />,
      name: 'Azure DevOps',
      description: 'DevOps platform'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use regularly in my development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
