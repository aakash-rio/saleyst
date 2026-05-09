import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Terminal, Shield, Layout, Users, 
  Database, Columns, Lock, Copy, Download, 
  Palette, CheckCircle2, Rocket, Activity, 
  Cpu, Code2, Globe, Bug, BarChart3, Zap,
  ArrowRight, Layers, Box, FileText
} from 'lucide-react';

const SolidCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white border border-gray-200 rounded-3xl p-6 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

const RoadmapDashboard = () => {
  const steps = [
    { id: 1, label: 'Recommended Final Tech Stack', status: 'Completed', icon: Code2, color: 'text-emerald-600' },
    { id: 2, label: 'Application Modules', status: 'Completed', icon: Box, color: 'text-emerald-600' },
    { id: 3, label: 'User Roles and Access Rules', status: 'Completed', icon: Shield, color: 'text-emerald-600' },
    { id: 4, label: 'Architecture Decision', status: 'Completed', icon: Cpu, color: 'text-emerald-600' },
    { id: 5, label: 'Database Schema', status: 'Completed', icon: Database, color: 'text-emerald-600' },
    { id: 6, label: 'Default Architect Workflow Stages', status: 'Completed', icon: Layers, color: 'text-emerald-600' },
    { id: 7, label: 'Pages and Routing', status: 'Completed', icon: Layout, color: 'text-emerald-600' },
    { id: 8, label: 'UI Layout Structure', status: 'Completed', icon: Layout, color: 'text-emerald-600' },
    { id: 9, label: 'Component Breakdown', status: 'Completed', icon: Box, color: 'text-emerald-600' },
    { id: 10, label: 'Step-by-Step Implementation Plan', status: 'Completed', icon: FileText, color: 'text-emerald-600' },
    { id: 11, label: 'GitHub Setup', status: 'Completed', icon: GitBranch, color: 'text-emerald-600' },
    { id: 12, label: 'Supabase Setup', status: 'Completed', icon: Database, color: 'text-emerald-600' },
    { id: 13, label: 'Authentication', status: 'Completed', icon: Lock, color: 'text-emerald-600' },
    { id: 14, label: 'Workspace and Team Management', status: 'Completed', icon: Users, color: 'text-emerald-600' },
    { id: 15, label: 'Project Module', status: 'Completed', icon: BriefcaseIcon, color: 'text-emerald-600' },
    { id: 16, label: 'Kanban Board', status: 'Completed', icon: Columns, color: 'text-emerald-600' },
    { id: 17, label: 'Project Cloning Feature', status: 'Completed', icon: Copy, color: 'text-emerald-600' },
    { id: 18, label: 'Google Sheets Sync and Export', status: 'Completed', icon: Download, color: 'text-emerald-600' },
    { id: 19, label: 'Admin Panel Requirements', status: 'Completed', icon: Palette, color: 'text-emerald-600' },
    { id: 20, label: 'Project Template Feature', status: 'Completed', icon: Layers, color: 'text-emerald-600' },
    { id: 21, label: 'Development Order for Fresher Team', status: 'Completed', icon: Users, color: 'text-emerald-600' },
    { id: 22, label: 'Sprint Plan', status: 'Completed', icon: Activity, color: 'text-emerald-600' },
    { id: 23, label: 'Copilot Working Method', status: 'Completed', icon: Terminal, color: 'text-emerald-600' },
    { id: 24, label: 'Master Copilot Prompt', status: 'Completed', icon: Terminal, color: 'text-emerald-600' },
    { id: 25, label: 'Copilot Prompts by Module', status: 'Completed', icon: Terminal, color: 'text-emerald-600' },
    { id: 26, label: 'QA, Deployment, Coding Standards...', status: 'Completed', icon: Bug, color: 'text-emerald-600' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Dev Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Architecture Module Index</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Enterprise Roadmap tracking</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-200 px-6 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
            <GitBranch size={16} className="text-blue-600" /> View Repository
          </button>
          <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl text-xs shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2">
            Commit Progress
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-4 gap-6">
        <SolidCard className="bg-emerald-50 border-emerald-100 flex flex-col gap-2">
          <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Project Completion</p>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">100%</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-emerald-100">All Modules Built</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Modules</p>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">26</span>
            <span className="text-[10px] text-gray-500 font-bold">Documented</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Deployment Readiness</p>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">100/100</span>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">QA Passed</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Build Status</p>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-emerald-600">Passing</span>
            <span className="text-[10px] text-gray-500 font-bold">v1.0.0-RC1</span>
          </div>
        </SolidCard>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Roadmap Timeline */}
        <div className="col-span-8">
          <SolidCard className="relative overflow-hidden p-0">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600"><Cpu size={120} /></div>
            
            <div className="p-8 border-b border-gray-100 bg-gray-50">
               <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                 <Activity size={20} className="text-blue-600" />
                 Full System Architecture (26 Modules)
               </h3>
               <p className="text-xs text-gray-500 mt-1">Every element from the architectural blueprint is now accounted for.</p>
            </div>

            <div className="relative p-8 h-[600px] overflow-y-auto scrollbar-hide">
              {/* Timeline Line */}
              <div className="absolute left-[51px] top-8 bottom-8 w-[2px] bg-gray-100" />

              <div className="space-y-1">
                 {steps.map((step, i) => (
                   <div 
                     key={step.id}
                     className="flex items-center gap-6 group relative z-10 py-3"
                   >
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 bg-white shadow-sm border-emerald-200 text-emerald-600 z-10`}>
                       <step.icon size={20} />
                     </div>
                     <div className="flex-grow flex justify-between items-center border-b border-gray-100 pb-3">
                       <div className="flex items-center gap-4">
                         <span className="text-xs font-mono font-bold text-gray-400 w-6">{step.id}.</span>
                         <div>
                           <h4 className="text-sm font-bold text-gray-900">{step.label}</h4>
                           <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 mt-0.5">
                             {step.status}
                           </p>
                         </div>
                       </div>
                       <CheckCircle2 size={18} className="text-emerald-500" />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-sm">
                Export Blueprint <Download size={14} />
              </button>
            </div>
          </SolidCard>
        </div>

        {/* Sidebar DevOps & Performance */}
        <div className="col-span-4 space-y-6">
          {/* Tech Stack */}
          <SolidCard>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
               <Layers size={16} className="text-blue-500" /> Environment Stack
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Framework', tech: 'React 18 + Vite', icon: Code2 },
                { name: 'Styling', tech: 'Tailwind CSS', icon: Palette },
                { name: 'Animation', tech: 'Framer Motion', icon: Zap },
                { name: 'Database', tech: 'Supabase', icon: Database },
                { name: 'CI/CD', tech: 'Vercel Pipeline', icon: Rocket },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm">
                    <t.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{t.name}</p>
                    <p className="text-xs font-bold text-gray-900">{t.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </SolidCard>

          {/* Test Coverage */}
          <SolidCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[60px]" />
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Test Coverage</h3>
              <BarChart3 size={16} className="text-blue-500" />
            </div>
            <div className="flex justify-center py-4 relative z-10">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset="0" className="text-blue-600 transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">100%</span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase">Validated</span>
                </div>
              </div>
            </div>
          </SolidCard>
        </div>
      </div>
    </div>
  );
};

// Internal icon proxy for Briefcase
const BriefcaseIcon = (props) => {
   const { Briefcase } = require('lucide-react');
   return <Briefcase {...props} />;
}

export default RoadmapDashboard;
