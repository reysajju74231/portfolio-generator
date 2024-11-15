import React from 'react';
import { UserData } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface UserFormProps {
  data: UserData;
  onChange: (data: UserData) => void;
}

export default function UserForm({ data, onChange }: UserFormProps) {
  const addProject = () => {
    onChange({
      ...data,
      projects: [...data.projects, { title: '', description: '' }],
    });
  };

  const removeProject = (index: number) => {
    onChange({
      ...data,
      projects: data.projects.filter((_, i) => i !== index),
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange({ ...data, projects: newProjects });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Professional Title"
            value={data.title}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
            className="input-field"
          />
        </div>
        <textarea
          placeholder="Bio"
          value={data.bio}
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
          className="input-field h-32"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact & Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="GitHub URL"
            value={data.github}
            onChange={(e) => onChange({ ...data, github: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={data.linkedin}
            onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="Twitter URL"
            value={data.twitter}
            onChange={(e) => onChange({ ...data, twitter: e.target.value })}
            className="input-field"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={data.skills.join(', ')}
          onChange={(e) =>
            onChange({ ...data, skills: e.target.value.split(',').map((s) => s.trim()) })
          }
          className="input-field"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div key={index} className="relative p-4 border rounded-lg">
              <button
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  className="input-field"
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className="input-field h-24"
                />
                <input
                  type="url"
                  placeholder="Project Link (optional)"
                  value={project.link}
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Customization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Primary Color</label>
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => onChange({ ...data, primaryColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Secondary Color</label>
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => onChange({ ...data, secondaryColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}