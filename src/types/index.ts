export interface Project {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  category: 'data_science' | 'ai_agents' | 'workflow_automation';
  technologies: string[];
  image_url?: string;
  project_url?: string;
  github_url?: string;
  report_url?: string;
  order_index: number;
  created_at: string;
}
