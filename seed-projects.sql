-- Sample projects to get you started
-- You can run these INSERT statements directly in the Supabase SQL Editor
-- Or modify them with your own projects

INSERT INTO projects (title, description, category, technologies, image_url, github_url, order_index) VALUES
(
  'Customer Churn Prediction Model',
  'Developed a machine learning model to predict customer churn with 92% accuracy using gradient boosting. Implemented feature engineering pipelines and model monitoring dashboard.',
  'data_science',
  ARRAY['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Tableau'],
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  'https://github.com/yourusername/churn-prediction',
  1
),
(
  'Intelligent Research Assistant',
  'Built an AI agent that autonomously searches, analyzes, and synthesizes research papers. Uses RAG architecture with semantic search capabilities.',
  'ai_agents',
  ARRAY['LangChain', 'OpenAI', 'Pinecone', 'Python', 'FastAPI'],
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  'https://github.com/yourusername/research-assistant',
  2
),
(
  'Marketing Campaign Automation',
  'Designed and implemented an end-to-end automation system for multi-channel marketing campaigns. Reduced manual work by 80% and improved campaign performance.',
  'workflow_automation',
  ARRAY['Make.com', 'Zapier', 'Python', 'Airtable', 'SendGrid'],
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
  'https://github.com/yourusername/campaign-automation',
  3
),
(
  'Sales Forecasting Dashboard',
  'Created an interactive dashboard for sales forecasting using time series analysis. Integrated real-time data pipelines and automated reporting.',
  'data_science',
  ARRAY['Python', 'Prophet', 'Streamlit', 'PostgreSQL', 'Docker'],
  'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
  'https://github.com/yourusername/sales-forecast',
  4
),
(
  'Multi-Agent Task Orchestrator',
  'Developed a system of specialized AI agents that collaborate to break down and solve complex tasks. Implements agent communication protocols and task delegation.',
  'ai_agents',
  ARRAY['AutoGPT', 'LangGraph', 'Redis', 'Python', 'React'],
  'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
  'https://github.com/yourusername/task-orchestrator',
  5
),
(
  'Document Processing Pipeline',
  'Automated document processing system that extracts, classifies, and routes documents. Processes 10,000+ documents daily with 98% accuracy.',
  'workflow_automation',
  ARRAY['Python', 'Tesseract', 'AWS Lambda', 'S3', 'Apache Airflow'],
  'https://images.pexels.com/photos/7679462/pexels-photo-7679462.jpeg',
  'https://github.com/yourusername/doc-pipeline',
  6
);
