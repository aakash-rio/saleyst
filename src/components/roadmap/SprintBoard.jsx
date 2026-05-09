import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitPullRequest, GitCommit, GitMerge, Terminal, 
  Code2, Bug, Zap, Clock, Users, ArrowRight,
  ChevronRight, MoreHorizontal, MessageSquare,
  Hash, Play, CheckCircle2
} from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const SprintBoard = () => {
  const columns = [
    { id: 'backlog', label: 'Sprint Backlog', color: 'bg-slate-500' },
    { id: 'in-progress', label: 'Developing', color: 'bg-[var(--accent-pink)]' },
    { id: 'review', label: 'Peer Review', color: 'bg-violet-500' },
    { id: 'done', label: 'Merged', color: 'bg-emerald-500' },
  ];

  const tasks = [
    { id: 'NK-124', title: 'Implement Project Cloning Logic', type: 'feature', priority: 'high', owner: 'Nichekala', status: 'developing', progress: 65 },
    { id: 'NK-125', title: 'Refactor Auth Middleware', type: 'refactor', priority: 'medium', owner: 'Sarah', status: 'peer review', progress: 100 },
    { id: 'NK-126', title: 'Bug: Fix Kanban Drag Overlay', type: 'bug', priority: 'critical', owner: 'Marcus', status: 'developing', progress: 30 },
    { id: 'NK-127', title: 'Add Google Sheets Sync V1', type: 'feature', priority: 'high', owner: 'Nichekala', status: 'backlog', progress: 0 },
    { id: 'NK-128', title: 'Export Audit Log Generation', type: 'feature', priority: 'low', owner: 'Elena', status: 'merged', progress: 100 },
  ];

  const getTaskIcon = (type) => {
    switch(type) {
      case 'bug': return <Bug size={14} className="text-rose-500" />;
      case 'feature': return <Zap size={14} className="text-[var(--accent-pink)]" />;
      case 'refactor': return <Code2 size={14} className="text-violet-500" />;
      default: return <Terminal size={14} />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Sprint Header */}
      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-3xl p-6">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500">
            <GitPullRequest size={24} />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold font-heading">Sprint 04: Project Scaling</h2>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">Active</span>
            </div>
            <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] mt-1">12 Oct - 26 Oct • 48 Story Points • 4 Developers</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex -space-x-3 mr-6">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} className="w-10 h-10 rounded-xl border-2 border-[var(--bg-card)]" alt="Team" />
            ))}
          </div>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">Sprint Settings</button>
          <button className="bg-[var(--accent-pink)] text-white font-bold px-6 py-3 rounded-xl text-xs shadow-xl hover:scale-105 transition-all">Start Daily Standup</button>
        </div>
      </div>

      {/* Sprint Grid */}
      <div className="grid grid-cols-4 gap-6 h-[calc(100vh-320px)] overflow-hidden">
        {columns.map(col => (
          <div key={col.id} className="flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]">{col.label}</h3>
                <span className="text-[10px] font-bold text-white/20">{tasks.filter(t => t.status.replace(' ', '-') === col.id).length}</span>
              </div>
              <button className="text-[var(--text-secondary)] hover:text-white transition-colors"><Plus size={14} /></button>
            </div>

            <div className="flex-grow bg-white/[0.01] border border-white/[0.03] rounded-[32px] p-4 space-y-4 overflow-y-auto scrollbar-hide">
              {tasks.filter(t => t.status.replace(' ', '-') === col.id).map(task => (
                <motion.div 
                  key={task.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl p-5 shadow-xl group cursor-grab active:cursor-grabbing"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-tighter">{task.id}</span>
                      <div className="w-1 h-1 rounded-full bg-white/10" />
                      {getTaskIcon(task.type)}
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} className="text-[var(--text-secondary)]" /></button>
                  </div>
                  
                  <h4 className="text-sm font-bold leading-relaxed mb-4 group-hover:text-[var(--accent-pink)] transition-colors">{task.title}</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img src={`https://ui-avatars.com/api/?name=${task.owner}&background=ff007a&color=fff`} className="w-6 h-6 rounded-lg" alt="Owner" />
                        <span className="text-[10px] font-bold text-[var(--text-secondary)]">{task.owner}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-[8px] font-bold text-[var(--text-secondary)]">
                          <MessageSquare size={10} /> 4
                        </div>
                        <div className="flex items-center gap-1 text-[8px] font-bold text-[var(--text-secondary)]">
                          <Clock size={10} /> 2d
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex-grow mr-4">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${task.progress}%` }}
                            className={`h-full ${task.progress === 100 ? 'bg-emerald-500' : 'bg-[var(--accent-pink)]'}`}
                          />
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-white/40">{task.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:border-white/20 hover:text-white transition-all">
                + Create Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SprintBoard;
