import { Brain, Workflow, LineChart } from 'lucide-react';

export default function About() {
  const expertise = [
    {
      icon: LineChart,
      title: 'Data Science',
      description: 'Extracting meaningful insights from complex datasets using statistical analysis, machine learning, and data visualization techniques.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Designing and developing intelligent agents that can reason, learn, and interact autonomously to solve complex problems.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamlining business processes and eliminating repetitive tasks through intelligent automation and integration solutions.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver impactful solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`group p-8 ${item.bgColor} border ${item.borderColor} rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
