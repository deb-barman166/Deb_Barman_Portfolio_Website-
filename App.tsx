import React, { useState } from 'react';
import { Hero } from './Hero';
import { SkillCard } from './SkillCard';
import { AISkillCard } from './AISkillCard';
import { StatsChart } from './StatsChart';
import { PersonalityChart } from './/PersonalityChart';
import { LanguageChart } from './LanguageChart';
import { ChatWidget } from './ChatWidget';
import { ProjectCard } from './ProjectCard';
import { ArticleCard } from './ArticleCard'; 
import { ExperienceCard } from './ExperienceCard';
import { ContactForm } from './ContactForm';
import { SKILL_CATEGORIES, PROJECTS, ARTICLES, EXPERIENCES };
import { Github, Twitter, Linkedin, Mail, ArrowRight, Briefcase, Zap, Cpu, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);
  const [activeAISkillIndex, setActiveAISkillIndex] = useState<number | null>(null);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number | null>(null);

  // Extract AI-specific skills for the new section
  const aiSkills = [
    ...(SKILL_CATEGORIES.find(c => c.id === 'technical')?.skills.slice(0, 8) || []),
    ...(SKILL_CATEGORIES.find(c => c.id === 'high-skills')?.skills.filter(s => s.name.includes('AI') || s.name.includes('Gen')) || [])
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-40 bg-[#0B0F14]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tighter text-white">
            DEB<span className="text-cyan-500">.AI</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#ai-mastery" className="hover:text-cyan-400 transition-colors">AI Mastery</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Analytics Section */}
        <section id="stats" className="py-20 px-4 max-w-7xl mx-auto border-b border-gray-900/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skill <span className="text-cyan-400">Analytics</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A dual-perspective analysis of my capabilities. 
              Visualizing the balance between deep technical knowledge and high-level cognitive traits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <StatsChart />
            </div>
            <div className="flex flex-col gap-4">
              <PersonalityChart />
            </div>
          </div>

          {/* New Language Chart */}
          <div className="max-w-4xl mx-auto">
             <LanguageChart />
          </div>
        </section>

        {/* AI Mastery Section */}
        <section id="ai-mastery" className="py-24 relative">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="mb-16 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                   Core Competency
                 </div>
                 <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                   Artificial <span className="text-emerald-500">Intelligence</span> Arsenal
                 </h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                   A specialized breakdown of AI tools and frameworks I leverage to engineer the future.
                   Select a module to engage the interface.
                 </p>
              </div>

              {/* Stacked Vertical Layout */}
              <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                {aiSkills.map((skill, index) => (
                  <AISkillCard 
                    key={index} 
                    skill={skill} 
                    isActive={activeAISkillIndex === index}
                    onClick={() => setActiveAISkillIndex(index === activeAISkillIndex ? null : index)}
                  />
                ))}
              </div>
           </div>
        </section>

        {/* Experience & Impact Section */}
        <section id="experience" className="py-24 relative bg-[#0B0F14]">
           {/* Decor Elements */}
           <div className="absolute left-0 top-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                 <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                      Experience & <span className="text-cyan-400">Impact</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                      What I've built, how I think, and the value I deliver.
                    </p>
                 </div>
                 
                 {/* Hire Me CTA */}
                 <a href="#contact" className="group flex items-center gap-3 bg-white text-[#0B0F14] px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                   <div className="flex flex-col items-start">
                     <span className="text-lg leading-none">Hire Me</span>
                     <span className="text-[10px] uppercase tracking-wide opacity-70 font-medium mt-0.5">Open to Roles</span>
                   </div>
                   <Briefcase size={22} className="group-hover:rotate-12 transition-transform ml-2" />
                 </a>
              </div>

              {/* Experience Cards */}
              <div className="flex flex-col gap-8">
                {EXPERIENCES.map((exp, index) => (
                  <ExperienceCard 
                    key={index}
                    experience={exp}
                    index={index}
                    isActive={activeExperienceIndex === index}
                    onClick={() => setActiveExperienceIndex(index === activeExperienceIndex ? null : index)}
                  />
                ))}
              </div>

              {/* "Why Hire Me" Mini-Section */}
              <div className="mt-16 pt-16 border-t border-gray-800">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Why Hire Me?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-[#121826] border border-gray-800 p-6 rounded-xl hover:border-cyan-500/30 transition-colors group">
                    <div className="w-10 h-10 bg-cyan-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-900/30 transition-colors">
                      <Clock className="text-cyan-400" size={20} />
                    </div>
                    <h4 className="font-bold text-white mb-2">Rapid Execution</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      I don't just code; I ship. My workflow is optimized for speed without sacrificing code quality, leveraging AI to handle boilerplate.
                    </p>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-[#121826] border border-gray-800 p-6 rounded-xl hover:border-emerald-500/30 transition-colors group">
                    <div className="w-10 h-10 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-900/30 transition-colors">
                      <Zap className="text-emerald-400" size={20} />
                    </div>
                    <h4 className="font-bold text-white mb-2">Problem Solver</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      I approach bugs with a systematic, logical mindset. If I don't know the answer, I know exactly how to find it efficiently.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#121826] border border-gray-800 p-6 rounded-xl hover:border-purple-500/30 transition-colors group">
                    <div className="w-10 h-10 bg-purple-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-900/30 transition-colors">
                      <Cpu className="text-purple-400" size={20} />
                    </div>
                    <h4 className="font-bold text-white mb-2">AI-Integrated</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      I am a developer of the new era. I use Gen AI tools to amplify my output, automate testing, and architect smarter solutions.
                    </p>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* Projects Section (Slider) */}
        <section id="projects" className="py-24 relative overflow-hidden border-t border-gray-900 bg-[#0B0F14]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured <span className="text-purple-400">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                Select a project to activate the neural link. Swipe to explore detailed schematics.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Scroll</span> <ArrowRight size={16} />
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-12 pt-4 snap-x snap-mandatory no-scrollbar mask-gradient">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isActive={activeProjectIndex === index}
                onClick={() => setActiveProjectIndex(index === activeProjectIndex ? null : index)}
              />
            ))}
            <div className="w-4 flex-shrink-0"></div>
          </div>
        </section>

        {/* Full Technical Spectrum */}
        <section id="skills" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
             <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Full Technical Spectrum</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  A comprehensive breakdown of my capabilities, from core engineering to cognitive soft skills.
                </p>
             </div>
             
             {/* Stacked Vertical Layout for Competency Blocks */}
             <div className="flex flex-col gap-8">
               {SKILL_CATEGORIES.map((category, index) => (
                 <SkillCard key={category.id} category={category} />
               ))}
             </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="py-24 relative overflow-hidden bg-[#0B0F14]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Intellectual <span className="text-cyan-400">Insights</span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                Thoughts, tutorials, and research on AI, Design, and the future of technology.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Scroll</span> <ArrowRight size={16} />
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-12 pt-4 snap-x snap-mandatory no-scrollbar mask-gradient">
            {ARTICLES.map((article, index) => (
              <ArticleCard 
                key={index} 
                article={article} 
                isActive={activeArticleIndex === index}
                onClick={() => setActiveArticleIndex(index === activeArticleIndex ? null : index)}
              />
            ))}
            <div className="w-4 flex-shrink-0"></div>
          </div>
        </section>

        {/* Footer/Contact */}
        <section id="contact" className="py-20 border-t border-gray-900 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Ready to Innovate?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Whether it's AI automation, complex Python development, or creative direction, 
              I bring a unique blend of logic and imagination to the table.
            </p>

            {/* Message Form */}
            <div className="mb-20 text-left">
               <ContactForm />
            </div>
            
            <div className="flex justify-center gap-6 mb-12">
              <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Deb Barman. Designed with AI.
            </p>
          </div>
        </section>
      </main>

      {/* Floating Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
