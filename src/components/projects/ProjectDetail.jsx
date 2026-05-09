import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, MapPin, DollarSign, Clock, 
  Paperclip, MessageSquare, ChevronRight, Share2, MoreHorizontal,
  LayoutDashboard, ListTodo, Activity, CheckCircle2, TrendingUp,
  Mail, Phone, ExternalLink
} from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="space-y-8 pb-20">
      {/* Header Banner */}
      <div className="relative h-64 rounded-[40px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
        
        <div className="absolute top-8 left-8">
          <button 
            onClick={onBack}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-all text-white"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-full border border-white/20 uppercase tracking-[0.2em]">{project.type}</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 uppercase tracking-[0.2em]">{project.status}</span>
            </div>
            <h1 className="text-5xl font-bold font-heading tracking-tight">{project.name}</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
              <Share2 size={18} /> Share
            </button>
            <button className="bg-[var(--accent-pink)] px-8 py-3 rounded-2xl text-sm font-bold text-white shadow-[var(--glow-pink)] hover:scale-105 transition-all">
              Edit Project
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Details & Timeline */}
        <div className="col-span-8 space-y-8">
          {/* Project Progress Overview */}
          <GlassCard className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Overall Progress</p>
              <p className="text-3xl font-bold font-heading">{project.progress}%</p>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-pink)]" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
            <div className="border-x border-white/5 space-y-2">
              <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Budget Used</p>
              <p className="text-3xl font-bold font-heading">$156k</p>
              <p className="text-[10px] text-emerald-500 font-bold uppercase">Within Budget</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">Time Spent</p>
              <p className="text-3xl font-bold font-heading">142 Days</p>
              <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">48 Days Remaining</p>
            </div>
          </GlassCard>

          {/* Timeline Tracking */}
          <GlassCard>
            <h3 className="text-lg font-bold font-heading mb-8">Milestone Timeline</h3>
            <div className="space-y-8">
              {[
                { phase: 'Project Initiation', date: 'June 12, 2024', status: 'Completed', current: false },
                { phase: 'Architectural Drafting', date: 'July 28, 2024', status: 'Completed', current: false },
                { phase: 'Structural Analysis', date: 'Aug 15, 2024', status: 'In Progress', current: true },
                { phase: 'Client Review & Approval', date: 'Sept 05, 2024', status: 'Pending', current: false },
                { phase: 'Construction Phase', date: 'Oct 20, 2024', status: 'Pending', current: false },
              ].map((m, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${m.status === 'Completed' ? 'bg-emerald-500 border-emerald-500 text-white' : m.current ? 'bg-[var(--accent-pink)] border-[var(--accent-pink)] text-white shadow-[var(--glow-pink)]' : 'border-white/20'}`}>
                      {m.status === 'Completed' && <CheckCircle2 size={14} />}
                    </div>
                    {i < 4 && <div className={`w-0.5 h-12 my-2 ${m.status === 'Completed' ? 'bg-emerald-500/40' : 'bg-white/5'}`} />}
                  </div>
                  <div className={`flex-grow pb-8 ${m.current ? 'translate-x-2 transition-transform' : ''}`}>
                    <h4 className={`text-sm font-bold ${m.status === 'Pending' ? 'text-[var(--text-secondary)]' : 'text-white'}`}>{m.phase}</h4>
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mt-1">{m.date}</p>
                  </div>
                  {m.current && <span className="text-[8px] bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] border border-[var(--accent-pink)]/40 px-2 py-0.5 rounded-full h-fit mt-1 uppercase font-bold tracking-widest">Current</span>}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Documentation Section */}
          <GlassCard>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold font-heading">Project Documentation</h3>
              <button className="text-xs text-[var(--accent-pink)] font-bold hover:underline">+ Upload File</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Blueprint_Final_V2.pdf', size: '12.4 MB', type: 'PDF' },
                { name: 'Client_Requirements.docx', size: '2.1 MB', type: 'DOC' },
                { name: 'Site_Photos_Sept.zip', size: '145.8 MB', type: 'ZIP' },
                { name: 'Budget_Estimate_Final.xlsx', size: '1.2 MB', type: 'XLS' },
              ].map((doc, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-4 group cursor-pointer hover:border-[var(--accent-pink)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-pink)]">
                    <Paperclip size={20} />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <p className="text-sm font-bold truncate">{doc.name}</p>
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase">{doc.size} • {doc.type}</p>
                  </div>
                  <ExternalLink size={16} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Client & Team */}
        <div className="col-span-4 space-y-8">
          {/* Client Profile Card */}
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-pink)]/10 blur-[60px]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6">Client Information</h3>
            <div className="flex items-center gap-4 mb-6">
              <img src={`https://ui-avatars.com/api/?name=${project.client}&background=333&color=fff`} className="w-16 h-16 rounded-2xl" />
              <div>
                <h4 className="text-xl font-bold font-heading">{project.client}</h4>
                <p className="text-xs text-[var(--text-secondary)]">Strategic Enterprise Client</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-[var(--text-secondary)]" />
                <span>contact@aether.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-[var(--text-secondary)]" />
                <span>+1 (555) 012-3456</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-[var(--text-secondary)]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-xs font-bold transition-all">Send Email</button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-xs font-bold transition-all">Call Client</button>
            </div>
          </GlassCard>

          {/* Project Team */}
          <GlassCard>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6">Assigned Team</h3>
            <div className="space-y-6">
              {[
                { name: project.manager, role: 'Project Manager', status: 'Active' },
                { name: 'Sarah Chen', role: 'Architectural Lead', status: 'Online' },
                { name: 'Marcus Lee', role: 'Structural Engineer', status: 'Online' },
                { name: 'Elena Vogel', role: 'Compliance Officer', status: 'Away' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src={`https://ui-avatars.com/api/?name=${member.name}&background=ff007a&color=fff`} className="w-10 h-10 rounded-xl" />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[var(--bg-card)] ${member.status === 'Away' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{member.name}</p>
                      <p className="text-[10px] text-[var(--text-secondary)]">{member.role}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-[var(--text-secondary)]" />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-xs font-bold transition-all">Manage Team</button>
          </GlassCard>

          {/* Activity Log Preview */}
          <GlassCard>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {[
                { user: 'Marcus Lee', action: 'uploaded 3 files', time: '2h ago' },
                { user: 'Sarah Chen', action: 'updated milestone status', time: '5h ago' },
                { user: 'Elena Vogel', action: 'added a new note', time: '1d ago' },
              ].map((log, i) => (
                <div key={i} className="flex gap-3">
                  <img src={`https://ui-avatars.com/api/?name=${log.user}&background=333&color=fff`} className="w-6 h-6 rounded-md h-fit" />
                  <div>
                    <p className="text-xs font-semibold">
                      <span className="text-white">{log.user}</span> <span className="text-[var(--text-secondary)] font-normal">{log.action}</span>
                    </p>
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 text-[var(--accent-pink)] text-xs font-bold hover:underline">View All Activity</button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
