import React from 'react';
import { SkillItem, SkillLevel } from './types';

interface Props {
  skill: SkillItem;
  isActive: boolean;
  onClick: () => void;
}

const getLevelStyles = (level: SkillLevel, isActive: boolean) => {
  switch (level) {
    case SkillLevel.Legend:
    case SkillLevel.Expert:
       return isActive 
         ? "text-emerald-300 bg-emerald-900/40 border-emerald-500/50"
         : "text-emerald-400 bg-emerald-900/20 border-emerald-500/20";
    case SkillLevel.Advance:
       return isActive
         ? "text-blue-300 bg-blue-900/40 border-blue-500/50"
         : "text-blue-400 bg-blue-900/20 border-blue-500/20";
    default:
       return isActive
         ? "text-gray-200 bg-gray-700/50 border-gray-500"
         : "text-gray-400 bg-gray-800 border-gray-700";
  }
}

export const AISkillCard: React.FC<Props> = ({ skill, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-full group cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
      }`}
    >
      {/* Glow Backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-lg transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Strip Container */}
      <div className={`relative flex items-center justify-between p-4 md:p-5 rounded-xl border transition-all duration-300 bg-gamma-card overflow-hidden ${
        isActive 
          ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-gray-900' 
          : 'border-gray-800 hover:bg-white/5 hover:border-gray-700'
      }`}>
        
        {/* Left Gradient Accent Bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-blue-500 transition-opacity duration-300 ${
           isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
        }`}></div>

        {/* Skill Name */}
        <div className="pl-4 flex items-center gap-3">
           <h3 className={`font-display font-medium text-lg tracking-wide transition-colors ${
             isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
           }`}>
             {skill.name}
           </h3>
           {/* Optional Sparkle for Expert/Legend */}
           {(skill.level === SkillLevel.Expert || skill.level === SkillLevel.Legend) && (
             <span className="flex h-2 w-2 relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
           )}
        </div>

        {/* Level Badge */}
        <div>
           <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-300 ${
             getLevelStyles(skill.level, isActive)
           }`}>
             {skill.level}
           </span>
        </div>
      </div>
    </div>
  );
};
