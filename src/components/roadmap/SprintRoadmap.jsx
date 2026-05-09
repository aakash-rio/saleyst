import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Flag, CheckCircle2, Clock, Users, 
  Zap, Rocket, Shield, Layers, Database, 
  Columns, Copy, Download, Bug, ArrowRight,
  TrendingUp, Activity, BarChart3, ChevronRight,
  Plus, MessageSquare, Box
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

const SprintRoadmap = () => {
  const [selectedSprint, setSelectedSprint] = useState(null);

  const sprints = [
    { 
      id: 1, 
      label: 'Sprint 1: Foundation', 
      duration: '5–7 Days', 
      status: 'Completed', 
      icon: Shield, 
      color: 'text-emerald-500',
      outputs: ['Auth System', 'Login UI', 'Protected Routes', 'Layout Architecture', 'Session Mgmt']
    },
    { 
      id: 2, 
      label: 'Sprint 2: Workspace CRUD', 
      duration: '5–7 Days', 
      status: 'Completed', 
      icon: Database, 
      color: 'text-emerald-500',
      outputs: ['Project CRUD', 'Team Mgmt', 'User Roles', 'Admin Controls', 'Workspace Settings']
    },
    { 
      id: 3, 
      label: 'Sprint 3: Kanban Engine', 
      duration: '7–10 Days', 
      status: 'Completed', 
      icon: Columns, 
      color: 'text-emerald-500',
      outputs: ['Drag-and-Drop', 'Stage Mgmt', 'Task Creation', 'Activity Tracking', 'Real-time Sync']
    },
    { 
      id: 4, 
      label: 'Sprint 4: Automation & Cloning', 
      duration: '5–7 Days', 
      status: 'Active', 
      icon: Copy, 
      color: 'text-[var(--accent-pink)]',
      outputs: ['Project Cloning', 'Templates', 'Workflow Duplication', 'Stage Automation']
    },
    { 
      id: 5, 
      label: 'Sprint 5: Data Integration', 
      duration: '5–7 Days', 
      status: 'Planning', 
      icon: Download, 
      color: 'text-violet-500',
      outputs: ['CSV Export', 'Google Sheets Sync', 'Export Analytics', 'Sync Dashboard']
    },
    { 
      id: 6, 
      label: 'Sprint 6: Final Polish & Deploy', 
      duration: '5–7 Days', 
      status: 'Planning', 
      icon: Rocket, 
      color: 'text-white/20',
      outputs: ['Branding Polish', 'QA Testing', 'Performance Optimization', 'CI/CD Pipeline', 'V1 Release']
    },
  ];

  return (
    <div className="space-y-10">
      {/* Roadmap Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold font-heading mb-2">Agile Sprint Roadmap</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em]">Phase 01 Deployment • Q4 2024</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <Calendar size={16} /> Timeline View
          </button>
          <button className="bg-white text-black font-bold px-8 py-3 rounded-xl text-xs shadow-2xl hover:bg-[var(--accent-pink)] hover:text-white transition-all flex items-center gap-2 group">
            <Plus size={16} className="group-hover:rotate-90 transition-transform" /> New Sprint
          </button>
        </div>
      </div>

      {/* Global Analytics */}
      <div className="grid grid-cols-4 gap-6">
        <GlassCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Roadmap Progress</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold font-heading">64%</span>
            <span className="text-[10px] text-emerald-500 font-bold">+12% sprint gain</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Active Velocity</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold font-heading">42 SP</span>
            <span className="text-[10px] text-[var(--text-secondary)] font-bold">Avg 38/sprint</span>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Team Burn rate</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold font-heading">0.84</span>
            <span className="text-[10px] text-emerald-500 font-bold">Optimal efficiency</span>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Release Readiness</span>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold font-heading text-[var(--accent-pink)]">Beta-01</span>
            <span className="text-[10px] text-[var(--text-secondary)] font-bold">ETA: 14 Days</span>
          </div>
        </GlassCard>
      </div>

      {/* Interactive Sprint Timeline */}
      <div className="grid grid-cols-6 gap-6 relative">
        {/* Connection Line */}
        <div className="absolute top-[70px] left-[10%] right-[10%] h-[1px] bg-white/5 z-0" />
        
        {sprints.map((sprint, i) => (
          <motion.div 
            key={sprint.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative z-10"
            onClick={() => setSelectedSprint(sprint)}
          >
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center border transition-all cursor-pointer ${sprint.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : sprint.status === 'Active' ? 'bg-[var(--accent-pink)]/10 border-[var(--accent-pink)] text-[var(--accent-pink)] shadow-[var(--glow-pink)] scale-110' : 'bg-white/5 border-white/5 text-white/20 hover:border-white/20'}`}>
              {sprint.status === 'Completed' ? <CheckCircle2 size={24} /> : <sprint.icon size={24} />}
            </div>
            <div className="text-center">
              <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${sprint.status === 'Planning' ? 'text-white/20' : 'text-white'}`}>Sprint 0{sprint.id}</h4>
              <p className={`text-[8px] font-bold uppercase tracking-[0.2em] ${sprint.status === 'Active' ? 'text-[var(--accent-pink)] animate-pulse' : 'text-[var(--text-secondary)]'}`}>{sprint.status}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Sprint Details Panel */}
        <div className="col-span-8">
          <GlassCard className="min-h-[500px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-[80px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {selectedSprint ? (
                <motion.div 
                  key={selectedSprint.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-2xl ${selectedSprint.color.replace('text-', 'bg-')}`}>
                        <selectedSprint.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold font-heading">{selectedSprint.label}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest flex items-center gap-2">
                            <Clock size={14} /> {selectedSprint.duration}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{selectedSprint.status}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setSelectedSprint(null)} className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-white">Close Details</button>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]">Functional Output</h4>
                      <div className="space-y-4">
                        {selectedSprint.outputs.map((out, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[var(--accent-pink)] transition-all">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                            <span className="text-sm font-medium text-white/80">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]">Team Alignment</h4>
                      <div className="p-6 bg-white/[0.01] border border-white/5 rounded-[32px] space-y-6">
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => <img key={i} src={`https://ui-avatars.com/api/?name=U+${i}&background=random`} className="w-10 h-10 rounded-xl border-2 border-[var(--bg-card)]" alt="Team" />)}
                          </div>
                          <span className="text-[10px] font-bold text-[var(--text-secondary)]">3 Developers Assigned</span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                            <span className="text-[var(--text-secondary)]">Sprint Load</span>
                            <span className="text-white">92%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                          </div>
                        </div>
                      </div>
                      <GlassCard className="!bg-emerald-500/5 !border-emerald-500/20">
                        <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Zap size={12} /> Optimization Tip
                        </p>
                        <p className="text-xs text-emerald-500/60 leading-relaxed italic">Parallelizing CRUD development with role permissions in this sprint can reduce delivery time by 15%.</p>
                      </GlassCard>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-20 space-y-6">
                  <div className="w-24 h-24 rounded-[32px] bg-white/5 flex items-center justify-center text-[var(--accent-pink)] animate-pulse">
                    <Flag size={48} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">Select a Sprint Phase</h3>
                    <p className="text-[var(--text-secondary)] text-sm max-w-sm">Click on any sprint node in the timeline to visualize technical output, team alignment, and delivery metrics.</p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>

        {/* Sidebar Roadmap Activity */}
        <div className="col-span-4 space-y-8">
          <GlassCard>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-6">Milestone Audit</h3>
            <div className="space-y-6">
              {[
                { label: 'V1.0 Alpha Release', date: 'Oct 24', status: 'On Track' },
                { label: 'Security Audit', date: 'Nov 02', status: 'Pending' },
                { label: 'Beta Client Onboarding', date: 'Nov 12', status: 'Strategic' },
                { label: 'V1.0 Production', date: 'Dec 01', status: 'Strategic' },
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[var(--accent-pink)] transition-all" />
                    <span className="text-xs font-medium text-white/80">{m.label}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-white">{m.date}</p>
                    <p className="text-[8px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">{m.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Export Roadmap (PDF)</button>
          </GlassCard>

          {/* Productivity Pulse */}
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-pink)]/10 blur-[60px]" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-6">Productivity Pulse</h3>
            <div className="h-40 flex items-end gap-2">
              {[40, 65, 30, 80, 45, 90, 70].map((h, i) => (
                <div key={i} className="flex-grow flex flex-col items-center gap-2">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className={`w-full rounded-t-lg ${i === 5 ? 'bg-[var(--accent-pink)] shadow-[var(--glow-pink)]' : 'bg-white/5'}`}
                  />
                  <span className="text-[8px] text-[var(--text-secondary)] font-bold">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold font-heading">9.2</p>
                <p className="text-[8px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">Sprint Velocity</p>
              </div>
              <TrendingUp size={24} className="text-emerald-500" />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default SprintRoadmap;
