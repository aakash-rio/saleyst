import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Search, Filter, MoreVertical, Calendar, User, 
  MapPin, DollarSign, Clock, CheckCircle2, ChevronRight,
  ExternalLink, FileText, Users, Building2, Copy
} from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    'Planning': 'bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]',
    'In Progress': 'bg-[var(--accent-pink)]/10 text-[var(--accent-pink)] border-[var(--accent-pink)]/20 shadow-[0_0_10px_rgba(255,0,122,0.2)]',
    'On Hold': 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]',
    'Review': 'bg-violet-500/10 text-violet-500 border-violet-500/20 shadow-[0_0_10px_rgba(139,92,246,0.2)]',
    'Completed': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    'Cancelled': 'bg-slate-500/10 text-slate-500 border-slate-500/20'
  };

  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
};

const ProjectList = ({ onProjectSelect, onCreateProject, onClone }) => {
  const [projects] = useState([
    { id: 1, name: 'Skyline Residence', client: 'Aether Group', manager: 'Sarah Chen', status: 'In Progress', progress: 65, type: 'Architectural Design', budget: '$240k', deadline: 'Dec 2024' },
    { id: 2, name: 'Lumina Tech Hub', client: 'Lumina Corp', manager: 'Marcus Lee', status: 'Planning', progress: 15, type: 'Interior Fitout', budget: '$1.2M', deadline: 'Mar 2025' },
    { id: 3, name: 'Green Valley Villas', client: 'Nature Estates', manager: 'Elena Vogel', status: 'Review', progress: 92, type: 'Residential Complex', budget: '$450k', deadline: 'Oct 2024' },
    { id: 4, name: 'Oceanic Pier Renovation', client: 'City Council', manager: 'Julian Thorne', status: 'On Hold', progress: 40, type: 'Public Infra', budget: '$80k', deadline: 'Jan 2025' },
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold font-heading mb-2">Projects Portfolio</h2>
          <p className="text-[var(--text-secondary)]">Oversee all architectural ventures and workspace initiatives</p>
        </div>
        <button 
          onClick={onCreateProject}
          className="bg-white text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[var(--accent-pink)] hover:text-white transition-all shadow-xl"
        >
          <Plus size={18} />
          Create New Project
        </button>
      </div>

      {/* Filters & Stats */}
      <div className="flex gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
          <input 
            type="text" 
            placeholder="Search projects, clients, or managers..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-[var(--accent-pink)] outline-none transition-all"
          />
        </div>
        <button className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-bold hover:bg-white/10 transition-all">
          <Filter size={16} />
          All Types
        </button>
        <button className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-bold hover:bg-white/10 transition-all">
          <Clock size={16} />
          Active First
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <GlassCard 
            key={project.id} 
            className="group cursor-pointer hover:border-[var(--accent-pink)]/40 transition-all !p-0 overflow-hidden"
          >
            <div 
              onClick={() => onProjectSelect(project)}
              className="flex items-center p-6 gap-8"
            >
              {/* Project Info */}
              <div className="flex-grow min-w-[250px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[var(--accent-pink)]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-[var(--accent-pink)] transition-colors">{project.name}</h3>
                    <p className="text-xs text-[var(--text-secondary)]">{project.type}</p>
                  </div>
                </div>
              </div>

              {/* Client & Manager */}
              <div className="w-48">
                <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Client</p>
                <p className="text-sm font-semibold">{project.client}</p>
              </div>

              <div className="w-48">
                <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Manager</p>
                <div className="flex items-center gap-2">
                  <img src={`https://ui-avatars.com/api/?name=${project.manager}&background=333&color=fff`} className="w-6 h-6 rounded-md" />
                  <span className="text-sm font-semibold">{project.manager}</span>
                </div>
              </div>

              {/* Status & Progress */}
              <div className="w-48">
                <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">Status</p>
                <StatusBadge status={project.status} />
              </div>

              <div className="w-64">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Progress</p>
                  <span className="text-[10px] font-bold text-[var(--accent-pink)]">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    className="h-full bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-violet)]"
                  />
                </div>
              </div>

              {/* Budget & Deadline */}
              <div className="w-32 text-right">
                <p className="text-lg font-bold font-heading">{project.budget}</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">{project.deadline}</p>
              </div>

              <div className="flex items-center gap-2 px-4 border-l border-white/5 ml-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onClone(project);
                  }}
                  className="p-3 bg-white/5 hover:bg-[var(--accent-pink)] hover:text-white rounded-xl text-[var(--text-secondary)] transition-all group/btn"
                >
                  <Copy size={16} className="group-hover/btn:scale-110 transition-transform" />
                  <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover/btn:opacity-100 transition-opacity bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">Clone Project</div>
                </button>
                <button className="p-3 hover:bg-white/10 rounded-xl text-[var(--text-secondary)] transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Project Analytics Summary */}
      <div className="grid grid-cols-3 gap-6">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Budget Utilization</h3>
            <DollarSign className="text-emerald-500" size={16} />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center font-bold text-lg">72%</div>
            <div>
              <p className="text-2xl font-bold font-heading">$1.8M</p>
              <p className="text-xs text-[var(--text-secondary)]">Total Portfolio Value</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Timeline Accuracy</h3>
            <Clock className="text-violet-500" size={16} />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-violet-500/20 border-t-violet-500 flex items-center justify-center font-bold text-lg">94%</div>
            <div>
              <p className="text-2xl font-bold font-heading">On Time</p>
              <p className="text-xs text-[var(--text-secondary)]">Project Delivery Rate</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Active Manager Load</h3>
            <Users className="text-[var(--accent-pink)]" size={16} />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-[var(--accent-pink)]/20 border-t-[var(--accent-pink)] flex items-center justify-center font-bold text-lg">4.2</div>
            <div>
              <p className="text-2xl font-bold font-heading">Avg Load</p>
              <p className="text-xs text-[var(--text-secondary)]">Projects per Manager</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ProjectList;
