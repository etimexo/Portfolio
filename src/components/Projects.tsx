import { useState } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import type { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Bank Customer Churn Analysis & Prediction',
      description: 'Comprehensive analysis and machine learning model to predict customer churn in banking, helping identify at-risk customers and improve retention strategies.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      github_url: 'https://github.com/etimexo/Bank_customer_churn_predict/tree/main',
      report_url: 'https://medium.com/@elijahobisesan01/predicting-bank-customer-churn-a-comprehensive-guide-52b2627405a4 ',
      order_index: 1,
      created_at: new Date().toISOString(),
      image_url: 'images/bank_churn_image.png',
    },
    {
      id: '2',
      title: 'American Housing Analysis and Prediction',
      description: 'In-depth exploratory data analysis of the American housing market, uncovering trends, price factors, and regional variations in real estate.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Jupyter'],
      github_url: 'https://github.com/etimexo/American_housing',
      report_url: 'https://github.com/etimexo/American_housing',
      order_index: 2,
      created_at: new Date().toISOString(),
      image_url: 'images/housing.png',
    },
    {
      id: '3',
      title: 'Hotel Booking Analysis & Predictive Modeling',
      description: 'Analysis of hotel booking data with predictive models for cancellation rates, seasonal demand patterns, and revenue optimization insights.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Seaborn'],
      github_url: 'https://github.com/etimexo/Hotel_booking_analysis',
      report_url: 'https://github.com/etimexo/Hotel_booking_analysis',
      order_index: 3,
      created_at: new Date().toISOString(),
      image_url: 'images/hotel.png',
    },
    {
      id: '4',
      title: 'O-list E-commerce SQL Analysis',
      description: 'Comprehensive SQL-based analysis of Brazilian e-commerce data, extracting business insights on sales performance, customer behavior, and logistics.',
      category: 'data_science',
      technologies: ['SQL', 'PostgreSQL', 'Data Analysis', 'Business Intelligence'],
      github_url: 'https://github.com/etimexo/O-list_analysis_SQL',
      report_url: 'https://github.com/etimexo/O-list_analysis_SQL',
      order_index: 4,
      created_at: new Date().toISOString(),
      image_url: 'images/commerce.png',
    },
    {
      id: '5',
      title: 'AI Customer Support Agent',
      description: 'Intelligent conversational agent powered by LLMs for handling customer inquiries with context awareness.',
      category: 'ai_agents',
      technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
      github_url: '#',
      order_index: 5,
      created_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Document Processing Pipeline',
      description: 'Automated workflow for extracting, processing, and routing documents using OCR and NLP techniques.',
      category: 'workflow_automation',
      technologies: ['Python', 'Tesseract', 'spaCy', 'Airflow'],
      github_url: '#',
      order_index: 6,
      created_at: new Date().toISOString(),
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data_science', label: 'Data Science' },
    { id: 'ai_agents', label: 'AI Agents' },
    { id: 'workflow_automation', label: 'Automation' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data_science':
        return 'bg-blue-500/20 text-blue-700 border-blue-500/30';
      case 'ai_agents':
        return 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30';
      case 'workflow_automation':
        return 'bg-violet-500/20 text-violet-700 border-violet-500/30';
      default:
        return 'bg-slate-500/20 text-slate-700 border-slate-500/30';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A selection of projects showcasing my work in data science, AI, and automation
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-100 to-emerald-50">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400">Image coming soon</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900 transition-colors"
                            title="View Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.report_url && (
                          <a
                            href={project.report_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-blue-600 transition-colors"
                            title="View Report"
                          >
                            <FileText className="w-5 h-5" />
                          </a>
                        )}
                        {project.project_url && (
                          <a
                            href={project.project_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-emerald-600 transition-colors"
                            title="View Project"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <span className={`inline-block px-3 py-1 text-xs border rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
