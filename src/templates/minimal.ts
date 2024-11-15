import { UserData } from '../types';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export const minimal = (data: UserData): string => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <style>
        :root {
            --primary: ${data.primaryColor};
            --secondary: ${data.secondaryColor};
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #ffffff;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }

        header {
            text-align: center;
            margin-bottom: 4rem;
        }

        h1 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .title {
            font-size: 1.25rem;
            color: #666;
            margin-bottom: 1.5rem;
        }

        .bio {
            max-width: 600px;
            margin: 0 auto 2rem;
            color: #444;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .social-link {
            color: var(--primary);
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 0.5rem;
            transition: background-color 0.2s;
        }

        .social-link:hover {
            background-color: #f3f4f6;
        }

        section {
            margin-bottom: 4rem;
        }

        h2 {
            font-size: 1.75rem;
            color: var(--secondary);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: center;
        }

        .skill {
            background-color: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .project {
            background-color: #f9fafb;
            border-radius: 0.75rem;
            padding: 1.5rem;
            transition: transform 0.2s;
        }

        .project:hover {
            transform: translateY(-4px);
        }

        .project h3 {
            color: var(--primary);
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
        }

        .project p {
            color: #4b5563;
            margin-bottom: 1rem;
            font-size: 0.875rem;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--secondary);
            text-decoration: none;
            font-size: 0.875rem;
        }

        .project-link:hover {
            text-decoration: underline;
        }

        footer {
            text-align: center;
            color: #6b7280;
            font-size: 0.875rem;
            margin-top: 4rem;
        }

        @media (max-width: 640px) {
            .container {
                padding: 1rem;
            }

            h1 {
                font-size: 2rem;
            }

            .projects {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${data.name}</h1>
            <div class="title">${data.title}</div>
            <p class="bio">${data.bio}</p>
            <div class="social-links">
                ${data.github ? `<a href="${data.github}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>` : ''}
                ${data.linkedin ? `<a href="${data.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>` : ''}
                ${data.twitter ? `<a href="${data.twitter}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                </a>` : ''}
                <a href="mailto:${data.email}" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
            </div>
        </header>

        <section>
            <h2>Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        </section>

        <section>
            <h2>Projects</h2>
            <div class="projects">
                ${data.projects.map(project => `
                    <div class="project">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        ${project.link ? `
                            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                                View Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </section>

        <footer>
            <p>© ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`;
};