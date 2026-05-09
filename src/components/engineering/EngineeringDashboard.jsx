import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Rocket, GitPullRequest, Code2, 
  Terminal, Activity, Bug, CheckCircle2, 
  AlertCircle, Server, Globe, Cpu, 
  Users, Lock, Database, Search,
  Zap, BarChart3, TrendingUp, ArrowRight
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

const EngineeringDashboard = () => {
  const stats = [
    { label: 'QA Coverage', value: '94.2%', icon: Shield, color: 'text-emerald-500' },
    { label: 'Build Status', value: 'Passing', icon: CheckCircle2, color: 'text-emerald-500' },
    { label: 'Open PRs', value: '12', icon: GitPullRequest, color: 'text-violet-500' },
    { label: 'Bug Density', value: '0.42', icon: Bug, color: 'text-amber-500' },
  ];

  const deploymentLogs = [
    { env: 'Production', status: 'Deployed', time: '2h ago', ver: 'v1.2.4', color: 'bg-emerald-500' },
    { env: 'Staging', status: 'Building', time: '12m ago', ver: 'v1.2.5-rc1', color: 'bg-[var(--accent-pink)]' },
    { env: 'Development', status: 'Live', time: '4m ago', ver: 'v1.2.5-dev', color: 'bg-blue-500' },
  ];

  return (
    <div className="space-y-10">
      {/* Governance Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold font-heading mb-2">Engineering Governance</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em]">Production Environment • Node Cluster-01</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <Terminal size={16} /> CLI Console
          </button>
          <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold px-8 py-3 rounded-xl text-xs shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:scale-105 transition-all flex items-center gap-2">
            <Rocket size={16} /> Deploy to Production
          </button>
        </div>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[40px] translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">{stat.label}</span>
              <stat.icon size={16} className={stat.color} />
            </div>
            <span className="text-2xl font-bold font-heading">{stat.value}</span>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Release Monitoring */}
        <div className="col-span-8 space-y-8">
          <GlassCard>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-bold font-heading flex items-center gap-2">
                <Activity size={20} className="text-[var(--accent-pink)]" />
                Live Deployment Monitoring
              </h3>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-white/5 rounded-lg text-[8px] font-bold uppercase tracking-widest border border-white/10">Vercel Edge</div>
                <div className="px-3 py-1 bg-white/5 rounded-lg text-[8px] font-bold uppercase tracking-widest border border-white/10">Supabase DB</div>
              </div>
            </div>

            <div className="space-y-6">
              {deploymentLogs.map((log, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl ${log.color.replace('bg-', 'bg-')}/10 flex items-center justify-center text-white`}>
                      <Server size={24} className={log.color.replace('bg-', 'text-')} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{log.env} Pipeline</h4>
                      <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">{log.ver} • {log.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <span className={`w-1.5 h-1.5 rounded-full ${log.color} animate-pulse`} />
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${log.color.replace('bg-', 'text-')}`}>{log.status}</span>
                      </div>
                      <p className="text-[10px] text-[var(--text-secondary)] uppercase mt-1">Uptime: 99.99%</p>
                    </div>
                    <button className="p-3 hover:bg-white/10 rounded-xl transition-all"><ArrowRight size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-8">
            <GlassCard>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <Code2 size={14} className="text-violet-500" /> Coding Standards Compliance
              </h4>
              <div className="space-y-4">
                {[
                  { rule: 'Form Validation Coverage', val: 100, color: 'bg-emerald-500' },
                  { rule: 'RBAC Access Checks', val: 100, color: 'bg-emerald-500' },
                  { rule: 'Branch per Feature Policy', val: 92, color: 'bg-[var(--accent-pink)]' },
                  { rule: 'AI Review Protocol', val: 84, color: 'bg-amber-500' },
                ].map((rule, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-[var(--text-secondary)]">{rule.rule}</span>
                      <span className="text-white">{rule.val}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${rule.val}%` }} className={`h-full ${rule.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <Shield size={14} className="text-emerald-500" /> Security Validation
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                  <Lock size={18} className="text-emerald-500" />
                  <div>
                    <p className="text-xs font-bold text-white">SSL Encryption Active</p>
                    <p className="text-[10px] text-emerald-500/60 uppercase font-bold">SHA-256 Protocol</p>
                  </div>
                </div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                  <AlertCircle size={18} className="text-amber-500" />
                  <div>
                    <p className="text-xs font-bold text-white">1 Pending API Audit</p>
                    <p className="text-[10px] text-amber-500/60 uppercase font-bold">Export Module V1</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Engineering Sidebar */}
        <div className="col-span-4 space-y-8">
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-pink)]/10 blur-[60px]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-8">Release Readiness</h3>
            <div className="flex justify-center py-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="283" strokeDashoffset="42" className="text-[var(--accent-pink)] drop-shadow-[0_0_15px_var(--accent-pink)]" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold font-heading">85%</span>
                  <span className="text-[8px] font-bold text-[var(--text-secondary)] uppercase">Ready</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              {[
                { label: 'QA Testing', status: 'Passed' },
                { label: 'Load Testing', status: 'Stable' },
                { label: 'Security Audit', status: 'Manual Req.' },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-[var(--text-secondary)]">{r.label}</span>
                  <span className={r.status === 'Passed' || r.status === 'Stable' ? 'text-emerald-500' : 'text-amber-500'}>{r.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Review Release Notes</button>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-8">Team Workload</h3>
            <div className="space-y-6">
              {[
                { name: 'Nichekala', role: 'Lead Admin', load: 84 },
                { name: 'Sarah Chen', role: 'Frontend Dev', load: 62 },
                { name: 'Marcus Lee', role: 'Backend Dev', load: 92 },
              ].map((dev, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${dev.name}&background=random`} className="w-8 h-8 rounded-lg" alt={dev.name} />
                      <div>
                        <p className="text-xs font-bold">{dev.name}</p>
                        <p className="text-[8px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">{dev.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white">{dev.load}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${dev.load}%` }} className="h-full bg-violet-500" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default EngineeringDashboard;
