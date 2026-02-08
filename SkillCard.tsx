import React, { useState } from 'react';
import { SkillCategory, SkillLevel } from './types';
import { Code, Cpu, Brain, BookOpen, Palette, Zap, Layers, Check, Sparkles } from 'lucide-react';

interface Props {
  category: SkillCategory;
}

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'Code': return <Code className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Brain': return <Brain className="w-6 h-6" />;
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'Palette': return <Palette className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    default: return <Layers className="w-6 h-6" />;
  }
};

const getColorTheme = (iconName: string) => {
  switch(iconName) {
    case 'Code': return {
      border: 'hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
      accent: 'bg-blue-500',
      text: 'text-blue-300'
    };
    case 'Cpu': return {
      border: 'hover:border-purple-500/50',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]',
      accent: 'bg-purple-500',
      text: 'text-purple-300'
    };
    case 'Brain': return {
      border: 'hover:border-pink-500/50',
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]',
      accent: 'bg-pink-500',
      text: 'text-pink-300'
    };
    case 'BookOpen': return {
      border: 'hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',
      accent: 'bg-emerald-500',
      text: 'text-emerald-300'
    };
    case 'Palette': return {
      border: 'hover:border-amber-500/50',
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]',
      accent: 'bg-amber-500',
      text: 'text-amber-300'
    };
    case 'Zap': return {
      border: 'hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
      accent: 'bg-cyan-500',
      text: 'text-cyan-300'
    };
    default: return {
      border: 'hover:border-gray-500/50',
      iconBg: 'bg-gray-500/10',
      iconColor: 'text-gray-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(107,114,128,0.1)]',
      accent: 'bg-gray-500',
      text: 'text-gray-300'
    };
  }
};

export const SkillCard: React.FC<Props> = ({ category }) => {
  const theme = getColorTheme(category.icon);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full rounded-2xl border border-gray-800 bg-[#0B0F14]/90 backdrop-blur-xl transition-all duration-500 ease-out group overflow-hidden ${theme.border} ${theme.glow}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
      
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50`} />

      <div className="relative z-10 p-6 md:p-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
          <div className={`p-3 rounded-xl ${theme.iconBg} ${theme.iconColor} border border-white/5 shadow-inner w-fit`}>
            {getIcon(category.icon)}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
              {category.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {category.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800/50 mb-6" />

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {category.keyHighlights?.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 group/item">
              <div className={`mt-1 min-w-[16px] transition-colors duration-300 ${isHovered ? theme.text : 'text-gray-600'}`}>
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Tags */}
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Sparkles size={12} /> Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-xs rounded-md border border-gray-800 bg-[#151a25] text-gray-400 transition-all duration-300 hover:border-gray-600 hover:text-white ${
                  skill.level === SkillLevel.Legend || skill.level === SkillLevel.Expert 
                    ? `hover:${theme.text} hover:bg-${theme.accent}/10` 
                    : ''
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Side Glow Line */}
      <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500 ${isHovered ? theme.accent : 'bg-transparent'}`} />
    </div>
  );
};
