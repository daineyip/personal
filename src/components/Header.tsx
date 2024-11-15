import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center mb-14">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Daine Yip</h1>
      <p className="text-xl text-orange-400 mb-6">Building products that matter</p>
      <div className="flex justify-center gap-4 text-gray-600 mx-12">
        <a href="mailto:daine@wipnetwork.ca" className="flex items-center hover:text-gray-900 transition-colors">
          <Mail className="w-5 h-5 mr-2" />
          Email
        </a>
        <a href="https://linkedin.com/in/daineyip" className="flex items-center hover:text-gray-900 transition-colors">
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a href="https://github.com/daineyip" className="flex items-center hover:text-gray-900 transition-colors">
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
      </div>
    </header>
  );
}