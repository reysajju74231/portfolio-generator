import { UserData } from '../types';
import { minimal } from './minimal';
import { modern } from './modern';
import { creative } from './creative';

export const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple design focusing on content',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with bold elements',
    preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=640',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Unique layout for creative professionals',
    preview: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=640',
  },
];

export const getTemplateHtml = (data: UserData): string => {
  switch (data.template) {
    case 'minimal':
      return minimal(data);
    case 'modern':
      return modern(data);
    case 'creative':
      return creative(data);
    default:
      return minimal(data);
  }
};