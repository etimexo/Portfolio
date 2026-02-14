import { useState } from 'react';
import { ExternalLink, Github, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import type { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Bank Customer Churn Analysis & Prediction',
      description: 'Comprehensive analysis and machine learning model to predict customer churn in banking, helping identify at-risk customers and improve retention strategies.',
      long_description: 'This project dives deep into customer churn in the banking sector using a real-world dataset. It begins with thorough exploratory data analysis to uncover patterns in demographics, account activity, and product usage. Feature engineering and preprocessing are applied before training multiple classification models including Logistic Regression, Random Forest, and Gradient Boosting. The best-performing model is selected based on precision, recall, and F1-score — with a focus on identifying at-risk customers so that retention teams can intervene proactively.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      github_url: 'https://github.com/etimexo/Bank_customer_churn_predict/tree/main',
      report_url: 'https://medium.com/@elijahobisesan01/predicting-bank-customer-churn-a-comprehensive-guide-52b2627405a4 ',
      order_index: 1,
      created_at: new Date().toISOString(),
      image_url: import.meta.env.BASE_URL + 'images/bank_churn_image.png',
    },
    {
      id: '2',
      title: 'American Housing Analysis and Prediction',
      description: 'In-depth exploratory data analysis of the American housing market, uncovering trends, price factors, and regional variations in real estate.',
      long_description: 'This project explores the American housing market through comprehensive data analysis and predictive modeling. It examines key factors influencing property prices such as location, square footage, number of bedrooms, and neighborhood characteristics. Visualizations reveal regional price variations and seasonal trends. A predictive model is built using regression techniques to estimate property values, helping buyers and sellers make data-driven decisions in the real estate market.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Jupyter'],
      github_url: 'https://github.com/etimexo/American_housing',
      report_url: 'https://github.com/etimexo/American_housing',
      order_index: 2,
      created_at: new Date().toISOString(),
      image_url: import.meta.env.BASE_URL + 'images/housing.png',
    },
    {
      id: '3',
      title: 'Hotel Booking Analysis & Predictive Modeling',
      description: 'Analysis of hotel booking data with predictive models for cancellation rates, seasonal demand patterns, and revenue optimization insights.',
      long_description: 'This project analyzes hotel booking data to understand customer behavior and predict cancellations. It covers seasonal demand patterns, guest demographics, booking lead times, and special requests. Using classification models, the system predicts which bookings are likely to be cancelled, enabling hotel managers to optimize overbooking strategies and improve revenue. Key insights around average daily rates, market segments, and distribution channels provide actionable intelligence for hospitality businesses.',
      category: 'data_science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Seaborn'],
      github_url: 'https://github.com/etimexo/Hotel_booking_analysis',
      report_url: 'https://github.com/etimexo/Hotel_booking_analysis',
      order_index: 3,
      created_at: new Date().toISOString(),
      image_url: import.meta.env.BASE_URL + 'images/hotel.png',
    },
    {
      id: '4',
      title: 'O-list E-commerce SQL Analysis',
      description: 'Comprehensive SQL-based analysis of Brazilian e-commerce data, extracting business insights on sales performance, customer behavior, and logistics.',
      long_description: 'This project uses advanced SQL queries to analyze the Olist Brazilian e-commerce dataset. It covers end-to-end analysis including order trends, product category performance, customer segmentation, seller metrics, and delivery logistics. Complex joins, window functions, and aggregations are used to extract insights on revenue drivers, repeat purchase rates, and delivery time optimization. The findings provide actionable recommendations for improving marketplace performance and customer satisfaction.',
      category: 'data_science',
      technologies: ['SQL', 'PostgreSQL', 'Data Analysis', 'Business Intelligence'],
      github_url: 'https://github.com/etimexo/O-list_analysis_SQL',
      report_url: 'https://github.com/etimexo/O-list_analysis_SQL',
      order_index: 4,
      created_at: new Date().toISOString(),
      image_url: import.meta.env.BASE_URL + 'images/commerce.png',
    },
    {
      id: '5',
      title: 'Voice AI Agent',
      description: 'An intelligent voice AI agent reachable via a real phone number. It picks up calls, answers company enquiries, checks calendar availability in real time, and books appointments — all through natural conversation.',
      long_description: 'This voice AI agent is assigned a real phone number that anyone can dial. When a call comes in, the agent picks up and engages the caller in a natural, human-like conversation powered by advanced LLMs. It is trained on the company\'s knowledge base to accurately answer enquiries about services, pricing, and policies. The agent also integrates with Google Calendar in real time — it can check available slots, suggest times, and book appointments on the spot. Built with Vapi for voice capabilities and Make.com for workflow orchestration, it provides 24/7 phone support without human intervention.',
      category: 'ai_agents',
      technologies: ['Python', 'Vapi', 'OpenAI', 'Make.com', 'Google Calendar API'],
      github_url: '#',
      order_index: 5,
      created_at: new Date().toISOString(),
    },
    {
      id: '7',
      title: 'Multi-Platform AI Customer Support Agent',
      description: 'A versatile AI customer support agent that operates across WhatsApp, Messenger, Telegram, and website live chat. It handles enquiries, answers FAQs, and books calendar meetings — providing seamless support on every channel.',
      long_description: 'This multi-channel AI agent provides consistent, intelligent customer support across WhatsApp, Facebook Messenger, Telegram, and website live chat widgets. Regardless of the platform, customers get the same quality of interaction — the agent understands context, answers product and service questions, resolves common issues, and can schedule calendar meetings when a deeper conversation with a human is needed. Built with a unified backend, it ensures all conversations are logged and synced, giving businesses a single view of customer interactions across every touchpoint.',
      category: 'ai_agents',
      technologies: ['Python', 'OpenAI', 'Make.com', 'WhatsApp API', 'Telegram API', 'Google Calendar API'],
      github_url: '#',
      order_index: 7,
      created_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Email Classifier & Priority Notifier',
      description: 'An intelligent automation that monitors incoming emails, classifies them by urgency using AI, and instantly sends a Slack notification for high-priority messages — including a summary, the sender, and a recommended response time.',
      long_description: 'This automation continuously watches your inbox for new emails. When one arrives, it uses AI to analyze the content and classify it by urgency — from low to critical. For high-priority emails that demand a quick response, it immediately fires a Slack notification that includes a concise summary of the email, who sent it, and a recommendation on how fast it should be addressed. This ensures that important messages never get buried in a crowded inbox, and teams can respond to time-sensitive communications without constantly checking their email.',
      category: 'workflow_automation',
      technologies: ['Make.com', 'OpenAI', 'Gmail API', 'Slack API'],
      github_url: '#',
      order_index: 6,
      created_at: new Date().toISOString(),
    },
    {
      id: '8',
      title: 'Google Sheets Auto-Emailer',
      description: 'An automation that watches a Google Sheet for new rows and automatically sends a personalized email to each new entry — perfect for onboarding new sign-ups, customers, or leads.',
      long_description: 'This workflow automation monitors a Google Sheet in real time for new row entries. As soon as a new row is added — for example, when a customer signs up for a product, fills out a form, or is manually added — the automation triggers and sends a personalized email to the address found in that row. The email content can be customized with dynamic fields pulled from the sheet (name, product, etc.). This is ideal for welcome emails, sign-up confirmations, onboarding sequences, or any scenario where new entries need an immediate email follow-up without manual effort.',
      category: 'workflow_automation',
      technologies: ['Make.com', 'Google Sheets API', 'Gmail API'],
      github_url: '#',
      order_index: 8,
      created_at: new Date().toISOString(),
    },
    {
      id: '9',
      title: 'AI Customer Support & Lead Generation Agent',
      description: 'An AI-powered agent that handles customer support conversations, captures lead information, logs it to Airtable, and automatically sends a follow-up email outlining next steps.',
      long_description: 'This agent serves a dual purpose: customer support and lead generation. It converses naturally with website visitors or clients, answering their questions and resolving issues in real time. When a potential lead is identified, the agent collects key customer information — name, email, company, and specific needs — through the conversation. This data is automatically logged into an Airtable sheet for the sales team to review. Immediately after logging, the system triggers an automated email to the new lead with personalized next steps, ensuring no opportunity falls through the cracks. The result is a seamless pipeline from first contact to qualified lead.',
      category: 'ai_agents',
      technologies: ['Python', 'OpenAI', 'Make.com', 'Airtable API', 'Gmail API'],
      github_url: '#',
      order_index: 9,
      created_at: new Date().toISOString(),
    },
    {
      id: '10',
      title: 'AI Lead Gen & Auto-Email Workflow',
      description: 'An automated workflow combining AI-driven lead capture with Airtable logging and instant follow-up emails — turning conversations into qualified leads on autopilot.',
      long_description: 'This automation workflow is the backend engine behind the AI Customer Support & Lead Generation Agent. When the AI agent captures a new lead during a conversation, this workflow takes over: it formats and logs all captured customer data into an organized Airtable base, categorizes the lead by interest or urgency, and immediately dispatches a personalized follow-up email to the prospect outlining next steps, relevant resources, or a meeting booking link. The entire pipeline runs without manual intervention, ensuring rapid response times and consistent lead nurturing.',
      category: 'workflow_automation',
      technologies: ['Make.com', 'Airtable API', 'Gmail API', 'OpenAI'],
      github_url: '#',
      order_index: 10,
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

                    <p className="text-slate-600 mb-2">
                      {expandedProject === project.id ? (
                        <>
                          {project.long_description || project.description}
                        </>
                      ) : (
                        <span className="line-clamp-3">{project.description}</span>
                      )}
                    </p>
                    {project.long_description && (
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-3"
                      >
                        {expandedProject === project.id ? (
                          <>
                            Show less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read more <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}

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
