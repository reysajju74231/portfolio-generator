export interface UserData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  skills: string[];
  projects: Project[];
  avatar?: string;
  template: 'minimal' | 'modern' | 'creative';
  primaryColor: string;
  secondaryColor: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export interface Template {
  id: 'minimal' | 'modern' | 'creative';
  name: string;
  description: string;
  preview: string;
}