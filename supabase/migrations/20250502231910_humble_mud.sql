/*
  # Create admin tables for content management

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `role` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `content`
      - `id` (uuid, primary key)
      - `type` (text)
      - `slug` (text, unique)
      - `title` (text)
      - `current_version` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `content_versions`
      - `id` (uuid, primary key)
      - `content_id` (uuid, foreign key)
      - `version` (integer)
      - `data` (jsonb)
      - `created_at` (timestamp)
      - `created_by` (uuid, foreign key)
      - `is_published` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for role-based access
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'viewer',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_role CHECK (role IN ('admin', 'editor', 'viewer'))
);

-- Create content table
CREATE TABLE IF NOT EXISTS content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  current_version integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_type CHECK (type IN ('page', 'section', 'component'))
);

-- Create content versions table
CREATE TABLE IF NOT EXISTS content_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid REFERENCES content(id) ON DELETE CASCADE,
  version integer NOT NULL,
  data jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES users(id),
  is_published boolean DEFAULT false,
  UNIQUE(content_id, version)
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_versions ENABLE ROW LEVEL SECURITY;

-- Policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can manage users"
  ON users
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Policies for content table
CREATE POLICY "Anyone can read published content"
  ON content
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM content_versions
    WHERE content_id = content.id
    AND is_published = true
  ));

CREATE POLICY "Editors and admins can manage content"
  ON content
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE id = auth.uid()
    AND role IN ('admin', 'editor')
  ));

-- Policies for content versions table
CREATE POLICY "Anyone can read published versions"
  ON content_versions
  FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Editors and admins can manage versions"
  ON content_versions
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE id = auth.uid()
    AND role IN ('admin', 'editor')
  ));

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER content_updated_at
  BEFORE UPDATE ON content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();