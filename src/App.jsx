import React, { useState } from 'react';
import { portfolioData } from './data';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}>
      <div className="min-h-screen font-sans antialiased transition-colors duration-300">
        
        {/* Header / Navegação */}
        <nav className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-sm ${darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
             <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"></span>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Alternar tema"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </nav>

        {/* Seção Hero */}
        <header className="pt-32 pb-20 px-4 max-w-5xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4">Olá, eu sou <span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"> o Arthur</span></h1>
            <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{portfolioData.bio}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-600/20">Ver Projetos</a>
              <a href="#contact" className={`px-6 py-3 font-medium rounded-lg border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-white' : 'bg-white border-gray-300 hover:bg-gray-100 text-gray-700'}`}>Contato</a>
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex justify-center">
            <img src='https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={portfolioData.name} className={`w-70 h-70 rounded-full border-5 shadow-xl object-cover ${darkMode ? 'border-gray-800' : 'border-white'}`} />
          </div>
        </header>

        {/* Habilidades */}
        <section className={`py-16 px-4 border-y ${darkMode ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {portfolioData.skills.map((skill, index) => (
                <span key={index} className={`px-4 py-2 rounded-xl text-sm font-medium border ${darkMode ? 'bg-gray-800/50 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-700'}`}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Projetos em Destaque</h2>
          <p className={`text-center mb-12 max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aplicações criadas utilizando componentização e boas práticas em React.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className={`border rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-500 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`p-6 pt-0 flex gap-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                  <a href={project.githubLink} className={`flex-1 text-center py-2 rounded-lg text-sm font-medium border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}>GitHub</a>
                  <a href={project.deployLink} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">Deploy</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contato / Rodapé */}
        <footer id="contact" className={`py-16 px-4 text-center border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Vamos conversar?</h2>
            <p className={`mb-8 max-w-md mx-auto text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Estou pronto para atuar em times de tecnologia como desenvolvedor front-end júnior.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-12">
               <a href={`mailto:${portfolioData.email}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">E-mail</a>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className={`px-4 py-2 border rounded-lg transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}>GitHub</a>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} - {portfolioData.name}. Desenvolvido em React + Tailwind CSS.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
