import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-400 mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-gradient">
            Elijah Obisesan
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-slate-200 mb-6">
            Data Scientist & AI Engineer
          </p>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Transforming data into insights and building intelligent automation solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
              Data Science
            </span>
            <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300">
              AI Agents
            </span>
            <span className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300">
              Workflow Automation
            </span>
          </div>
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
