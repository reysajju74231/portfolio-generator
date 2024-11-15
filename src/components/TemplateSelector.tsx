import React from 'react';
import { Template } from '../types';
import { Check } from 'lucide-react';

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onSelect: (templateId: 'minimal' | 'modern' | 'creative') => void;
}

export default function TemplateSelector({ templates, selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
            selectedTemplate === template.id
              ? 'ring-2 ring-blue-500 scale-[1.02]'
              : 'hover:scale-[1.01]'
          }`}
          onClick={() => onSelect(template.id)}
        >
          <img
            src={template.preview}
            alt={template.name}
            className="w-full aspect-[16/10] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{template.name}</h3>
            <p className="text-sm opacity-90">{template.description}</p>
          </div>
          {selectedTemplate === template.id && (
            <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}