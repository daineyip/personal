import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "WorkInProgress Platforms",
      description: "Founder and CEO of a student-exclusive internship platform, utilizing embeddings and cosine similarity for job matching, attracting 100+ active users within 6 months",
      image: "wip.png",
      tags: ["Leadership", "Venture Creation", "Product Management", "Design"],
      link: "https://wipnetwork.ca"
    },
    {
      title: "Abstract.ai",
      description: "Building a newsletter to make technical research more accessible for learners",
      image: "Abstract.ai.png",
      tags: ["Node.js", "MongoDB", "Express.JS", "React", "LLM Integrations"],
      link: "https://github.com/daineyip/abstractAPI"
    },
    {
      title: "Forward.",
      description: "An email plugin to automatically forward 2FA email codes to your iPhone allowing autofilling straight from your keyboard",
      image: "forward.png",
      tags: ["Python", "SMTP", "API Integrations"],
      link: "https://github.com/daineyip/emailProject"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Header />
        
        <main>
          <section className="mb-12">
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-6">
            A technical product manager working in Web3 and internship recruitment with a passion
             for building what people need. I have a bias for action and am motivated by tackling 
             meaningful problems.</p>
             <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-16">
             With my background in product management and software engineering,
              I’m successfully aligning our team at WorkInProgress Platforms toward 
             our goal: simplifying early talent sourcing and connecting students with impactful 
             opportunities.
            </p>
             

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 mt-16">
          <p>© {new Date().getFullYear()} Daine Yip. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;