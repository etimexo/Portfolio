/*
  # Create projects table for portfolio

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `category` (text) - Category: data_science, ai_agents, or workflow_automation
      - `technologies` (text[]) - Array of technologies used
      - `image_url` (text, optional) - URL to project image
      - `project_url` (text, optional) - Live demo or project URL
      - `github_url` (text, optional) - GitHub repository URL
      - `order_index` (integer) - For custom ordering of projects
      - `created_at` (timestamptz) - Timestamp when project was added
  
  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin access for managing projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('data_science', 'ai_agents', 'workflow_automation')),
  technologies text[] DEFAULT '{}',
  image_url text,
  project_url text,
  github_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);