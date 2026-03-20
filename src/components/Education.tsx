import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Dharamsinh Desai University',
      location: 'Gujarat, India',
      period: '2016 - 2020',
      score: 'CGPA: 7.5+',
      description: 'Built a strong foundation in core Computer Science fundamentals, including Data Structures & Algorithms (DSA), Object-Oriented Programming, and Database Management. Gained hands-on experience with multiple programming languages such as C, C++, Java, and Python, along with specialized knowledge in software development and modern technologies.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                    <span className="font-semibold">{edu.institution}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <Calendar size={18} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
