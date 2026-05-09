import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Layout, Briefcase, Construction, Home, 
  Rocket, Megaphone, Settings, CheckCircle2, 
  ChevronRight, Zap, Layers, Trash2, Edit3, 
  Grid, BarChart3, TrendingUp, Users, Clock,
  ArrowRight, Search, Filter, Box, Map
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

const TemplateLibrary = ({ onSelectTemplate, onCreateTemplate }) => {
  const [activeTab, setActiveTab] = useState('All');
  
  const templates = [
    { id: 1, name: 'Luxury Residential', type: 'Residential', stages: 8, tasks: 42, duration: '14 Months', usage: 124, icon: Home, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
    { id: 2, name: 'Modern Interior', type: 'Interior', stages: 5, tasks: 28, duration: '4 Months', usage: 89, icon: Layout, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
    { id: 3, name: 'Commercial Fitout', type: 'Commercial', stages: 12, tasks: 65, duration: '18 Months', usage: 42, icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { id: 4, name: 'Heritage Restoration', type: 'Heritage', stages: 15, tasks: 110, duration: '24 Months', usage: 15, icon: Construction, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 5, name: 'Marketing Launch', type: 'Marketing', stages: 6, tasks: 20, duration: '2 Months', usage: 210, icon: Megaphone, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-6">
        <SolidCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Blueprints</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">42</span>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">+4 this month</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Most Applied</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">94%</span>
            <span className="text-[10px] text-gray-500 font-bold">Residential</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Efficiency Gain</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">32%</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Time saved</span>
          </div>
        </SolidCard>
        <SolidCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Active Automation</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-gray-900">128</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Live triggers</span>
          </div>
        </SolidCard>
      </div>

      {/* Header & Filters */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Project Templates</h2>
          <p className="text-sm text-gray-500">Manage and deploy standard project architectures and default stages</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-1.5 flex gap-1 shadow-sm">
            {['All', 'Residential', 'Interior', 'Commercial'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button onClick={onCreateTemplate} className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2 group text-sm">
            <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
            New Template
          </button>
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-3 gap-6">
        {templates.filter(t => activeTab === 'All' || t.type === activeTab).map((tpl, i) => (
          <motion.div 
            key={tpl.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group cursor-pointer"
            onClick={() => onSelectTemplate(tpl)}
          >
            <SolidCard className="h-full flex flex-col gap-5 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tpl.color} ${tpl.bg} border ${tpl.border}`}>
                  <tpl.icon size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Times Used</p>
                  <p className="text-lg font-bold text-gray-900">{tpl.usage}x</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{tpl.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">Standardized {tpl.type.toLowerCase()} architecture including default stages, task checklists, and execution protocols.</p>
              </div>

              <div className="flex gap-1.5 mt-2">
                {['Concept', 'Draft', 'Build', 'Review'].map((s, idx) => (
                  <div key={idx} className="flex-grow h-1.5 rounded-full bg-gray-100 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className={`h-full ${tpl.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} 
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 mt-2">
                <div className="text-center bg-gray-50 rounded-lg py-2 border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Stages</p>
                  <p className="text-sm font-bold text-gray-800">{tpl.stages}</p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg py-2 border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Tasks</p>
                  <p className="text-sm font-bold text-gray-800">{tpl.tasks}</p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg py-2 border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Est.</p>
                  <p className="text-sm font-bold text-gray-800 whitespace-nowrap">{tpl.duration}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-400 uppercase">RL</div>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                  Edit Template <ArrowRight size={14} />
                </button>
              </div>
            </SolidCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;
